module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Interceptors/Columns/fijar_id_de_usuario_al_insertar.js#resolve
     * @type Función
     * @parameter `data:Object` Requerido. Objeto de parámetros de la petición.
     * @parameter `id_columna:String` Requerido. El nombre de la columna que contiene el id de usuario.
     * @parameter `controlador:Object` Requerido.
     * @description Si es Insert, toma el `request.$$authentication.usuario.id` y lo pone en la columna indicada ("id_columna").
     * 
     */
    resolve(data, id_columna, controlador) {
        if(controlador.name === "Insert") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.fijar_id_de_usuario_al_insertar");
            const { _request: request, _response: response, item } = data;
            data.item[id_columna] = request.$$authentication.usuario.id;
        }
    }
};