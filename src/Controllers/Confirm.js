const sqlstring = require("sqlstring");

module.exports = class {

  method = "use";

  route = "/Confirm";

  priority = 4000;

  getMiddleware() {
    return [];
  }

  async dispatch(request, response, next) {
    this.api.Utilities.Trace("api.Controllers.Confirm");
    try {
      const token_de_confirmacion_parameter = this.api.Utilities.GetRequestParameter(request, "token_de_confirmacion", false);
      const parameters = { token_de_confirmacion_parameter };
      await this.validateParameters(parameters);
      await this.buildSelectUnconfirmedUser(parameters);
      await this.executeSelectUnconfirmedUser(parameters);
      await this.buildInsertNewUser(parameters);
      await this.executeInsertNewUser(parameters);
      await this.buildDeleteUnconfirmedUser(parameters);
      await this.executeDeleteUnconfirmedUser(parameters);
      await this.sendEmail(parameters);
      return this.api.Utilities.DispatchSuccess(response, {
        mensaje: "El usuario fue confirmado correctamente",
      });
    } catch (error) {
      return this.api.Utilities.DispatchError(response, error);
    }
  }
  
  validateParameters(parameters) {
    const { token_de_confirmacion_parameter } = parameters;
    if (typeof token_de_confirmacion_parameter !== "string") {
      throw new Error("Se requiere parámetro «token_de_confirmacion» como texto en controlador «Confirm»");
    }
    if (token_de_confirmacion_parameter.length !== 20) {
      throw new Error("Se requiere parámetro «token_de_confirmacion» como texto de token en controlador «Confirm»");
    }
  }

  buildSelectUnconfirmedUser(parameters) {
    let sql = "";
    sql += "SELECT * FROM Usuario_no_confirmado WHERE token_de_confirmacion = ";
    sql += sqlstring.escape(parameters.token_de_confirmacion_parameter);
    sql += ";";
    parameters.sql_to_select_unconfirmed_user = sql;
  }
  async executeSelectUnconfirmedUser(parameters) {
    const resultados = await this.api.Utilities.QueryDatabase(parameters.sql_to_select_unconfirmed_user);
    if(resultados.length === 0) { 
      throw new Error("No se encontró ningún usuario por confirmar por el token proporcionado");
    }
    parameters.usuario_no_confirmado = resultados[0];
  }
  buildInsertNewUser(parameters) {
    const token_de_recuperacion = this.api.Utilities.GetRandomString(20);
    let sql = "";
    sql += "INSERT INTO Usuario (nombre, contrasenya, correo, token_de_recuperacion) VALUES (";
    sql += "\n  " + sqlstring.escape(parameters.usuario_no_confirmado.nombre) + ",";
    sql += "\n  " + sqlstring.escape(parameters.usuario_no_confirmado.contrasenya) + ",";
    sql += "\n  " + sqlstring.escape(parameters.usuario_no_confirmado.correo) + ",";
    sql += "\n  " + sqlstring.escape(token_de_recuperacion);
    sql += "\n);";
    parameters.sql_to_insert_new_user = sql;
  }
  async executeInsertNewUser(parameters) {
    const resultados = await this.api.Utilities.QueryDatabase(parameters.sql_to_insert_new_user);
  }
  buildDeleteUnconfirmedUser(parameters) {
    let sql = "";
    sql += "DELETE FROM Usuario_no_confirmado WHERE id = ";
    sql += sqlstring.escape(parameters.usuario_no_confirmado.id);
    sql += ";";
    parameters.sql_to_delete_unconfirmed_user = sql;
  }
  executeDeleteUnconfirmedUser(parameters) {
    return this.api.Utilities.QueryDatabase(parameters.sql_to_delete_unconfirmed_user);
  }
  sendEmail(parameters) {
    this.api.Utilities.SendEmail({
      from: process.env.GMAIL_ACCOUNT,
      to: parameters.usuario_no_confirmado.correo,
      subject: "Confirmación de «" + parameters.usuario_no_confirmado.nombre + "» en el sistema de «" + process.env.APP_IDENTIFIER + "»",
      text: "El usuario «" + parameters.usuario_no_confirmado.nombre + "» ya está ingresado en el sistema de «" + process.env.APP_IDENTIFIER + "».\n\nPuedes entrar con la contraseña proporcionada anteriormente para el usuario «" + parameters.usuario_no_confirmado.nombre + "».\n\nNo dejes de visitarnos en «" + process.env.APP_URL + "»",
      html: "El usuario <b>«" + parameters.usuario_no_confirmado.nombre + "»</b> ya está ingresado en el sistema de «" + process.env.APP_IDENTIFIER + "».<br/><br/>Puedes entrar con la contraseña proporcionada anteriormente para el usuario «" + parameters.usuario_no_confirmado.nombre + "».<br/><br/>No dejes de visitarnos en <a href=" + JSON.stringify(process.env.APP_URL) + ">" + process.env.APP_URL + "</a>"
    });
  }

};