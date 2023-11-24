const sqlstring = require("sqlstring");

module.exports = class {

    method = "use";

    route = "^/Update";

    priority = 5000;

    getMiddleware() {
        return [];
    }

    allowedTables = [];

    forbiddenTables = ["Usuario", "Sesion", "Permiso", "Permiso_de_usuario"];

    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Update");
        try {
            const table = this.api.Utilities.GetRequestParameter(request, "table", false);
            const id_str = this.api.Utilities.GetRequestParameter(request, "id", "{}");
            const item_json = this.api.Utilities.GetRequestParameter(request, "item", "{}");
            const { CheckThat } = this.api.Utilities;
            CheckThat(table, "table", "00031").isString();
            CheckThat(table, "table", "00032").can(table => { if(this.allowedTables.length) { return this.allowedTables.indexOf(table) !== -1; } return true; }, "be listed in allowedTables, if any");
            CheckThat(table, "table", "00033").can(table => { if(this.forbiddenTables.length) { return this.forbiddenTables.indexOf(table) === -1; } return true; }, "not be listed in forbiddenTables, if any");
            CheckThat(id_str, "id", "00032").isString();
            CheckThat(item_json, "item", "00033").isString();
            const id = parseInt(id_str);
            const item = JSON.parse(item_json);
            CheckThat(id, "id", "00034").isNumber();
            CheckThat(item, "item", "00035").isObject();
            const claves = Object.keys(item);
            let sql = "";
            sql += "UPDATE ";
            sql += sqlstring.escapeId(table);
            sql += " SET\n  ";
            for(let index=0; index<claves.length; index++) {
                const clave = claves[index];
                const valor = item[clave];
                if(index !== 0) {
                    sql += ",\n  ";
                }
                sql += sqlstring.escapeId(clave);
                sql += " = ";
                sql += sqlstring.escape(valor);
            }
            sql += "\n WHERE id = ";
            sql += sqlstring.escape(id);
            sql += ";";
            const output = await this.api.Utilities.QueryDatabase(sql);
            return this.api.Utilities.DispatchSuccess(response, {
                output,
                id
            });
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

};