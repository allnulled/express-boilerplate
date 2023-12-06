const sqlstring = require("sqlstring");

module.exports = class {

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
            const data = { _request: request, _response: response };
            await this.onCompactParameters(data);
            await this.onCompactedParameters(data);
            await this.onCheckPermissions(data);
            await this.onCheckedPermissions(data);
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
        if(typeof item_json !== "object") {
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
            throw new Error("Se requiere «permiso de administración» para esta operación en el controlador «Insert»")
        }
    }

    onCheckedPermissions(data) {
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
        const [{ last_insert }] = await this.api.Utilities.QueryDatabase("SELECT LAST_INSERT_ROWID() AS last_insert");
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