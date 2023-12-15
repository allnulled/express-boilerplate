const sqlstring = require("sqlstring");

module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Interceptors/Columns/es_actualizable_si_id_usuario_coincide_con.js#resolve
     * @type Función
     * @parameter `data:Object` Los parámetros de la petición, petición inclusive.
     * @parameter `id_columna:String` Nombre de la columna.
     * @parameter `controlador:Object` Instancia de controlador que enchufa este decorador.
     * @description Lanza un error si se está intentando actualizar pero la columna no coincide con el identificador de usuario.
     * Busca en `data.item_recuperated` y si no encuentra, hace una query buscando el `data.id` como id, usando `data.table` como tabla.
     * Compara el `request.$$authentication.usuario.id` con el valor de esta columna indicada (id_columna).
     * Si no coinciden, lanza un error de que el valor no se puede alterar.
     * 
     */
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
                const results = await this.api.Utilities.QueryDatabase(sql);
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