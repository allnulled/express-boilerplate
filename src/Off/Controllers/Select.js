const sqlstring = require("sqlstring");

module.exports = class {

  name = "Select";

  method = "use";

  route = "^/Select";

  priority = 5000;

  getMiddleware() {
    return [this.api.Middlewares.AuthenticateRequest];
  }

  allowedOperations = ["=", "!=", "<", ">", "<=", ">=", "IS NULL", "IS NOT NULL", "IN", "NOT IN", "LIKE", "NOT LIKE"];

  allowedTables = [];

  forbiddenTables = [];
  
  hiddenColumns = ["Usuario.contrasenya", "Sesion.token"];

  async dispatch(request, response, next) {
    this.api.Utilities.Trace("api.Controllers.Select.dispatch");
    try {
      const data = { _request:request, _response:response, _operacion: "select" };
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
      await this.onBuildSelectFrom(data);
      await this.onBuiltSelectFrom(data);
      await this.onBuildSelectWhere(data);
      await this.onBuiltSelectWhere(data);
      await this.onBuildSelectSearch(data);
      await this.onBuiltSelectSearch(data);
      await this.onBuildSelectOrder(data);
      await this.onBuiltSelectOrder(data);
      await this.onBuildSelectPage(data);
      await this.onBuiltSelectPage(data);
      await this.onExecuteQuery(data);
      await this.onExecutedQuery(data);
      return this.api.Utilities.DispatchSuccess(response, data.output);
    } catch(error) {
      console.log(error);
      return this.api.Utilities.DispatchError(response, error);
    }
  }

  async onCompactParameters(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onCompactParameters");
    const { _request: request, _response: response } = data;
    const { CheckThat } = this.api.Utilities;
    const table = this.api.Utilities.GetRequestParameter(request, "table", false);
    const where_json = this.api.Utilities.GetRequestParameter(request, "where", "[]");
    const order_json = this.api.Utilities.GetRequestParameter(request, "order", '[["id","DESC"]]');
    const page_str = this.api.Utilities.GetRequestParameter(request, "page", "1");
    const items_str = this.api.Utilities.GetRequestParameter(request, "items", "20");
    const search = this.api.Utilities.GetRequestParameter(request, "search", "");
    CheckThat(table, "table", "00000").can(table => table in this.api.Database.CompactedSchema, "be found as table in the schema");
    const fields = Object.keys(this.api.Database.CompactedSchema[table].composicion).filter(columna => !columna.startsWith("$"));
    CheckThat(table, "table", "00001").isString();
    CheckThat(table, "table", "00002").can(table => { if (this.allowedTables.length) { return this.allowedTables.indexOf(table) !== -1; } return true; }, "be listed in allowedTables");
    CheckThat(table, "table", "00003").can(table => { if (this.forbiddenTables.length) { return this.forbiddenTables.indexOf(table) === -1; } return true; }, "not be listed in forbiddenTables");
    if(typeof where_json !== "object") {
      CheckThat(where_json, "where", "00004").isString();
    }
    if(typeof order_json !== "object") {
      CheckThat(order_json, "order", "00005").isString();
    }
    if(typeof page_str !== "number") {
      CheckThat(page_str, "page", "00006").isString();
    }
    if(typeof items_str !== "number") {
      CheckThat(items_str, "items", "00007").isString();
    }
    CheckThat(search, "search", "00008").isString();
    const where = typeof where_json === "object" ? where_json : JSON.parse(where_json);
    const order = typeof order_json === "object" ? order_json : JSON.parse(order_json);
    const page = parseInt(page_str);
    const items = parseInt(items_str);
    CheckThat(where, "where", "00009").isArray();
    CheckThat(order, "order", "00010").isArray();
    CheckThat(page, "page", "00011").isNumber();
    CheckThat(items, "items", "00012").isNumber();
    CheckThat(fields, "fields", "00014").isArray();
    Object.assign(data, { table, fields, where, order, page, items, search });
  }

  async onCompactedParameters(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onCompactedParameters");
    // @OKAY
  }

  async onCheckTablePermissions(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onCheckTablePermissions");
    const { table } = data;
    const permisos_aplicables = this.api.Database.CompactedSchema[table].atributos.comprobar_permiso;
    if(!permisos_aplicables) {
      return;
    }
    const permisos_aplicados = permisos_aplicables.filter(permiso => {
      return (permiso.al.indexOf("select") !== -1) || (permiso.al.indexOf("any") !== -1);
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
    this.api.Utilities.Trace("api.Controllers.Select.onCheckedTablePermissions");
    // @OKAY
  }

  async onCheckColumnRestrictions(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onCheckColumnRestrictions");
    const { CheckThat } = this.api.Utilities;
    const { table, _request: request, where, order } = data;
    const columnas = this.api.Database.CompactedSchema[table].composicion;
    const columnas_nombres = Object.keys(columnas);
    Iterando_columnas:
    for(let index_columnas=0; index_columnas<columnas_nombres.length; index_columnas++) {
      const columna_id = columnas_nombres[index_columnas];
      const columna = columnas[columna_id];
      const restricciones = columna.atributos.comprobar_restriccion;
      if(!restricciones) {
        continue Iterando_columnas;
      } else if(!restricciones.length) {
        continue Iterando_columnas;
      }
      const operaciones_por_select = ["no es seleccionable", "no es filtrable", "no es ordenable" ];
      const restricciones_a_aplicar_por_select = [];
      for(let index_restricciones=0; index_restricciones<restricciones.length; index_restricciones++) {
        const restriccion = restricciones[index_restricciones];
        const entidad = restriccion.entidad;
        if(operaciones_por_select.indexOf(entidad) !== -1) {
          restricciones_a_aplicar_por_select.push(restriccion);
        }
      }
      for(let index_aplicaciones=0; index_aplicaciones<restricciones_a_aplicar_por_select.length; index_aplicaciones++) {
        const restriccion = restricciones_a_aplicar_por_select[index_aplicaciones];
        let { entidad, si: condicion } = restriccion;
        if(condicion.startsWith("@@")) {
          condicion = "this.api.Database.Decorators.Consequencials." + condicion.substr(2);
        } else if(condicion.startsWith("@")) {
          condicion = "this.api.Database.Decorators.Conditionals." + condicion.substr(1);
        }
        condicion = "return " + condicion;
        console.log("[*] Evaluando js » condicional de restricción:");
        console.log(condicion);
        const funcion_condicional = new Function("data", "parameter", condicion);
        const solucion_al_condicional = await funcion_condicional.call(this, data);
        if(solucion_al_condicional === true) {
          if(entidad === "no es seleccionable") {
            console.log("no es seleccionable");
            const posicion = data.fields.indexOf(columna_id);
            if(posicion !== -1) {
              data.fields.splice(posicion, 1);
            }
          } else if(entidad === "no es filtrable") {
            let hay_mencion = false;
            Comprobando_si_menciona_a_columna:
            for(let index_where=0; index_where<where.length; index_where++) {
              const where_rule = where[index_where];
              CheckThat(where_rule, "regla «where» en índice «" + index_where + "»").isArray().hasLengthGreaterThan(0);
              const [ where_column ] = where_rule;
              if(where_column === columna_id) {
                hay_mencion = true;
                break Comprobando_si_menciona_a_columna;
              }
            }
            if(hay_mencion) {
              throw new Error("La columna «" + columna_id + "» no es filtrable conforme a los permisos establecidos");
            }
          } else if(entidad === "no es ordenable") {
            let hay_mencion = false;
            Comprobando_si_menciona_a_columna:
            for(let index_order=0; index_order<order.length; index_order++) {
              const order_rule = order[index_order];
              CheckThat(order_rule, "regla «order» en índice «" + index_order + "»").isArray().hasLengthGreaterThan(0);
              const [ order_column ] = order_rule;
              if(order_column === columna_id) {
                hay_mencion = true;
                break Comprobando_si_menciona_a_columna;
              }
            }
            if(hay_mencion) {
              throw new Error("La columna «" + columna_id + "» no es ordenable conforme a los permisos establecidos");
            }
          }
        }
      }
    }
  }

  onCheckedColumnRestrictions(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onCheckedColumnRestrictions");
    // @OKAY
  }

  async onCheckTableInterceptors(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onCheckTableInterceptors");
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
    this.api.Utilities.Trace("api.Controllers.Select.onCheckedTableInterceptors");
    // @OKAY
  }

  async onCheckColumnInterceptors(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onCheckColumnInterceptors");
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
    this.api.Utilities.Trace("api.Controllers.Select.onCheckedColumnInterceptors");
    // @OKAY
  }

  async onBuildSelectFrom(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuildSelectFrom");
    const { table, fields } = data;
    let sql = "";
    sql += "SELECT ";
    const columnas = fields;
    let has_started_columnas = false;
    Iterating_columnas:
    for(let index_columnas=0; index_columnas<columnas.length; index_columnas++) {
      const columna = columnas[index_columnas];
      if(this.hiddenColumns.indexOf(table + "." + columna) !== -1) {
        continue Iterating_columnas;
      }
      if(has_started_columnas) {
        sql += ",";
      }
      has_started_columnas = true;
      sql += "\n    ";
      sql += sqlstring.escapeId(table);
      sql += ".";
      sql += sqlstring.escapeId(columna);
      sql += " AS ";
      sql += sqlstring.escape(columna);
    }
    sql += "\n  FROM ";
    sql += sqlstring.escapeId(table);
    data.sql = sql;
  }

  async onBuiltSelectFrom(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuiltSelectFrom");
    // @OKAY
  }

  async onBuildSelectWhere(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuildSelectWhere");
    const { CheckThat } = this.api.Utilities;
    const { table, where } = data;
    const where_clone = [...where];
    for(let index_where=0; index_where<where_clone.length; index_where++) {
      const where_item = where_clone[index_where];
      CheckThat(where_item, "where rule " + index_where).isArray();
      const [ columna ] = where_item;
      const columna_completa = table + "." + columna;
      if(this.hiddenColumns.indexOf(columna_completa) !== -1) {
        throw new Error("No se puede filtrar por la columna «" + columna + "» en el controlador «Select»");
      }
    }
    if (!where.length) {
      return;
    }
    let sql = "";
    sql += "\n WHERE ";
    for (let index = 0; index < where.length; index++) {
      const where_rule = where[index];
      const [subject, operation, object] = where_rule;
      if(index !== 0) {
        sql += "\n   AND ";
      }
      sql += sqlstring.escapeId(subject);
      sql += " ";
      if(this.allowedOperations.indexOf(operation) === -1) {
        throw new Error("No se reconoce operación «" + operation + "» en la regla de filtro «" + index + "» en el controlador «Select»");
      }
      sql += operation;
      if ((operation === "IS NULL") || (operation === "IS NOT NULL")) {
        // OK
      } else if ((operation === "IN") || (operation === "NOT IN")) {
        CheckThat(object, "object in where rule " + index, "00013").isArray();
        CheckThat(object.length, "object.length in where rule " + index, "00014").isGreaterThan(0);
        sql += " (";
        for (let index_in = 0; index_in < object.length; index_in++) {
          const object_item = object[index_in];
          if (index_in !== 0) {
            sql += ", ";
          }
          sql += sqlstring.escape(object_item);
        }
        sql += ")";
      } else {
        sql += " ";
        sql += sqlstring.escape(object);
      }
    }
    data.sql += sql;
  }

  async onBuiltSelectWhere(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuiltSelectWhere");
    // @OKAY
  }

  async onBuildSelectSearch(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuildSelectSearch");
    const { table, where, search } = data;
    if (!search.length) {
      return;
    }
    let sql = "";
    const columns = Object.keys(this.api.Database.CompactedSchema[table].composicion).filter(columna => !columna.startsWith("$")).filter(columna => {
      return this.hiddenColumns.indexOf(table + "." + columna) === -1;
    });
    if (!where.length) {
      sql += "\n WHERE (";
    } else {
      sql += "\n   AND (";
    }
    for (let index_search = 0; index_search < columns.length; index_search++) {
      const column = columns[index_search];
      if (index_search !== 0) {
        sql += "\n    OR ";
      }
      sql += sqlstring.escapeId(column);
      sql += " LIKE ";
      sql += sqlstring.escape("%" + search + "%");
    }
    sql += "\n)";
    data.sql += sql;
  }

  async onBuiltSelectSearch(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuiltSelectSearch");
    // @OKAY
  }

  async onBuildSelectOrder(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuildSelectOrder");
    const { CheckThat } = this.api.Utilities;
    const { table, order } = data;
    if (!order.length) {
      return;
    }
    let sql = "";
    sql += "\n ORDER BY ";
    for (let index = 0; index < order.length; index++) {
      const order_rule = order[index];
      const [column, direction] = order_rule;
      if(this.hiddenColumns.indexOf(table + "." + column) !== -1) {
        throw new Error("No se puede ordenar por columna «" + column + "» en el controlador «Select»")
      }
      CheckThat(direction, "direction in order rule " + index, "00015").isString();
      CheckThat(["ASC", "DESC"].indexOf(direction) !== -1, "direction in order rule " + index + " is a valid value", "00008").equals(true);
      if(index !== 0) {
        sql += ", ";
      }
      sql += sqlstring.escapeId(column);
      sql += " ";
      sql += direction;
    }
    data.sql += sql;
  }

  async onBuiltSelectOrder(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuiltSelectOrder");
    // @OKAY
  }
  
  async onBuildSelectPage(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuildSelectPage");
    const { page, items } = data;
    if ((!page) || (!items)) {
      return;
    }
    let sql = "";
    sql += "\n LIMIT ";
    sql += sqlstring.escape(items);
    sql += "\n OFFSET ";
    sql += sqlstring.escape((page * items) - items);
    sql += ";";
    data.sql += sql;
  }

  async onBuiltSelectPage(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuiltSelectPage");
    // @OKAY
  }

  async onExecuteQuery(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onExecuteQuery");
    const { sql } = data;
    const output = await this.api.Utilities.QueryDatabase(sql);
    data.output = { output };
  }

  async onExecutedQuery(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onExecutedQuery");
    // @OKAY
  }

};