module.exports = async function(api) {
    const fs = require("fs");
    const sqlite = require("sqlite3");
    let conexion_bruta = undefined;
    if(process.env.DATABASE_RESET) {
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