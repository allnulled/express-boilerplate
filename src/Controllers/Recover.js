const sqlstring = require("sqlstring");

module.exports = class {

  method = "use";

  route = "/Recover";

  priority = 4000;

  getMiddleware() {
    return [];
  }

  async dispatch(request, response, next) {
    this.api.Utilities.Trace("api.Controllers.Recover");
    try {
      const token_de_recuperacion_parameter = this.api.Utilities.GetRequestParameter(request, "token_de_recuperacion", false);
      const contrasenya_parameter = this.api.Utilities.GetRequestParameter(request, "contrasenya", false);
      const contrasenya2_parameter = this.api.Utilities.GetRequestParameter(request, "contrasenya2", false);
      const parameters = { token_de_recuperacion_parameter, contrasenya_parameter, contrasenya2_parameter };
      await this.validateParameters(parameters);
      await this.buildSelect(parameters);
      await this.executeSelect(parameters);
      await this.buildUpdate(parameters);
      await this.executeUpdate(parameters);
      await this.sendEmail(parameters);
      return this.api.Utilities.DispatchSuccess(response, {
        mensaje: "El usuario cambió su contraseña correctamente",
      });
    } catch (error) {
      return this.api.Utilities.DispatchError(response, error);
    }
  }

  validateParameters(parameters) {
    const { token_de_recuperacion_parameter, contrasenya_parameter, contrasenya2_parameter } = parameters;
    if (typeof token_de_recuperacion_parameter !== "string") {
      throw new Error("Se requiere parámetro «token_de_recuperacion» como texto en controlador «Recover»");
    }
    if (typeof contrasenya_parameter !== "string") {
      throw new Error("Se requiere parámetro «contrasenya» como texto en controlador «Recover»");
    }
    if (typeof contrasenya2_parameter !== "string") {
      throw new Error("Se requiere parámetro «contrasenya2» como texto en controlador «Recover»");
    }
  }

  buildSelect(parameters) {
    let sql = "";
    sql += "SELECT * FROM Usuario WHERE token_de_recuperacion = ";
    sql += sqlstring.escape(parameters.token_de_recuperacion_parameter);
    sql += ";";
    parameters.sql_to_select_token = sql;
  }

  async executeSelect(parameters) {
    const resultados = await this.api.Utilities.QueryDatabase(parameters.sql_to_select_token);
    if(resultados.length === 0) {
      throw new Error("No se encontraron usuarios por el token de recuperación proporcionado");
    }
    parameters.usuario = resultados[0];
  }

  buildUpdate(parameters) {
    const nuevo_token_de_recuperacion = this.api.Utilities.GetRandomString(20);
    let sql = "";
    sql += "UPDATE Usuario SET\n  contrasenya = ";
    sql += sqlstring.escape(parameters.contrasenya_parameter);
    sql += ",\n  token_de_recuperacion = "
    sql += sqlstring.escape(nuevo_token_de_recuperacion);
    sql += "\n  WHERE id = ";
    sql += sqlstring.escape(parameters.usuario.id);
    sql += ";";
    parameters.sql_to_update_token = sql;
  }

  async executeUpdate(parameters) {
    const resultados = await this.api.Utilities.QueryDatabase(parameters.sql_to_update_token);
  }

  async sendEmail(parameters) {
    const fue_enviado = await this.api.Utilities.SendEmail({
      from: process.env.GMAIL_ACCOUNT,
      to: parameters.usuario.correo,
      subject: "Contraseña cambiada correctamente en «" + process.env.APP_IDENTIFIER + "»",
      text: "Hola, " + parameters.usuario.nombre + ".\n\nTu contraseña fue cambiada correctamente en nuestros sistemas.\n\nPara entrar con la nueva contraseña puedes ir a: " + process.env.APP_URL,
      html: "Hola, " + parameters.usuario.nombre + ".<br/><br/>Tu contraseña fue cambiada correctamente en nuestros sistemas.<br/><br/>Para entrar con la nueva contraseña puedes ir a: <a href=" + JSON.stringify(process.env.APP_URL) + ">" + process.env.APP_URL + "</a>",
    });
  }

};