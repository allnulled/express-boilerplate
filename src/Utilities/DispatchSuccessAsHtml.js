module.exports = class {
    /**
     * 
     * @name api.Utilities.DispatchSuccessAsHtml
     * @type Función
     * @parameter `response`
     * @parameter `contents`
     * @description Establece el estado de la respuesta de petición indicada (response) en 200 (ESTADO:OK) y la cabecera de texto en HTML con charset utf8. Luego envía los contenidos (contents) como HTML.
     * 
     */
    action(response, contents) {
        this.api.Utilities.Trace("api.Utilities.DispatchSuccessAsHtml");
        response.status(200).header("Content-type", "text/html; charset=utf-8");
        return response.send(contents);
    }
};