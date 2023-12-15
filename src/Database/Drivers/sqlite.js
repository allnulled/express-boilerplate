/**
 * 
 * @name src/Database/Decorators/sqlite.js
 * @type Función asíncrona
 * @parameter `api`
 * @returns Devuelve una interfaz homogénea para ejecutar código en la base de datos SQL. En este caso, rellena con la lógica para funcionar con una base de datos SQLite. El proceso es el que sigue.
 * Si `process.env.DATABASE_RESET` tiene valor true sobreescribe en blanco el fichero `process.env.DATABASE_FILE`.
 * Crea una conexión bruta con tal fichero.
 * Crea una conexión neta con 2 propiedades:
 * 
 *    - NativeConnection: conexión nativa de sqlite (la conexión "bruta").
 *    - Execute: función para ejecutar código SQL contra la base de datos.
 * 
 * Devuelve la conexión neta.
 * 
 */
module.exports = async function(api, configurations) {
  api.Utilities.Trace("src/Database/Drivers/sqlite.js");
    const fs = require("fs");
    const sqlite = require("sqlite3");
    let conexion_bruta = undefined;
    const no_skip_creation = configurations.skip_database_creation !== true;
    if (process.env.DATABASE_RESET && no_skip_creation) {
      fs.writeFileSync(process.env.DATABASE_FILE, "", "utf8");
    }
    await new Promise(function (ok, fail) {
      conexion_bruta = new sqlite.Database(process.env.DATABASE_FILE, function (error) {
        if (error) {
          return fail(error);
        }
        return ok();
      });
    });
    const conexion_neta = {
      NativeConnection: conexion_bruta,
      Execute: function (consultaUnica) {
        api.Utilities.Trace("api.Database.Connection.Execute");
        return new Promise(function (ok, fail) {
          try {
            conexion_bruta.serialize(function () {
              try {
                console.log("[SQL] " + consultaUnica);
                conexion_bruta.all(consultaUnica, [], function (error, data) {
                  if (error) {
                    console.log("Error executing SQL sentence: (1)");
                    console.log(error);
                    return fail(error);
                  }
                  return ok(data);
                });
              } catch (error) {
                console.log("Error executing SQL sentence: (2)");
                console.log(error);
                return fail(error);
              }
            });
          } catch (error) {
            console.log("Error executing SQL sentence: (3)");
            console.log(error);
            return fail(error);
          }
        });
      }
    };
    return conexion_neta;
};