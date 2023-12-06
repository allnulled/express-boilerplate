const sqlstring = require("sqlstring");

module.exports = class {

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
      const data = { _request:request, _response:response };
      await this.onCompactParameters(data);
      await this.onCompactedParameters(data);
      await this.onCheckPermissions(data);
      await this.onCheckedPermissions(data);
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
    const table = this.api.Utilities.GetRequestParameter(request, "table", false);
    const where_json = this.api.Utilities.GetRequestParameter(request, "where", "[]");
    const order_json = this.api.Utilities.GetRequestParameter(request, "order", '[["id","DESC"]]');
    const page_str = this.api.Utilities.GetRequestParameter(request, "page", "1");
    const items_str = this.api.Utilities.GetRequestParameter(request, "items", "20");
    const search = this.api.Utilities.GetRequestParameter(request, "search", "");
    const { CheckThat } = this.api.Utilities;
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
    Object.assign(data, { table, where, order, page, items, search });
  }

  async onCompactedParameters(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onCompactedParameters");
    // @OKAY
  }

  onCheckPermissions(data) {
      const { table } = data;
      if(table === "Usuario") {
          return this.onCheckPermissionsForTableUsuario(data);
      } else if(table === "Permiso") {
          return this.onCheckPermissionsForTablePermiso(data);
      } else if(table === "Permiso_de_usuario") {
          return this.onCheckPermissionsForTablePermisoDeUsuario(data);
      }
  }

  onCheckPermissionsForTableUsuario(data) {
      return this.onCheckItIsAdministrador(data);
  }

  onCheckPermissionsForTablePermiso(data) {
      return this.onCheckItIsAdministrador(data);
  }
  
  onCheckPermissionsForTablePermisoDeUsuario(data) {
      return this.onCheckItIsAdministrador(data);
  }

  onCheckItIsAdministrador(data) {
      const { _request: request } = data;
      const isAdministrador = request.$$authentication.permisos.filter(permiso => permiso.nombre === "permiso de administración").length !== 0;
      if(!isAdministrador) {
          throw new Error("Se requiere «permiso de administración» para esta operación en el controlador «Select»")
      }
  }

  onCheckedPermissions(data) {
      // @OKAY
  }

  async onBuildSelectFrom(data) {
    this.api.Utilities.Trace("api.Controllers.Select.onBuildSelectFrom");
    const { table } = data;
    let sql = "";
    sql += "SELECT ";
    const columnas = Object.keys(this.api.Database.CompactedSchema[table].composicion).filter(columna => !columna.startsWith("$"));
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