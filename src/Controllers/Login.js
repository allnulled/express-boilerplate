const sqlstring = require("sqlstring");

module.exports = class {
    
    method = "use";
    
    route = "/Login";
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.Login");
        try {
            const { nombre, contrasenya } = this.getLoginParameters(request);
            const sesionActiva = await this.getActiveSession(nombre, contrasenya);
            if(sesionActiva !== false) {
                return this.api.Utilities.DispatchSuccess(response, {
                    sesion: { token: sesionActiva.token }
                });
            }
            const token = await this.createActiveSession(nombre, contrasenya);
            return this.api.Utilities.DispatchSuccess(response, {
                sesion: { token }
            });
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

    getLoginParameters(request) {
        const nombre = this.api.Utilities.GetRequestParameter(request, "nombre", false);
        const contrasenya = this.api.Utilities.GetRequestParameter(request, "contrasenya", false);
        if(typeof nombre !== "string") {
            throw new Error("Se requiere parámetro «nombre» en controlador «Login»");
        }
        if(typeof contrasenya !== "string") {
            throw new Error("Se requiere parámetro «contrasenya» en controlador «Login»");
        }
        return { nombre, contrasenya };
    }

    async getActiveSession(nombre, contrasenya) {
        const usuario = await this.getUserByNameAndPassword(nombre, contrasenya);
        let sql = "";
        sql += "SELECT * FROM Sesion WHERE id_usuario = ";
        sql += sqlstring.escape(usuario.id);
        sql += ";";
        const sesionesActivas = await this.api.Utilities.QueryDatabase(sql);
        if(sesionesActivas.length) {
            return sesionesActivas[0];
        }
        return false;
    }

    async createActiveSession(nombre, contrasenya) {
        const usuario = await this.getUserByNameAndPassword(nombre, contrasenya);
        const nuevoToken = this.api.Utilities.GetRandomString(99);
        let sql = "";
        sql += "INSERT INTO Sesion (id_usuario, token) VALUES (";
        sql += sqlstring.escape(usuario.id);
        sql += ",";
        sql += sqlstring.escape(nuevoToken);
        sql += ");";
        await this.api.Utilities.QueryDatabase(sql);
        return nuevoToken;
    }

    async getUserByNameAndPassword(nombre, contrasenya) {
        let sql = "";
        sql += "SELECT * FROM Usuario WHERE nombre = ";
        sql += sqlstring.escape(nombre);
        sql += "\n AND contrasenya = ";
        sql += sqlstring.escape(contrasenya);
        sql += ";";
        const usuariosCoincidentes = await this.api.Utilities.QueryDatabase(sql);
        if(usuariosCoincidentes.length === 0) {
            throw new Error("No se encontró usuario coincidente con nombre «" + nombre + "» y la contraseña proporcionada");
        }
        return usuariosCoincidentes[0];
    }

};