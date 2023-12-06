module.exports = class {

    method = "use";
    
    route = "^/Schema";

    priority = 5000;
    
    getMiddleware() {
        return [this.api.Middlewares.AuthenticateRequest];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Schema");
        return this.api.Utilities.DispatchSuccess(response, {
            esquema: {
                original: this.api.Database.Schema,
                compacto: this.api.Database.CompactedSchema
            }
        });
    }

};