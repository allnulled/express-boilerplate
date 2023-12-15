module.exports = class {
    /**
     * 
     * @name api.Utilities.DispatchSuccess
     * @type Función
     * @parameter `response:Object` Respuesta de la petición.
     * @parameter `error:Error` Error.
     * @description Establece el estado de la respuesta de petición indicada (response) en 500 (ESTADO:BAD REQUEST) y envía un JSON con una cabecera estándar de petición con fallo enviando el error indicado (error).
     * 
     */
    action(response, error) {
        this.api.Utilities.Trace("api.Utilities.DispatchError");
        console.log(error);
        return response.status(500).json({
            app: process.env.APP_IDENTIFIER,
            time: this.api.Utilities.GetDateToString(new Date()),
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack
            }
        });
    }
};