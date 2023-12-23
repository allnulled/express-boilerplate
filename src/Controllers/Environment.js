module.exports = class {

    method = "use";
    
    route = "^/Environment";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Environment");
        return this.api.Utilities.DispatchSuccess(response, {
            entorno: {
                DATABASE_DRIVER: process.env.DATABASE_DRIVER
            }
        });
    }

};