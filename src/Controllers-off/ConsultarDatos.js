module.exports = class {

    method = "use";
    
    route = "^/ConsultarDatos";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.ConsultarDatos");
        return response.status(200).json({
            datos: []
        });
    }

};