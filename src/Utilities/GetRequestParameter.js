module.exports = class {
    /**
     * 
     * @name api.Utilities.GetRequestParameter
     * @type Función
     * @parameter `request:Object` Petición (objeto tipo Request de express) de la cual tomar el parámetro
     * @parameter `name:String` Nombre del parámetro que tomar.
     * @parameter `defaultValue:any` Valor que será devuelto en caso de no existir tal parámetro.
     * @returns `parameter:any` Devuelve el parámetro tomado del primero de entre, y por este orden:
     *    - `request.body`
     *    - `request.query`
     *    - `request.headers`
     * 
     */
    action(request, name, defaultValue = undefined) {
        this.api.Utilities.Trace("api.Utilities.GetRequestParameter");
        const bodyParameter = request.body[name];
        if(bodyParameter) {
            return bodyParameter;
        }
        const queryParameter = request.query[name];
        if(queryParameter) {
            return queryParameter;
        }
        const headerParameter = request.headers[name];
        if(headerParameter) {
            return headerParameter;
        }
        return defaultValue;
    }
};