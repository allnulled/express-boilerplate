const sqlstring = require("sqlstring");

module.exports = class {
    async resolve(data, controlador, tabla_historial) {
        const { table, id, _request: request, _response: response } = data;
        if(controlador.name === "Insert") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Tables.registrar_cambios_en");
            console.log(data.item);
        } else if(controlador.name === "Update") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Tables.registrar_cambios_en");
            console.log(data.id);
        } else if(controlador.name === "Delete") {
            this.api.Utilities.Trace("Database.Decorators.Interceptors.Tables.registrar_cambios_en");
            console.log(data.id);
        }
    }
};