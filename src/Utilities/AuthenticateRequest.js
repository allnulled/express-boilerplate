module.exports = class {
    /**
     * 
     * @name AuthenticateRequest
     * @type Función
     * @parameter `request:Object`
     * @description Autentifica una petición. Esto significa que establece el valor `request.$$authentication` con los datos de sesion, usuario y permisos, si el token proporcionado vía `authorization` pertenece a una sesión válida. De lo contrario, lanzará un error estandarizado.
     * 
     */
    async action(request) {
        this.api.Utilities.Trace("api.Utilities.AuthenticateRequest");
        const sqlstring = require("sqlstring");
        const { CheckThat } = this.api.Utilities;
        const token = this.api.Utilities.GetRequestParameter(request, "authorization", false);
        CheckThat(token, "token", "INVALID_AUTH_TOKEN_ERROR").isString().and.hasLengthGreaterThan(0);
        ////////////////////////////////////////////////////////////////////////////
        let sql_1 = `
            SELECT 
                Sesion.id AS 'Sesion.id',
                Sesion.token AS 'Sesion.token',
                Usuario.id AS 'Usuario.id',
                Usuario.nombre AS 'Usuario.nombre',
                Usuario.correo AS 'Usuario.correo',
                Permiso.id AS 'Permiso.id',
                Permiso.nombre AS 'Permiso.nombre',
                Permiso.descripcion AS 'Permiso.descripcion'
            FROM Sesion
            LEFT JOIN Usuario ON Usuario.id = Sesion.id_usuario
            LEFT JOIN Permiso_de_usuario ON Permiso_de_usuario.id_usuario = Usuario.id
            LEFT JOIN Permiso ON Permiso.id = Permiso_de_usuario.id_permiso
            WHERE Sesion.token = ${sqlstring.escape(token)};
        `;
        const datos_coincidentes = await this.api.Utilities.QueryDatabase(sql_1);
        if(datos_coincidentes.length === 0) {
            throw new Error("No se identificó el token con la sesión en la utilidad «AuthenticateRequest»");
        }
        const datos_formateados = this.api.Utilities.FormatRowsByGroups(datos_coincidentes, ["Sesion", "Usuario", "Permiso"]);
        const { Sesion, Usuario, Permiso } = datos_formateados;
        request.$$authentication = { sesion: Sesion[0], usuario: Usuario[0], permisos: Permiso };
    }
};