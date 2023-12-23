const sanitizeHtml = require("sanitize-html");

module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Interceptors/Columns/solo_html_seguro.js#resolve
     * @type Función
     * @parameter `data:Object` Requerido. Este objeto contiene los parámetros de la petición, inclusive la petición y la respuesta.
     * @parameter `id_columna:String|Number` Requerido. Nombre de la columna cuyo valor es a fijar.
     * @parameter `controlador:Object` Requerido. Este es el objeto del controlador que lo ha enchufado. Puede ser uno entre los controladores CRUD: Select, Insert, Update o Delete.
     * @parameter `valor:String` Requerido. Valor a fijar.
     * @description Comprueba si es operación Insert o Update.
     * Si es, parsea el valor de la columna con la librería `sanitize-html` y establece el valor en lo que ésta devuelve.
     * 
     */
    resolve(data, id_columna, controlador) {
        if(["Insert", "Update"].indexOf(controlador.name) !== -1) {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Columns.solo_html_seguro");
            const html_sanitizado = sanitizeHtml(data.item[id_columna]);
            data.item[id_columna] = html_sanitizado;
        }
    }
};