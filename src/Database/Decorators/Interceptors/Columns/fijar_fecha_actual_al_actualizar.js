module.exports = class {
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