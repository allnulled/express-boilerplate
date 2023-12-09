const sqlstring = require("sqlstring");

module.exports = class {
    async resolve(data, id_columna, controlador) {
        this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.es_actualizable_si_id_usuario_coincide_con");
        if(controlador.name === "Update") {
            const { table, id, _request: request, _response: response } = data;
            let { item_recuperated } = data;
            if(typeof item_recuperated === "undefined") {
                let sql = "";
                sql += "SELECT * FROM ";
                sql += sqlstring.escapeId(table);
                sql += "\n WHERE id = "
                sql += sqlstring.escape(id);
                sql += ";"
                const results = await controlador.api.Utilities.QueryDatabase(sql);
                if(results.length === 0) {
                    throw new Error("No se encontraron resultados para el «id» proporcionado en el decorador de base de datos de tipo interceptor de columna «es_actualizable_si_id_usuario_coincide_con»");
                }
                item_recuperated = results[0];
                data.item_recuperated = results[0];
            }
            const coinciden = parseInt(item_recuperated[id_columna]) === parseInt(request.$$authentication.usuario.id);
            if(!coinciden) {
                throw new Error("No se puede alterar el valor porque el campo «" + id_columna + "» no coincide con tu identificador de usuario en el decorador de base de datos de tipo interceptor de columna «es_actualizable_si_id_usuario_coincide_con»")
            }
        }
    }
};