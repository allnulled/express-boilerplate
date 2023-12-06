const sqlstring = require("sqlstring");

module.exports = class {

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
            const data = { _request: request, _response: response };
            await this.onCompactParameters(data);
            await this.onCompactedParameters(data);
            await this.onCheckPermissions(data);
            await this.onCheckedPermissions(data);
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