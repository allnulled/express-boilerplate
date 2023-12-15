module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Interceptors/Columns/fijar_fecha_actual_de_usuario_al_actualizar.js#resolve
     * @type Función
     * @parameter `data:Object` Requerido. Los parámetros de la request, inclusive request.
     * @parameter `id_columna:String` Requerido. Nombre de la columna.
     * @parameter `controlador:Object` Requerido. El controlador que lo está llamando.
     * @description Si es Insertar o Actualizar, toma un nuevo Date, lo formatea a texto y lo asigna a la columna indicada ("id_columna").
     * 
     */
    resolve(data, id_columna, controlador) {
        if(controlador.name === "Update") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.fijar_fecha_actual_al_actualizar");
            const { _request: request, _response: response, item } = data;
            data.item[id_columna] = this.api.Utilities.GetDateToString(new Date());
        } else if(controlador.name === "Insert") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.fijar_fecha_actual_al_actualizar");
            const { _request: request, _response: response, item } = data;
            data.item[id_columna] = this.api.Utilities.GetDateToString(new Date());
        }
    }
};