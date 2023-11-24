const sqlstring = require("sqlstring");

module.exports = class {

    method = "use";

    route = "^/Delete";

    priority = 5000;

    getMiddleware() {
        return [];
    }

    allowedTables = [];

    forbiddenTables = ["Usuario", "Sesion", "Permiso", "Permiso_de_usuario"];

    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Delete");
        try {
            const table = this.api.Utilities.GetRequestParameter(request, "table", false);
            const id_str = this.api.Utilities.GetRequestParameter(request, "id", "{}");
            const { CheckThat } = this.api.Utilities;
            CheckThat(table, "table", "00041").isString();
            CheckThat(table, "table", "00042").can(table => { if(this.allowedTables.length) { return this.allowedTables.indexOf(table) !== -1; } return true; }, "be listed in allowedTables, if any");
            CheckThat(table, "table", "00043").can(table => { if(this.forbiddenTables.length) { return this.forbiddenTables.indexOf(table) === -1; } return true; }, "not be listed in forbiddenTables, if any");
            CheckThat(id_str, "id", "00045").isString();
            const id = parseInt(id_str);
            CheckThat(id, "id", "00044").isNumber();
            let sql = "";
            sql += "DELETE FROM ";
            sql += sqlstring.escapeId(table);
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