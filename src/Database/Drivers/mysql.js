module.exports = async function (api, configurations) {
  api.Utilities.Trace("src/Database/Drivers/mysql.js");
  const fs = require("fs");
  const mysql = require("mysql2");
  let conexion_bruta = undefined;
  const db_user = process.env.DATABASE_USER;
  const db_password = process.env.DATABASE_PASSWORD;
  const db_host = process.env.DATABASE_HOST;
  const db_port = process.env.DATABASE_PORT;
  const db_name = process.env.DATABASE_NAME;
  conexion_bruta = await mysql.createConnection({
    user: db_user,
    password: db_password,
    host: db_host,
    port: db_port,
    database: db_name,
  });
  const conexion_neta = {
    NativeConnection: conexion_bruta,
    Execute: function (consulta_unica) {
      api.Utilities.Trace("api.Database.Connection.Execute");
      return new Promise(function (ok, fail) {
        try {
          console.log("[SQL] " + consulta_unica);
          conexion_bruta.query(consulta_unica, function (error, resultados, campos) {
            if (error) {
              return fail(error);
            }
            return ok(resultados);
          });
        } catch (error) {
          console.log("Error executing SQL sentence: (1)");
          console.log(error);
          return fail(error);
        }
      });
    }
  };
  const no_skip_creation = configurations.skip_database_creation !== true;
  if (process.env.DATABASE_RESET && no_skip_creation) {
    await conexion_neta.Execute("DROP DATABASE IF EXISTS " + db_name + ";");
    await conexion_neta.Execute("CREATE DATABASE " + db_name + ";");
    await conexion_neta.Execute("USE " + db_name + ";");
  }
  return conexion_neta;
};