module.exports = class {
    
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