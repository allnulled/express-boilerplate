module.exports = class {

    method = "use";
    
    route = "^/Demo";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Demo");
        return this.api.Utilities.DispatchSuccess(response, {
            envvars: process.env
        });
    }

};