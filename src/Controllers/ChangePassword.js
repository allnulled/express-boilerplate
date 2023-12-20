const sqlstring = require("sqlstring");

module.exports = class {
    
    method = "use";
    
    route = "^/ChangePassword";
    
    priority = 5000;

    getMiddleware() {
        return [this.api.Middlewares.AuthenticateRequest];
    }
    
    async dispatch(request, response, next) {
        try {
            const old_password = this.api.Utilities.GetRequestParameter(request, "old_password", false);
            const new_password = this.api.Utilities.GetRequestParameter(request, "new_password", false);
            const new_password_2 = this.api.Utilities.GetRequestParameter(request, "new_password_2", false);
            const user_id = request.$$authentication.usuario.id;
            const { CheckThat } = this.api.Utilities;
            CheckThat(old_password, "old_password").isString();
            CheckThat(new_password, "new_password").isString();
            CheckThat(new_password_2, "new_password_2").isString();
            CheckThat(new_password, "new_passowrd").differs(old_password, "old_password");
            CheckThat(new_password, "new_password").equals(new_password_2, "new_password2");
            let sql_select = "";
            sql_select += "SELECT * FROM Usuario WHERE id = ";
            sql_select += sqlstring.escape(user_id);
            sql_select += ";";
            const [current_user] = await this.api.Utilities.QueryDatabase(sql_select);
            CheckThat(old_password, "old_password", "Contraseña anterior incorrecta").equals(current_user.contrasenya, "current password");
            let sql_update = "";
            sql_update += "UPDATE Usuario SET contrasenya = ";
            sql_update += sqlstring.escape(new_password);
            sql_update += " WHERE id = ";
            sql_update += sqlstring.escape(user_id);
            sql_update += ";";
            await this.api.Utilities.QueryDatabase(sql_update);
            return this.api.Utilities.DispatchSuccess(response, {
                message: "The password was changed successfully"
            });
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

};