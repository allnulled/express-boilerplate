const sqlstring = require("sqlstring");

module.exports = class {

    method = "use";

    route = "^/Insert";

    priority = 5000;

    getMiddleware() {
        return [];
    }

    allowedTables = [];

    forbiddenTables = ["Usuario", "Sesion", "Permiso", "Permiso_de_usuario"];

    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Insert");
        try {
            const table = this.api.Utilities.GetRequestParameter(request, "table", false);
            const item_json = this.api.Utilities.GetRequestParameter(request, "item", "{}");
            const { CheckThat } = this.api.Utilities;
            CheckThat(table, "table", "00021").isString();
            CheckThat(table, "table", "00022").can(table => { if(this.allowedTables.length) { return this.allowedTables.indexOf(table) !== -1; } return true; }, "be listed in allowedTables, if any");
            CheckThat(table, "table", "00023").can(table => { if(this.forbiddenTables.length) { return this.forbiddenTables.indexOf(table) === -1; } return true; }, "not be listed in forbiddenTables, if any");
            CheckThat(item_json, "item", "00022").isString();
            const item = JSON.parse(item_json);
            CheckThat(item, "item", "00004").isObject();
            const claves = Object.keys(item);
            let sql = "";
            sql += "INSERT INTO ";
            sql += sqlstring.escapeId(table);
            sql += " (\n  ";
            for(let index=0; index<claves.length; index++) {
                const clave = claves[index];
                if(index !== 0) {
                    sql += ",\n  ";
                }
                sql += sqlstring.escapeId(clave);
            }
            sql += "\n) VALUES (\n  ";
            for(let index=0; index<claves.length; index++) {
                const clave = claves[index];
                const valor = item[clave];
                if(index !== 0) {
                    sql += ",\n  ";
                }
                sql += sqlstring.escape(valor);
            }
            sql += "\n)";
            sql += ";";
            const output = await this.api.Utilities.QueryDatabase(sql);
            const [{last_insert}] = await this.api.Utilities.QueryDatabase("SELECT LAST_INSERT_ROWID() AS last_insert");
            return this.api.Utilities.DispatchSuccess(response, {
                output,
                id: last_insert
            });
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

};