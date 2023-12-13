module.exports = class {

    method = "use";
    
    route = "^/Debug";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Debug");
        console.log(this.api.Database.SequelizeConnection.models);
        const resultado = await this.api.Database.SequelizeConnection.models.Usuario.findAll();
        return this.api.Utilities.DispatchSuccess(response, {
            resultado
        });
    }

};