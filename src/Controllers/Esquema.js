module.exports = class {

    method = "use";
    
    route = "^/Esquema";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Esquema");
        return response.status(200).json({
            datos: this.api.Database.Schema
        });
    }

};