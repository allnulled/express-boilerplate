const sqlstring = require("sqlstring");

module.exports = class {

  method = "use";

  route = "/Register";

  priority = 4000;

  getMiddleware() {
    return [];
  }

  async dispatch(request, response, next) {
    this.api.Utilities.Trace("api.Controllers.Register");
    try {
      const nombre_parameter = this.api.Utilities.GetRequestParameter(request, "nombre", false);
      const contrasenya_parameter = this.api.Utilities.GetRequestParameter(request, "contrasenya", false);
      const correo_parameter = this.api.Utilities.GetRequestParameter(request, "correo", false);
      const parameters = { nombre_parameter, contrasenya_parameter, correo_parameter };
      await this.validateParameters(parameters);
      await this.buildQuery(parameters);
      await this.executeQuery(parameters);
      await this.sendEmail(parameters);
      return this.api.Utilities.DispatchSuccess(response, {
        mensaje: "Un correo electrónico fue enviado a la dirección «" + correo_parameter + "»",
      });
    } catch (error) {
      return this.api.Utilities.DispatchError(response, error);
    }
  }

  async validateParameters(parameters) {
    this.api.Utilities.Trace("api.Controllers.Register.prototype.validateParameters");
    const { nombre_parameter, contrasenya_parameter, correo_parameter } = parameters;
    if (typeof nombre_parameter !== "string") {
      throw new Error("Se requiere parámetro «nombre» como texto en controlador «Register»");
    }
    if (typeof contrasenya_parameter !== "string") {
      throw new Error("Se requiere parámetro «contrasenya» como texto en controlador «Register»");
    }
    if (typeof correo_parameter !== "string") {
      throw new Error("Se requiere parámetro «correo» como texto en controlador «Register»");
    }
    return true;
  }

  async buildQuery(parameters) {
    this.api.Utilities.Trace("api.Controllers.Register.prototype.buildQuery");
    parameters.token_de_confirmacion = this.api.Utilities.GetRandomString(20);
    const { nombre_parameter, contrasenya_parameter, correo_parameter, token_de_confirmacion } = parameters;
    let sql = "";
    sql += "INSERT INTO Usuario_no_confirmado (";
    sql += "\n  nombre,";
    sql += "\n  contrasenya,";
    sql += "\n  correo,";
    sql += "\n  token_de_confirmacion";
    sql += "\n) VALUES (";
    sql += "\n  " + sqlstring.escape(nombre_parameter) + ",";
    sql += "\n  " + sqlstring.escape(contrasenya_parameter) + ",";
    sql += "\n  " + sqlstring.escape(correo_parameter) + ",";
    sql += "\n  " + sqlstring.escape(token_de_confirmacion) + "";
    sql += "\n);";
    parameters.query = sql;
  }

  async executeQuery(parameters) {
    this.api.Utilities.Trace("api.Controllers.Register.prototype.executeQuery");
    const { query } = parameters;
    const results = await this.api.Utilities.QueryDatabase(query);
    parameters.output = results;
  }

  async sendEmail(parameters) {
    this.api.Utilities.Trace("api.Controllers.Register.prototype.sendEmail");
    const { nombre_parameter, correo_parameter, token_de_confirmacion } = parameters;
    const url_for_confirmation = process.env.APP_URL + "/Confirm?token_de_confirmacion=" + token_de_confirmacion;
    const info = await this.api.Utilities.SendEmail({
      from: process.env.GMAIL_ACCOUNT,
      to: correo_parameter,
      subject: "Registro de «" + nombre_parameter + "» en la aplicación de «" + process.env.APP_IDENTIFIER + "»",
      text: "Hola, «" + nombre_parameter + "».\n\nVisita el link siguiente para confirmar tu registro en nuestro sistema:\n\n" + url_for_confirmation + "",
      html: "<div>¡Hola, " + nombre_parameter + "!<br/><br/>Visita el link siguiente para confirmar tu registro en nuestro sistema:<br/><br/><a href=" + JSON.stringify(url_for_confirmation) + ">" + url_for_confirmation + "</a></div>"
    });
  }

};