module.exports = class {
    resolve(data, id_columna, controlador, valor) {
        if(controlador.name === "Insert") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.fijar_valor_inicial");
            data.item[id_columna] = valor;
        }
    }
};