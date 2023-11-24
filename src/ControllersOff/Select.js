const sqlstring = require("sqlstring");

module.exports = class {

    method = "use";

    route = "^/Select";

    priority = 5000;

    getMiddleware() {
        return [];
    }

    allowedTables = [];

    forbiddenTables = ["Usuario", "Sesion", "Permiso", "Permiso_de_usuario"];

    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Select");
        try {
            const table = this.api.Utilities.GetRequestParameter(request, "table", false);
            const where_json = this.api.Utilities.GetRequestParameter(request, "where", "[]");
            const order_json = this.api.Utilities.GetRequestParameter(request, "order", '[["id","DESC"]]');
            const page_str = this.api.Utilities.GetRequestParameter(request, "page", "1");
            const items_str = this.api.Utilities.GetRequestParameter(request, "items", "20");
            const search = this.api.Utilities.GetRequestParameter(request, "search", "");
            const { CheckThat } = this.api.Utilities;
            CheckThat(table, "table", "00001A").differs("Usuario");
            CheckThat(table, "table", "00001").isString();
            CheckThat(table, "table", "00002").can(table => { if(this.allowedTables.length) { return this.allowedTables.indexOf(table) !== -1; } return true; }, "be listed in allowedTables, if any");
            CheckThat(table, "table", "00003").can(table => { if(this.forbiddenTables.length) { return this.forbiddenTables.indexOf(table) === -1; } return true; }, "not be listed in forbiddenTables, if any");
            CheckThat(where_json, "where", "00004").isString();
            CheckThat(order_json, "order", "00005").isString();
            CheckThat(page_str, "page", "00006").isString();
            CheckThat(items_str, "items", "00007").isString();
            CheckThat(search, "search", "00008").isString();
            const where = JSON.parse(where_json);
            const order = JSON.parse(order_json);
            const page = parseInt(page_str);
            const items = parseInt(items_str);
            CheckThat(where, "where", "00009").isArray();
            CheckThat(order, "order", "00010").isArray();
            CheckThat(page, "page", "00011").isNumber();
            CheckThat(items, "items", "00012").isNumber();
            let sql = "";
            sql += "SELECT * FROM ";
            sql += sqlstring.escapeId(table);
            if(where.length) {
                sql += "\n WHERE ";
                for(let index=0; index<where.length; index++) {
                  const where_rule = where[index];
                  const [subject, operation, object] = where_rule;
                  sql += sqlstring.escapeId(subject);
                  sql += " ";
                  sql += operation;
                  if((operation === "IS NULL") || (operation === "IS NOT NULL")) {
                    // OK
                  } else if((operation === "IN") || (operation === "NOT IN")) {
                    CheckThat(object, "object in where rule " + index, "00013").isArray();
                    CheckThat(object.length, "object.length in where rule " + index, "00014").isGreaterThan(0);
                    sql += " (";
                    for(let index_in=0; index_in<object.length; index_in++) {
                      const object_item = object[index_in];
                      if(index_in !== 0) {
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
            }
            if(order.length) {
                sql += "\n ORDER BY ";
                for(let index=0; index<order.length; index++) {
                  const order_rule = order[index];
                  const [column, direction] = order_rule;
                  CheckThat(direction, "direction in order rule " + index, "00015").isString();
                  CheckThat(["ASC","DESC"].indexOf(direction) !== -1, "direction in order rule " + index + " is a valid value", "00008").equals(true);
                  sql += sqlstring.escapeId(column);
                  sql += " ";
                  sql += direction;
                }
            }
            if(page && items) {
                sql += "\n LIMIT ";
                sql += sqlstring.escape(items);
                sql += "\n OFFSET ";
                sql += sqlstring.escape((page * items) - items);
            }
            sql += ";";
            const output = await this.api.Utilities.QueryDatabase(sql);
            return this.api.Utilities.DispatchSuccess(response, {
                output
            });
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

};