module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Interceptors/Columns/fijar_valor_inicial.js#resolve
     * @type Función
     * @parameter `data:Object` Requerido. Este objeto contiene los parámetros de la petición, inclusive la petición y la respuesta.
     * @parameter `id_columna:String|Number` Requerido. Nombre de la columna cuyo valor es a fijar.
     * @parameter `controlador:Object` Requerido. Este es el objeto del controlador que lo ha enchufado. Puede ser uno entre los controladores CRUD: Select, Insert, Update o Delete.
     * @parameter `valor:String` Requerido. Valor a fijar.
     * @description Comprueba si es operación Insert.
     * Si es, fija el valor indicado (valor) en la columna indicada (id_columna).
     * 
     */
    resolve(data, id_columna, controlador, valor) {
        if(controlador.name === "Insert") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.fijar_valor_inicial");
            data.item[id_columna] = valor;
        }
    }
};