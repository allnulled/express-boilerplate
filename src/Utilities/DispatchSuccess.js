module.exports = class {
    /**
     * 
     * @name api.Utilities.DispatchSuccess
     * @type Función
     * @parameter `response:Object` Respuesta de la petición.
     * @parameter `data:Object` Datos de respuesta.
     * @description Establece el estado de la respuesta de petición indicada (response) en 200 (ESTADO:OK) y envía un JSON con una cabecera estándar de petición con éxito enviando los datos indicados (data).
     * 
     */
    action(response, data) {
        this.api.Utilities.Trace("api.Utilities.DispatchSuccess");
        return response.status(200).json({
            app: process.env.APP_IDENTIFIER,
            time: this.api.Utilities.GetDateToString(new Date()),
            data
        });
    }
};