module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Interceptors/Columns/fijar_id_de_usuario_al_actualizar.js#resolve
     * @type Función
     * @parameter `data:Object` Requerido. Los parámetros de la request, inclusive request.
     * @parameter `id_columna:String` Requerido. Nombre de la columna.
     * @parameter `controlador:Object` Requerido. El controlador que lo está llamando.
     * @description Si es Insertar o Actualizar, toma el `request.$$authentication.usuario.id` y lo asigna a la columna indicada ("id_columna").
     * 
     */
    resolve(data, id_columna, controlador) {
        if(controlador.name === "Update") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.fijar_id_de_usuario_al_actualizar");
            const { _request: request, _response: response, item } = data;
            data.item[id_columna] = request.$$authentication.usuario.id;
        } else if(controlador.name === "Insert") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.fijar_id_de_usuario_al_actualizar");
            const { _request: request, _response: response, item } = data;
            data.item[id_columna] = request.$$authentication.usuario.id;
        }
    }
};