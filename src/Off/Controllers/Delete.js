const sqlstring = require("sqlstring");

module.exports = class {

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
            const data = { _request: request, _response: response };
            await this.compactParameters(data);
            await this.compactedParameters(data);
            await this.buildDeleteFrom(data);
            await this.builtDeleteFrom(data);
            await this.buildDeleteWhere(data);
            await this.builtDeleteWhere(data);
            await this.executeQuery(data);
            await this.executedQuery(data);
            return this.api.Utilities.DispatchSuccess(response, data.output);
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

    async compactParameters(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.compactParameters");
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

    async compactedParameters(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.compactedParameters");
        // @OKAY
    }
    
    async buildDeleteFrom(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.buildDeleteFrom");
        const { table } = data;
        let sql = "";
        sql += "DELETE FROM ";
        sql += sqlstring.escapeId(table);
        Object.assign(data, { sql });
    }
    
    async builtDeleteFrom(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.builtDeleteFrom");
        // @OKAY
    }
    
    async buildDeleteWhere(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.buildDeleteWhere");
        const { id } = data;
        let sql = "";
        sql += "\n WHERE id = ";
        sql += sqlstring.escape(id);
        sql += ";";
        data.sql += sql;
    }
    
    async builtDeleteWhere(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.builtDeleteWhere");
        // @OKAY
    }
    
    async executeQuery(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.executeQuery");
        const output = await this.api.Utilities.QueryDatabase(data.sql);
        data.output = { output };
    }
    
    async executedQuery(data) {
        this.api.Utilities.Trace("api.Controllers.Delete.executedQuery");
        // @OKAY
    }    

};