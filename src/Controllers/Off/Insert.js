const sqlstring = require("sqlstring");
const BasicController = require(__dirname + "/BasicController.js");

module.exports = class extends BasicController {

  name = "Insert";

  method = "use";

  route = "^/Insert";

  priority = 5000;

  getMiddleware() {
    return [this.api.Middlewares.AuthenticateRequest];
  }

  allowedTables = [];

  forbiddenTables = ["Sesion"];

  forbiddenColumns = [];

  async dispatch(request, response, next) {
    this.api.Utilities.Trace("api.Controllers.Insert.dispatch");
    try {
      const data = { _request: request, _response: response, _operacion: "insert" };
      await this.onCompactParameters(data);
      await this.onCompactedParameters(data);
      await this.onCheckTablePermissionsForInsert(data);
      await this.onCheckedTablePermissionsForInsert(data);
      await this.onCheckColumnRestrictionsForInsert(data);
      await this.onCheckedColumnRestrictionsForInsert(data);
      await this.onCheckTableInterceptorsForInsert(data);
      await this.onCheckedTableInterceptorsForInsert(data);
      await this.onCheckColumnInterceptorsForInsert(data);
      await this.onCheckedColumnInterceptorsForInsert(data);
      await this.onBuildInsertInto(data);
      await this.onBuiltInsertInto(data);
      await this.onBuildInsertValues(data);
      await this.onBuiltInsertValues(data);
      await this.onExecuteQuery(data);
      await this.onExecutedQuery(data);
      return this.api.Utilities.DispatchSuccess(response, data.output);
    } catch (error) {
      return this.api.Utilities.DispatchError(response, error);
    }
  }

  async onCompactParameters(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onCompactParameters");
    const { _request: request, _response: response } = data;
    const table = this.api.Utilities.GetRequestParameter(request, "table", false);
    const item_json = this.api.Utilities.GetRequestParameter(request, "item", "{}");
    const { CheckThat } = this.api.Utilities;
    CheckThat(table, "table", "00021").isString();
    CheckThat(table, "table", "00022").can(table => { if (this.allowedTables.length) { return this.allowedTables.indexOf(table) !== -1; } return true; }, "be listed in allowedTables");
    CheckThat(table, "table", "00023").can(table => { if (this.forbiddenTables.length) { return this.forbiddenTables.indexOf(table) === -1; } return true; }, "not be listed in forbiddenTables");
    if (typeof item_json !== "object") {
      CheckThat(item_json, "item", "00022").isString();
    }
    const item = typeof item_json === "object" ? item_json : JSON.parse(item_json);
    CheckThat(item, "item", "00004").isObject();
    Object.assign(data, { table, item });
  }

  async onCompactedParameters() {
    this.api.Utilities.Trace("api.Controllers.Insert.onCompactedParameters");
    // @OKAY
  }

  async onCheckTablePermissionsForInsert(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onCheckTablePermissionsForInsert");
    const { table } = data;
    const permisos_aplicables = this.api.Database.CompactedSchema[table].atributos.comprobar_permiso;
    if (!permisos_aplicables) {
      return;
    }
    const permisos_aplicados = permisos_aplicables.filter(permiso => {
      return (permiso.al.indexOf("insert") !== -1) || (permiso.al.indexOf("any") !== -1);
    });
    for (let index_permiso = 0; index_permiso < permisos_aplicados.length; index_permiso++) {
      const permiso_aplicado = permisos_aplicados[index_permiso];
      let { si: bloque_si, entonces: bloque_entonces } = permiso_aplicado;
      let js_1 = "";
      js_1 += "const $conditionals = this.api.Database.Decorators.Conditionals;\n";
      js_1 += "const $consequencials = this.api.Database.Decorators.Consequencials;\n";
      js_1 += "const $interceptors = this.api.Database.Decorators.Interceptors;\n";
      js_1 += "return " + bloque_si;
      console.log("[*] Evaluando js » condicional:");
      console.log(js_1);
      const noop_async = async function () {};
      const AsyncFunction = noop_async.constructor;
      const funcion_condicional = new AsyncFunction("data", js_1);
      const solucion_al_condicional = await funcion_condicional.call(this, data);
      if (solucion_al_condicional === true) {
        let js_2 = "";
        js_2 += "const $conditionals = this.api.Database.Decorators.Conditionals;\n";
        js_2 += "const $consequencials = this.api.Database.Decorators.Consequencials;\n";
        js_2 += "const $interceptors = this.api.Database.Decorators.Interceptors;\n";
        js_2 += "return " + bloque_entonces;
        console.log("[*] Evaluando js » consecuencial:");
        console.log(js_2);
        const funcion_consecuencial = new AsyncFunction("data", js_2);
        await funcion_consecuencial.call(this, data);
      }
    }
  }

  onCheckedTablePermissionsForInsert(data) {
    // @OKAY
  }

  async onCheckColumnRestrictionsForInsert(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onCheckColumnRestrictionsForInsert");
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
      const operaciones_por_insert = ["no es insertable"];
      const restricciones_a_aplicar_por_insert = [];
      for (let index_restricciones = 0; index_restricciones < restricciones.length; index_restricciones++) {
        const restriccion = restricciones[index_restricciones];
        const entidad = restriccion.entidad;
        if (operaciones_por_insert.indexOf(entidad) !== -1) {
          restricciones_a_aplicar_por_insert.push(restriccion);
        }
      }
      for (let index_aplicaciones = 0; index_aplicaciones < restricciones_a_aplicar_por_insert.length; index_aplicaciones++) {
        const restriccion = restricciones_a_aplicar_por_insert[index_aplicaciones];
        let { entidad, si: condicion } = restriccion;
        let js = "";
        js += "const $conditionals = this.api.Database.Decorators.Conditionals;\n";
        js += "const $consequencials = this.api.Database.Decorators.Consequencials;\n";
        js += "const $interceptors = this.api.Database.Decorators.Interceptors;\n";
        js += "return ";
        js += condicion;
        console.log("[*] Evaluando js » condicional de restricción:");
        console.log(js);
        const noop_async = async function() {};
        const AsyncFunction = noop_async.constructor;
        const funcion_condicional = new AsyncFunction("data", js);
        const solucion_al_condicional = await funcion_condicional.call(this, data);
        if (solucion_al_condicional === true) {
          delete item[columna_id];
        }
      }
    }
  }

  onCheckedColumnRestrictionsForInsert(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onCheckedColumnRestrictionsForInsert");
    // @OKAY
  }

  async onCheckTableInterceptorsForInsert(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onCheckTableInterceptorsForInsert");
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
      js += "const $consequencials = this.api.Database.Decorators.Consequencials;\n";
      js += "const $interceptors = this.api.Database.Decorators.Interceptors;\n";
      js += "return ";
      js += evaluable.trim();
      console.log("[*] Evaluando js » interceptor de tabla:");
      console.log(js);
      const async_function = new AsyncFunction("data", "interception", "index_interception", js);
      const resultado = await async_function.call(this, data, intercepcion, index_intercepcion);
      if((typeof resultado === "object") && (resultado instanceof AbortSignal)) {
        return resultado;
      }
    }
  }

  async onCheckedTableInterceptorsForInsert(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onCheckedTableInterceptorsForInsert");
    // @OKAY
  }

  async onCheckColumnInterceptorsForInsert(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onCheckColumnInterceptorsForInsert");
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
        js += "const $consequencials = this.api.Database.Decorators.Consequencials;\n";
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

  async onCheckedColumnInterceptorsForInsert(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onCheckedColumnInterceptorsForInsert");
    // @OKAY
  }

  async onBuildInsertInto(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onBuildInsertInto");
    const { table, item } = data;
    const claves = Object.keys(item);
    let sql = "";
    sql += "INSERT INTO ";
    sql += sqlstring.escapeId(table);
    sql += " (\n  ";
    for (let index = 0; index < claves.length; index++) {
      const clave = claves[index];
      if (index !== 0) {
        sql += ",\n  ";
      }
      const columna_completa = table + "." + clave;
      if (this.forbiddenColumns.indexOf(columna_completa) !== -1) {
        throw new Error("No se puede insertar valor «" + clave + "» en el controlador «Insert»");
      }
      sql += sqlstring.escapeId(clave);
    }
    data.sql = sql;
  }

  async onBuiltInsertInto(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onBuiltInsertInto");
    // @OKAY
  }

  async onBuildInsertValues(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onBuildInsertValues");
    const { table, item } = data;
    const claves = Object.keys(item);
    let sql = "";
    sql += "\n) VALUES (\n  ";
    for (let index = 0; index < claves.length; index++) {
      const clave = claves[index];
      const valor = item[clave];
      if (index !== 0) {
        sql += ",\n  ";
      }
      sql += sqlstring.escape(valor);
    }
    sql += "\n)";
    sql += ";";
    data.sql += sql;
  }

  async onBuiltInsertValues(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onBuiltInsertValues");
    // @OKAY
  }

  async onExecuteQuery(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onExecuteQuery");
    const sql = data.sql;
    const output = await this.api.Utilities.QueryDatabase(sql);
    let last_insert = undefined;
    if(process.env.DATABASE_DRIVER === "sqlite") {
      [{ last_insert }] = await this.api.Utilities.QueryDatabase("SELECT LAST_INSERT_ROWID() AS last_insert");
    } else {
      [{ last_insert }] = await this.api.Utilities.QueryDatabase("SELECT LAST_INSERT_ID() AS last_insert");
    }
    data.output = {
      output,
      id: last_insert
    };
  }

  async onExecutedQuery(data) {
    this.api.Utilities.Trace("api.Controllers.Insert.onExecutedQuery");
    // @OKAY
  }
};