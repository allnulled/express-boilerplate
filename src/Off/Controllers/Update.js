const sqlstring = require("sqlstring");

module.exports = class {

    name = "Update";

    method = "use";

    route = "^/Update";

    priority = 5000;

    getMiddleware() {
        return [this.api.Middlewares.AuthenticateRequest];
    }

    allowedTables = [];

    forbiddenTables = [];
    
    forbiddenColumns = [];

    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Update.dispatch");
        try {
            const data = { _request: request, _response: response, _operacion: "update" };
            await this.onCompactParameters(data);
            await this.onCompactedParameters(data);
            await this.onCheckTablePermissions(data);
            await this.onCheckedTablePermissions(data);
            await this.onCheckColumnRestrictions(data);
            await this.onCheckedColumnRestrictions(data);
            await this.onCheckTableInterceptors(data);
            await this.onCheckedTableInterceptors(data);
            await this.onCheckColumnInterceptors(data);
            await this.onCheckedColumnInterceptors(data);
            await this.onBuildUpdateSet(data);
            await this.onBuiltUpdateSet(data);
            await this.onBuildUpdateWhere(data);
            await this.onBuiltUpdateWhere(data);
            await this.onExecuteQuery(data);
            await this.onExecutedQuery(data);
            return this.api.Utilities.DispatchSuccess(response, data.output);
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

    async onCompactParameters(data) {
        this.api.Utilities.Trace("api.Controllers.Update.onCompactParameters");
        const { _request: request } = data;
        const table = this.api.Utilities.GetRequestParameter(request, "table", false);
        const id_str = this.api.Utilities.GetRequestParameter(request, "id", "{}");
        const item_json = this.api.Utilities.GetRequestParameter(request, "item", "{}");
        const { CheckThat } = this.api.Utilities;
        CheckThat(table, "table", "00031").isString();
        CheckThat(table, "table", "00032").can(table => { if(this.allowedTables.length) { return this.allowedTables.indexOf(table) !== -1; } return true; }, "be listed in allowedTables");
        CheckThat(table, "table", "00033").can(table => { if(this.forbiddenTables.length) { return this.forbiddenTables.indexOf(table) === -1; } return true; }, "not be listed in forbiddenTables");
        CheckThat(id_str, "id", "00032").isString();
        const id = parseInt(id_str);
        if(typeof item_json !== "object") {
            CheckThat(item_json, "item", "00033").isString();
        }
        const item = typeof item_json === 'object' ? item_json : JSON.parse(item_json);
        CheckThat(id, "id", "00034").isNumber();
        CheckThat(item, "item", "00035").isObject();
        Object.assign(data, { table, id, item, columns: Object.keys(item) });
    }

    async onCompactedParameters(data) {
        this.api.Utilities.Trace("api.Controllers.Update.onCompactedParameters");
        // @OKAY
    }

    async onCheckTablePermissions(data) {
        this.api.Utilities.Trace("api.Controllers.Update.onCheckTablePermissions");
        const { table } = data;
        const permisos_aplicables = this.api.Database.CompactedSchema[table].atributos.comprobar_permiso;
        if(!permisos_aplicables) {
        return;
        }
        const permisos_aplicados = permisos_aplicables.filter(permiso => {
        return (permiso.al.indexOf("update") !== -1) || (permiso.al.indexOf("any") !== -1);
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

    async onCheckColumnRestrictions(data) {
      this.api.Utilities.Trace("api.Controllers.Update.onCheckColumnRestrictions");
      const { CheckThat } = this.api.Utilities;
      const { table, _request: request, where, order, item } = data;
      const columnas = this.api.Database.CompactedSchema[table].composicion;
      const columnas_nombres = Object.keys(columnas);
      Iterando_columnas:
      for (let index_columnas = 0; index_columnas < columnas_nombres.length; index_columnas++) {
        const columna_id = columnas_nombres[index_columnas];
        const columna = columnas[columna_id];
        const restricciones = columna.atributos.comprobar_restriccion;
        if (!restricciones) {
          continue Iterando_columnas;
        } else if (!restricciones.length) {
          continue Iterando_columnas;
        }
        const operaciones_por_update = ["no es actualizable"];
        const restricciones_a_aplicar_por_update = [];
        for (let index_restricciones = 0; index_restricciones < restricciones.length; index_restricciones++) {
          const restriccion = restricciones[index_restricciones];
          const entidad = restriccion.entidad;
          if (operaciones_por_update.indexOf(entidad) !== -1) {
            restricciones_a_aplicar_por_update.push(restriccion);
          }
        }
        for (let index_aplicaciones = 0; index_aplicaciones < restricciones_a_aplicar_por_update.length; index_aplicaciones++) {
          const restriccion = restricciones_a_aplicar_por_update[index_aplicaciones];
          let { entidad, si: condicion } = restriccion;
          if (condicion.startsWith("@@")) {
            condicion = "this.api.Database.Decorators.Consequencials." + condicion.substr(2);
          } else if (condicion.startsWith("@")) {
            condicion = "this.api.Database.Decorators.Conditionals." + condicion.substr(1);
          }
          condicion = "return " + condicion;
          console.log("[*] Evaluando js » condicional de restricción:");
          console.log(condicion);
          const funcion_condicional = new Function("data", "parameter", condicion);
          const solucion_al_condicional = await funcion_condicional.call(this, data);
          if (solucion_al_condicional === true) {
            delete item[columna_id];
          }
        }
      }
    }
  
    onCheckedColumnRestrictions(data) {
      this.api.Utilities.Trace("api.Controllers.Update.onCheckedColumnRestrictions");
      // @OKAY
    }

    async onCheckTableInterceptors(data) {
      this.api.Utilities.Trace("api.Controllers.Update.onCheckTableInterceptors");
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
      this.api.Utilities.Trace("api.Controllers.Update.onCheckedTableInterceptors");
      // @OKAY
    }
  
    async onCheckColumnInterceptors(data) {
      this.api.Utilities.Trace("api.Controllers.Update.onCheckColumnInterceptors");
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
      this.api.Utilities.Trace("api.Controllers.Update.onCheckedColumnInterceptors");
      // @OKAY
    }

    async onBuildUpdateSet(data) {
        this.api.Utilities.Trace("api.Controllers.Update.onBuildUpdateSet");
        const { table, columns, item } = data;
        let sql = "";
        sql += "UPDATE ";
        sql += sqlstring.escapeId(table);
        sql += " SET\n  ";
        for(let index=0; index<columns.length; index++) {
            const columna = columns[index];
            const columna_completa = table + "." + columna;
            if(this.forbiddenColumns.indexOf(columna_completa) !== -1) {
                throw new Error("No se puede alterar la columna «" + columna_completa + "» en el controlador «Update»");
            }
            const valor = item[columna];
            if(index !== 0) {
                sql += ",\n  ";
            }
            sql += sqlstring.escapeId(columna);
            sql += " = ";
            sql += sqlstring.escape(valor);
        }
        Object.assign(data, { sql });
    }

    async onBuiltUpdateSet(data) {
        this.api.Utilities.Trace("api.Controllers.Update.onBuiltUpdateSet");
        // @OKAY
    }

    async onBuildUpdateWhere(data) {
        this.api.Utilities.Trace("api.Controllers.Update.onBuildUpdateWhere");
        const { id } = data;
        let sql = data.sql;
        sql += "\n WHERE id = ";
        sql += sqlstring.escape(id);
        sql += ";";
        Object.assign(data, { sql });
    }

    async onBuiltUpdateWhere(data) {
        this.api.Utilities.Trace("api.Controllers.Update.onBuiltUpdateWhere");
        // @OKAY
    }

    async onExecuteQuery(data) {
        this.api.Utilities.Trace("api.Controllers.Update.onExecuteQuery");
        const { sql, id } = data;
        const result = await this.api.Utilities.QueryDatabase(sql);
        data.output = { id, output: result };
    }

    async onExecutedQuery(data) {
        this.api.Utilities.Trace("api.Controllers.Update.onExecutedQuery");
        // @OKAY
    }

};