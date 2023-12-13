module.exports = class {
    resolve(data, ...permisos) {
        this.api.Utilities.Trace("Database.Decorators.Conditionals.tiene_permiso");
        const { _request: request, _response: response } = data;
        return request.$$authentication.permisos.filter(p => permisos.indexOf(p.nombre) !== -1).length !== 0;
    }
};