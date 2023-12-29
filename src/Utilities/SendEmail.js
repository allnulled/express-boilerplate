module.exports = class {
  /**
   * 
   * @type Función
   * @description Transporte de `nodemailer` para `gmail` con la cuenta de correo de las configuraciones globales.
   * 
   */
  transport = require("nodemailer").createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_ACCOUNT,
      pass: process.env.GMAIL_PASSWORD
    }
  });
  /**
   * 
   * @name api.Utilities.SendEmail
   * @type Función
   * @parameter `email_options:Object` Opciones para `nodemailer` de envío de correo.
   * @returns `any` Resultado devuelto por la API de `nodemailer`.
   * 
   */
  action(email_options) {
    this.api.Utilities.Trace("api.Utilities.SendEmail");
    return new Promise((accept, reject) => {
      this.transport.sendMail(email_options, function (error, info) {
        if(error) {
          return reject(error);
        }
        return accept(info);
      });
    });
  }
}