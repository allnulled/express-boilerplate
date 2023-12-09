const sqlstring = require("sqlstring");

module.exports = class {

    name = "Delete";

    method = "use";

    route = "^/Delete";

    priority = 5000;

    getMiddleware() {
        return [this.api.Middlewares.AuthenticateRequest];
    }

    allowedTables = [];

    forbiddenTables = ["Usuario", "Sesion", "Permiso", "Permiso_de_usuario"];

    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Delete.dispatch");
        try {
            const data = { _request: request, _response: response, _operacion: "delete" };
            await this.onCompactParameters(data);
            await this.onCompactedParameters(data);
            await this.onCheckTablePermissions(data);
            await this.onCheckedTablePermissions(data);
            await this.onCheckTableInterceptors(data);
            await this.onCheckedTableInterceptors(data);
            await this.onCheckColumnInterceptors(data);
            await this.onCheckedColumnInterceptors(data);
            await this.onBuildDeleteFrom(data);
            await this.onBuiltDeleteFrom(data);
            await this.onBuildDeleteWhere(data);
            await this.onBuiltDeleteWhere(data);
            await this.onExecuteQuery(data);
            await this.onExecutedQuery(data);
            return this.api.Utilities.DispatchSuccess(response, data.output);
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

    async onCompactParameters(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.onCompactParameters");
        const { _request: request } = data;
        const table = this.api.Utilities.GetRequestParameter(request, "table", false);
        const id_str = this.api.Utilities.GetRequestParameter(request, "id", "{}");
        const { CheckThat } = this.api.Utilities;
        CheckThat(table, "table", "00041").isString();
        CheckThat(table, "table", "00042").can(table => { if(this.allowedTables.length) { return this.allowedTables.indexOf(table) !== -1; } return true; }, "be listed in allowedTables");
        CheckThat(table, "table", "00043").can(table => { if(this.forbiddenTables.length) { return this.forbiddenTables.indexOf(table) === -1; } return true; }, "not be listed in forbiddenTables");
        if(typeof id_str !== "number") {
            CheckThat(id_str, "id", "00045").isString();
        }
        const id = typeof id_str === "number" ? id_str : parseInt(id_str);
        CheckThat(id, "id", "00044").isNumber();
        Object.assign(data, { table, id });
    }

    async onCompactedParameters(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.onCompactedParameters");
        // @OKAY
    }

    async onCheckTablePermissions(data) {
      this.api.Utilities.Trace("api.Controllers.Delete.onCheckTablePermissions");
      const { table } = data;
      const permisos_aplicables = this.api.Database.CompactedSchema[table].atributos.comprobar_permiso;
      if(!permisos_aplicables) {
      return;
      }
      const permisos_aplicados = permisos_aplicables.filter(permiso => {
      return (permiso.al.indexOf("delete") !== -1) || (permiso.al.indexOf("any") !== -1);
      });
      for(let index_permiso=0; index_permiso<permisos_aplicados.length; index_permiso++) {
      const permiso_aplicado = permisos_aplicados[index_permiso];
      let { si: condicional, entonces: consecuencial } = permiso_aplicado;
      if(condicional.startsWith("@@")) {
          condicional = "this.api.Database.Decorators.Consequencials." + condicional.substr(2);
      } else if(condicional.startsWith("@")) {
          condicional = "this.api.Database.Decorators.Conditionals." + condicional.substr(1);
      }
      if(consecuencial.startsWith("@@")) {
          consecuencial = "this.api.Database.Decorators.Consequencials." + consecuencial.substr(2);
      } else if(consecuencial.startsWith("@")) {
          consecuencial = "this.api.Database.Decorators.Conditionals." + consecuencial.substr(1);
      }
      condicional = "return " + condicional;
      consecuencial = "return " + consecuencial;
      console.log("[*] Evaluando js » condicional:");
      console.log(condicional);
      const funcion_condicional = new Function("data", "parameter", condicional);
      const solucion_al_condicional = await funcion_condicional.call(this, data);
      if(solucion_al_condicional === true) {
          console.log("[*] Evaluando js » consecuencial:");
          console.log(consecuencial);
          const funcion_consecuencial = new Function("data", "parameter", consecuencial);
          await funcion_consecuencial.call(this, data);
      }
      }
    }
  
    onCheckedTablePermissions(data) {
        // @OKAY
    }

    async onCheckTableInterceptors(data) {
      this.api.Utilities.Trace("api.Controllers.Delete.onCheckTableInterceptors");
      const { table } = data;
      const intercepciones = this.api.Database.CompactedSchema[table].atributos.interceptar;
      if(typeof intercepciones === "undefined") {
        return false;
      }
      for(let index_intercepcion=0; index_intercepcion<intercepciones.length; index_intercepcion++) {
        const intercepcion = intercepciones[index_intercepcion];
        const evaluable = intercepcion.eval;
        const noop_async = async function() {};
        const AsyncFunction = noop_async.constructor;
        let js = "";
        js += "const $conditionals = this.api.Database.Decorators.Conditionals;\n";
        js += "const $consequentials = this.api.Database.Decorators.Consequentials;\n";
        js += "const $interceptors = this.api.Database.Decorators.Interceptors;\n";
        js += "return ";
        js += evaluable.trim();
        console.log("[*] Evaluando js » interceptor de tabla:");
        console.log(js);
        const async_function = new AsyncFunction("data", "interception", "index_intercepcion", js);
        const resultado = await async_function.call(this, data, columna_id, intercepcion, index_intercepcion);
        if((typeof resultado === "object") && (resultado instanceof AbortSignal)) {
          return resultado;
        }
      }
    }
  
    async onCheckedTableInterceptors(data) {
      this.api.Utilities.Trace("api.Controllers.Delete.onCheckedTableInterceptors");
      // @OKAY
    }
  
    async onCheckColumnInterceptors(data) {
      this.api.Utilities.Trace("api.Controllers.Delete.onCheckColumnInterceptors");
      const { table } = data;
      const columnas = this.api.Database.CompactedSchema[table].composicion;
      const columnas_ids = Object.keys(columnas);
      Iterando_columnas:
      for(let index=0; index<columnas_ids.length; index++) {
        const columna_id = columnas_ids[index];
        const columna = columnas[columna_id];
        const intercepciones = columna.atributos.interceptar;
        if(typeof intercepciones === "undefined") {
          continue Iterando_columnas;
        }
        for(let index_intercepcion=0; index_intercepcion<intercepciones.length; index_intercepcion++) {
          const intercepcion = intercepciones[index_intercepcion];
          const evaluable = intercepcion.eval;
          const noop_async = async function() {};
          const AsyncFunction = noop_async.constructor;
          let js = "";
          js += "const $conditionals = this.api.Database.Decorators.Conditionals;\n";
          js += "const $consequentials = this.api.Database.Decorators.Consequentials;\n";
          js += "const $interceptors = this.api.Database.Decorators.Interceptors;\n";
          js += "return ";
          js += evaluable.trim();
          console.log("[*] Evaluando js » interceptor de columna:");
          console.log(js);
          const async_function = new AsyncFunction("data", "id_column", "interception", "index_intercepcion", js);
          const resultado = await async_function.call(this, data, columna_id, intercepcion, index_intercepcion);
          if((typeof resultado === "object") && (resultado instanceof AbortSignal)) {
            return resultado;
          }
        }
      }
    }
  
    async onCheckedColumnInterceptors(data) {
      this.api.Utilities.Trace("api.Controllers.Delete.onCheckedColumnInterceptors");
      // @OKAY
    }
    
    async onBuildDeleteFrom(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.onBuildDeleteFrom");
        const { table } = data;
        let sql = "";
        sql += "DELETE FROM ";
        sql += sqlstring.escapeId(table);
        Object.assign(data, { sql });
    }
    
    async onBuiltDeleteFrom(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.onBuiltDeleteFrom");
        // @OKAY
    }
    
    async onBuildDeleteWhere(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.onBuildDeleteWhere");
        const { id } = data;
        let sql = "";
        sql += "\n WHERE id = ";
        sql += sqlstring.escape(id);
        sql += ";";
        data.sql += sql;
    }
    
    async onBuiltDeleteWhere(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.onBuiltDeleteWhere");
        // @OKAY
    }
    
    async onExecuteQuery(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.onExecuteQuery");
        const output = await this.api.Utilities.QueryDatabase(data.sql);
        data.output = { output };
    }
    
    async onExecutedQuery(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.onExecutedQuery");
        // @OKAY
    }    

};