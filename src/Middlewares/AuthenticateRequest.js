module.exports = class {
    
    /**
     * 
     * @name api.Middlewares.BodyParserUrlEncoded
     * @type Función
     * @details `await this.api.Utilities.AuthenticateRequest(request);`. En errores, despacha un error en formato JSON.
     * 
     */
    factory() {
        return async (request, response, next) => {
            try {
                await this.api.Utilities.AuthenticateRequest(request);
                return next();
            } catch (error) {
                return this.api.Utilities.DispatchError(response, error);
            }
        };
    }

};