module.exports = class {
    resolve(data, error) {
        this.api.Utilities.Trace("Database.Decorators.Consequencials.prohibir");
        const { _request: request, _response: response } = data;
        if(error) {
            throw new Error(error);
        }
        throw new Error("Se requieren permisos específicos para esta operación");
    }
};