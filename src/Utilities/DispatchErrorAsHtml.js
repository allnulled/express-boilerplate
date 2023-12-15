const ejs = require("ejs");

module.exports = class {
    /**
     * 
     * @name api.Utilities.DispatchErrorAsHtml
     * @type Función
     * @parameter `response:Object` Respuesta de petición.
     * @parameter `error:Error` Error.
     * @description Establece el estado de la respuesta de petición indicada (response) en 500 (ESTADO:BAD REQUEST) y la cabecera de texto en HTML con charset utf8. Luego envía los contenidos como HTM, que son la página de `src/Interface/ejs/error.html` renderizada con el error indicado (error).
     * Si esto falla, imprime el error y luego envía el `error.message` como único texto plano.
     * 
     */
    async action(response, error) {
        this.api.Utilities.Trace("api.Utilities.DispatchErrorAsHtml");
        try {
            const contents = await new Promise((ok, fail) => {
                ejs.renderFile(__dirname + "/../Interface/ejs/error.html", { error }, function(error, text) {
                    if(error) {
                        return fail(error);
                    }
                    return ok(text);
                });
                return undefined;
            });
            return response.status(500).header("Content-type", "text/html; charset=utf-8").send(contents);
        } catch (error) {
            console.log(error);
            return response.status(500).header("Content-type", "text/plain; charset=utf-8").send(error.message);
        }
    }
};