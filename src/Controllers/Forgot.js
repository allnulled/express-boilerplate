const sqlstring = require("sqlstring");

module.exports = class {

  method = "use";

  route = "/Forgot";

  priority = 4000;

  getMiddleware() {
    return [];
  }

  async dispatch(request, response, next) {
    this.api.Utilities.Trace("api.Controllers.Forgot");
    try {
      const correo_parameter = this.api.Utilities.GetRequestParameter(request, "correo", false);
      const parameters = { correo_parameter };
      await this.validateParameters(parameters);
      await this.buildSelect(parameters);
      await this.executeSelect(parameters);
      await this.sendEmail(parameters);
      return this.api.Utilities.DispatchSuccess(response, {
        mensaje: "El usuario fue notificado con correo de recuperación correctamente",
      });
    } catch (error) {
      return this.api.Utilities.DispatchError(response, error);
    }
  }

  validateParameters(parameters) {
    const { correo_parameter } = parameters;
    if (typeof correo_parameter !== "string") {
      throw new Error("Se requiere parámetro «correo» como texto en controlador «Forgot»");
    }
  }

  buildSelect(parameters) {
    let sql = "";
    sql += "SELECT * FROM Usuario WHERE correo = ";
    sql += sqlstring.escape(parameters.correo_parameter);
    sql += ";";
    parameters.sql_to_select_user_by_email = sql;
  }

  async executeSelect(parameters) {
    const resultados = await this.api.Utilities.QueryDatabase(parameters.sql_to_select_user_by_email);
    if(resultados.length === 0) {
      throw new Error("No se encontraron usuarios por el correo proporcionado");
    }
    parameters.usuario = resultados[0];
  }

  sendEmail(parameters) {
    this.api.Utilities.SendEmail({
      from: process.env.GMAIL_ACCOUNT,
      to: parameters.usuario.correo,
      subject: "Correo de recuperación de contraseña",
      text: "Este correo sirve para recuperar tu contraseña en el sistema «" + process.env.APP_IDENTIFIER + "».\n\nVes al siguiente link para recuperar tu contraseña desde la aplicación:\n\n" + process.env.APP_URL + "/ui#/recover/" + parameters.usuario.token_de_recuperacion + "",
      html: "Este correo sirve para recuperar tu contraseña en el sistema «" + process.env.APP_IDENTIFIER + "».<br/><br/>Ves al siguiente link para recuperar tu contraseña desde la aplicación:<br/><br/><b><a href=" + JSON.stringify(process.env.APP_URL + "/ui#/recover/" + parameters.usuario.token_de_recuperacion) + ">" + process.env.APP_URL + "/ui#/recover/" + parameters.usuario.token_de_recuperacion + "</b>",
    })
  }

};