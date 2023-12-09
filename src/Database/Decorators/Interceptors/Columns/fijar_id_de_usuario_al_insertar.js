module.exports = class {
    resolve(data, id_columna, controlador) {
        if(controlador.name === "Insert") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.fijar_id_de_usuario_al_insertar");
            const { _request: request, _response: response, item } = data;
            data.item[id_columna] = request.$$authentication.usuario.id;
        }
    }
};