const sqlstring = require("sqlstring");

module.exports = class {
    async resolve(data, controlador, tabla_historial, columna_operacion_historial = "operacion", columna_tabla_historial = "tabla", columna_identificador_historial = "identificador", columna_parametros_historial = "parametros", columna_autentificacion_historial = "autentificacion", columna_creado_en_historial = "creado_en") {
        const { table, id, _request: request, _response: response } = data;
        const insert_into_historial = () => {
            let sql = "";
            sql += "INSERT INTO ";
            sql += sqlstring.escapeId(tabla_historial);
            sql += " (\n  ";
            sql += sqlstring.escapeId(columna_operacion_historial);
            sql += ",\n  ";
            sql += sqlstring.escapeId(columna_tabla_historial);
            sql += ",\n  ";
            sql += sqlstring.escapeId(columna_identificador_historial);
            sql += ",\n  ";
            sql += sqlstring.escapeId(columna_parametros_historial);
            sql += ",\n  ";
            sql += sqlstring.escapeId(columna_autentificacion_historial);
            sql += ",\n  ";
            sql += sqlstring.escapeId(columna_creado_en_historial);
            sql += "\n) VALUES (\n  ";
            sql += sqlstring.escape(controlador.name);
            sql += ",\n  ";
            sql += sqlstring.escape(table);
            sql += ",\n  ";
            sql += sqlstring.escape(data.id);
            sql += ",\n  ";
            sql += sqlstring.escape(JSON.stringify(Object.assign({}, {
                query: request.query,
                body: request.body,
                url: request.originalUrl,
                ip: "-",
                headers: request.headers
            })));
            sql += ",\n  ";
            sql += sqlstring.escape(JSON.stringify(request.$$authentication.usuario));
            sql += ",\n  ";
            sql += sqlstring.escape(this.api.Utilities.GetDateToString(new Date()));
            sql += "\n);";
            return this.api.Utilities.QueryDatabase(sql);
        };
        if(controlador.name === "Insert") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Tables.registrar_cambios_en");
            return await insert_into_historial();
        } else if(controlador.name === "Update") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Tables.registrar_cambios_en");
            return await insert_into_historial();
        } else if(controlador.name === "Delete") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Tables.registrar_cambios_en");
            return await insert_into_historial();
        }
    }
};