const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite = require("sqlite3");
const setupInitialization = async function (api) {
  api.app = express();
};
const setupConfigurations = async function (api) {
  process.env.APP_IDENTIFIER = "Express Boilerplate - Example";
  process.env.APP_PORT = 5054;
  process.env.DATABASE_FILE = path.resolve(__dirname + "/Database/database.sqlite");
  process.env.DATABASE_RESET = true;
};
const setupUtilities = async function (api) {
  api.Utilities = {};
  const files = fs.readdirSync(__dirname + "/Utilities");
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const filepath = path.resolve(__dirname + "/Utilities/" + file);
    const utilityName = file.replace(/\.js/g, "");
    const utilityModule = require(filepath);
    const utilityInstance = new utilityModule(api);
      ////////////////////////////////
      // Dependency injection pattern:
      utilityInstance.api = api;
      ////////////////////////////////
    if(typeof utilityInstance.action === "function") {
      api.Utilities[utilityName] = utilityInstance.action.bind(utilityInstance);
      utilityType = "function";
    } else if(typeof utilityInstance.factory === "function") {
      utilityType = "factory";
      api.Utilities[utilityName] = utilityInstance.factory.call(utilityInstance, api);
      if(typeof api.Utilities[utilityName] === "function") {
        api.Utilities[utilityName] = api.Utilities[utilityName].bind(api.Utilities[utilityName]);
      }
    } else {
      throw new Error("Required utility «" + file + "» to have either «action» or «factory» methods");
    }
    console.log("[*] Utilidad nº" + (index + 1) + ":");
    console.log("    - Origen:      " + file);
    if(typeof api.Utilities[utilityName] === "function") {
      console.log("    - Tipo:        " + utilityType);
    }
  }
};
const setupDatabaseConnection = async function (api) {
  let conexionBruta = undefined;
  if(process.env.DATABASE_RESET) {
    fs.writeFileSync(process.env.DATABASE_FILE, "", "utf8");
  }
  await new Promise(function (ok, fail) {
    conexionBruta = new sqlite.Database(process.env.DATABASE_FILE, function (error) {
      if (error) {
        return fail(error);
      }
      return ok();
    });
  });
  const conexionNeta = {
    NativeConnection: conexionBruta,
    Execute: function (consultaUnica) {
      api.Utilities.Trace("api.Database.Connection.Execute");
      return new Promise(function (ok, fail) {
        try {
          conexionBruta.serialize(function () {
            try {
              console.log("[SQL] " + consultaUnica);
              conexionBruta.all(consultaUnica, [], function (error, data) {
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
  const esquemaSql = fs.readFileSync(__dirname + "/Database/scripts/creation.sql").toString();
  const hqlParser = require(__dirname + "/Resources/hyper-query-language.js");
  const esquemaJson = hqlParser.parse(esquemaSql);
  const esquema = esquemaJson;
  api.Database = {};
  api.Database.Connection = conexionNeta;
  api.Database.Schema = esquema;
  api.Database.CompactedSchema = (function() {
    try {
      const esquema_compacto = {};
      for(let index=0; index<esquema.length; index++) {
        const tabla = esquema[index];
        const columnas = {};
        for(let index_columna=0; index_columna<tabla.composicion.length; index_columna++) {
          const columna = tabla.composicion[index_columna];
          const es_columna = columna.sentencia === "columna";
          const es_clave_foranea = columna.sentencia === "clave foránea";
          columna.orden = index_columna;
          if(es_columna) {
            columnas[columna.columna] = columna;
          } else if(es_clave_foranea) {
            columnas["$" + columna.columna + "$" + columna.tabla_foranea + "$" + columna.columna_foranea] = columna;
          }
        }
        tabla.composicion = columnas;
        esquema_compacto[tabla.tabla] = tabla;

      }
      return esquema_compacto;
    } catch (error) {
      console.log(error);
    }
  })();
  console.log("[*] Esquema de datos compacto: (api.Database.CompactedSchema)");
  console.log(api.Database.CompactedSchema);
  if(process.env.DATABASE_RESET) {
    await api.Utilities.InitializeDatabase();
  }
};
const setupApplication = async function (api) {
  api.app.use(cors());
  api.app.use(bodyParser.json({ extended: true }));
  api.app.use("/ui", express.static(__dirname + "/Interface/www"));
};
const setupControllers = async function (api) {
  const files = fs.readdirSync(__dirname + "/Controllers");
  let controllers = [];
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const filepath = path.resolve(__dirname + "/Controllers/" + file);
    const controllerName = file.replace(/\.js/g, "");
    const controllerModule = require(filepath);
    const controllerInstance = new controllerModule(api);
    ////////////////////////////////
    // Dependency injection pattern:
    controllerInstance.api = api;
    ////////////////////////////////
    controllers.push({
      name: controllerName,
      file,
      controller: controllerInstance
    });
  }
  controllers = controllers.sort(function(a, b) {
    if(a.controller.priority > b.controller.priority) {
      return -1;
    } else if(a.controller.priority < b.controller.priority) {
      return 1;
    } else {
      return 0;
    }
  });
  for(let index = 0; index < controllers.length; index++) {
    const {
      name: controllerName,
      file: controllerFile,
      controller: controllerInstance
    } = controllers[index];
    const controllerCallback = controllerInstance.dispatch.bind(controllerInstance);
    const controllerPriority = controllerInstance.priority;
    const controllerRoute = controllerInstance.route;
    const controllerMethod = controllerInstance.method;
    const controllerMiddlewares = controllerInstance.middleware || controllerInstance.middlewares || controllerInstance.getMiddleware();
    console.log("[*] Controlador nº" + (index + 1) + ":");
    console.log("    - Nombre:      " + controllerName);
    console.log("    - Origen:      " + controllerFile);
    console.log("    - Prioridad:   " + controllerPriority);
    console.log("    - Ruta:        " + controllerRoute);
    console.log("    - Método:      " + controllerMethod.toUpperCase());
    console.log("    - Middlewares: " + controllerMiddlewares.length);
    api.app[controllerMethod](controllerRoute, controllerMiddlewares, controllerCallback);
  }
};
const deployApplication = function (api) {
  return new Promise(function (ok, fail) {
    api.app.listen(process.env.APP_PORT, function () {
      console.log("[*] App escuchando en:");
      console.log("    - http://127.0.0.1:" + process.env.APP_PORT);
      console.log("    - http://127.0.0.1:" + process.env.APP_PORT + "/ui");
      ok();
    });
  })
};
const main = async function (api = {}) {
  try {
    await setupInitialization(api);
    await setupConfigurations(api);
    await setupUtilities(api);
    await setupDatabaseConnection(api);
    await setupApplication(api);
    await setupControllers(api);
    await deployApplication(api);
  } catch (error) {
    console.log("Error in source «src/main.js»");
    console.log(error);
    throw error;
  }
};

module.exports = main();