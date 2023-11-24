const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

module.exports = class {
    
    method = "use";
    
    route = "^/";
    
    priority = 2000;

    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.TemplatesController");
        try {
            const rutaDePlantillas = path.resolve(__dirname + "/../Interface/ejs");
            const rutaDePlantilla = path.resolve(rutaDePlantillas + request.originalUrl);
            if(!rutaDePlantilla.startsWith(rutaDePlantillas)) {
                throw new Error("No se pueden leer ficheros fuera de la ruta de plantillas en «TemplatesController»");
            }
            const existeFichero = await fs.promises.access(rutaDePlantilla, fs.constants.F_OK).then(() => true).catch(() => false);
            if(!existeFichero) {
                return next();
            }
            const contenidoFinal = await new Promise((ok, fail) => {
                ejs.renderFile(rutaDePlantilla, { request, response, next }, { async: true }, function(error, text) {
                    if(error) {
                        return fail(error);
                    }
                    return ok(text);
                });
            });
            return this.api.Utilities.DispatchSuccessAsHtml(response, contenidoFinal);
        } catch (error) {
            return this.api.Utilities.DispatchErrorAsHtml(response, error);
        }
    }

};