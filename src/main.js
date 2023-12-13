const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite = require("sqlite3");
/**
 * 
 * @name setupInitialization
 * @type Function
 * @parameter `api` 
 * @description Initializes an express app on `api.app`.
 * 
 */
const setupInitialization = async function (api) {
  api.app = express();
};
/**
 * 
 * @name setupConfigurations
 * @type Function
 * @parameter `api` 
 * @description Initializes `process.env` variables from source and from `src/Configurations/.env`.
 * 
 */
const setupConfigurations = async function (api) {
  process.env.APP_IDENTIFIER = "Express Boilerplate - Example";
  process.env.APP_PORT = 5054;
  process.env.DATABASE_FILE = path.resolve(__dirname + "/Database/database.sqlite");
  process.env.DATABASE_RESET = true;
  process.env.DATABASE_DRIVER = "sqlite";
  const files = fs.readdirSync(__dirname + "/Configurations");
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    if(file === ".env") {
      require("fs").readFileSync(__dirname + "/Configurations/" + file).toString().split("\n").forEach(line => {
        const position_equal = line.indexOf("=");
        const [key, value] = [line.substring(0, position_equal), line.substring(position_equal+1)];
        process.env[key] = value;
      });
    }
  }
};
/**
 * 
 * @name setupUtilities
 * @type Function
 * @parameter `api` 
 * @description Sets up all the utilities from `src/Utilities`.
 * 
 */
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
/**
 * 
 * @name setupQueries
 * @type Function
 * @parameter `api` 
 * @description Sets up all the queries from `src/Queries`.
 * 
 */
const setupQueries = async function(api) {
  api.Queries = {};
  const files = fs.readdirSync(__dirname + "/Queries");
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const filepath = path.resolve(__dirname + "/Queries/" + file);
    const queryName = file.replace(/\.js/g, "");
    const queryModule = require(filepath);
    const queryInstance = new queryModule(api);
      ////////////////////////////////
      // Dependency injection pattern:
      queryInstance.api = api;
      ////////////////////////////////
    if(typeof queryInstance.query === "function") {
      api.Queries[queryName] = queryInstance.query.bind(queryInstance);
      queryType = "function";
    } else if(typeof queryInstance.factory === "function") {
      queryType = "factory";
      api.Queries[queryName] = queryInstance.factory.call(queryInstance, api);
      if(typeof api.Queries[queryName] === "function") {
        api.Queries[queryName] = api.Queries[queryName].bind(api.Queries[queryName]);
      }
    } else {
      throw new Error("Required query «" + file + "» to have either «query» or «factory» methods");
    }
    console.log("[*] Query nº" + (index + 1) + ":");
    console.log("    - Origen:      " + file);
    if(typeof api.Queries[queryName] === "function") {
      console.log("    - Tipo:        " + queryType);
    }
  }
};
/**
 * 
 * @name setupModels
 * @type Function
 * @parameter `api` 
 * @description Sets up all the models from `src/Models`.
 * 
 */
const setupModels = async function(api) {
  api.Models = { $orm: {} };
  const files = fs.readdirSync(__dirname + "/Models");
  Iterating_files:
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    if(file === "Base") {
      continue Iterating_files;
    }
    const filepath = path.resolve(__dirname + "/Models/" + file);
    const modelName = file.replace(/\.js/g, "");
    const modelModule = require(filepath);
    const modelInstance = new modelModule(api);
    ////////////////////////////////
    // Dependency injection pattern:
    modelInstance.api = api;
    ////////////////////////////////
    api.Models[modelName] = modelInstance;
    if(typeof modelInstance.initialize === "function") {
      api.Models.$orm[modelName] = await api.Models[modelName].initialize(api);
    } else {
      api.Models.$orm[modelName] = await api.Models[modelName];
    }
    console.log("[*] Modelo nº" + (index + 1) + ":");
    console.log("    - Origen:      " + file);
  }
};
/**
 * 
 * @name setupDatabaseConnection
 * @type Function
 * @parameter `api` 
 * @description Creates `api.Database` with:
 *     - api.Database.Connection
 *     - api.Database.Schema
 *     - api.Database.CompactedSchema
 */
const setupDatabaseConnection = async function (api) {
  const driver_funcion = require(__dirname + "/Database/Drivers/" + process.env.DATABASE_DRIVER + ".js");
  const sequelize_driver_funcion = require(__dirname + "/Database/Drivers/sequelize.js");
  const conexionNeta = await driver_funcion(api);
  const conexionSequelize = await sequelize_driver_funcion(api);
  const esquemaSql = fs.readFileSync(__dirname + "/Database/Scripts/creation.sql").toString();
  const hqlParser = require(__dirname + "/Resources/hql.js");
  const esquemaJson = hqlParser.parse(esquemaSql);
  const esquema = esquemaJson;
  api.Database = {};
  api.Database.SequelizeConnection = conexionSequelize;
  api.Database.Connection = conexionNeta;
  api.Database.Schema = esquema;
  api.Database.CompactedSchema = (function() {
    try {
      const esquema_compacto = {};
      const compactar_atributos = function(item) {
        const attrs = item.atributos || [];
        item.propiedades = {};
        for(let index_attr=0; index_attr<attrs.length; index_attr++) {
          const attr = attrs[index_attr];
          if(typeof attr === "string") {
            const posicion = attr.indexOf(":");
            if(posicion === -1) {
              item.propiedades[attr] = true;
            } else {
              const key = attr.substr(0, posicion).trim();
              const value = attr.substr(posicion+1).trim();
              item.propiedades[key] = value;
            }
          } else if(typeof attr === "object") {
            if(!item.propiedades[attr.tipo]) {
              item.propiedades[attr.tipo] = [];
            }
            item.propiedades[attr.tipo].push(attr);
          }
        }
        delete item.atributos;
        item.atributos = item.propiedades;
        delete item.propiedades;
      };
      for(let index=0; index<esquema.length; index++) {
        const tabla = Object.assign({}, esquema[index]);
        compactar_atributos(tabla);
        const columnas = {};
        for(let index_columna=0; index_columna<tabla.composicion.length; index_columna++) {
          const columna = Object.assign({}, tabla.composicion[index_columna]);
          const es_columna = columna.sentencia === "columna";
          const es_clave_foranea = columna.sentencia === "clave foránea";
          columna.orden = index_columna;
          if(es_columna) {
            columnas[columna.columna] = columna;
          } else if(es_clave_foranea) {
            columnas["$" + columna.columna + "$" + columna.tabla_foranea + "$" + columna.columna_foranea] = columna;
            columnas[columna.columna].es_clave_foranea = columna;
          }
          compactar_atributos(columna);
        }
        tabla.composicion = columnas;
        esquema_compacto[tabla.tabla] = tabla;

      }
      return esquema_compacto;
    } catch (error) {
      console.log(error);
    }
  })();
  fs.writeFileSync(__dirname + "/Database/Structures/schema.compacted.json", JSON.stringify(api.Database.CompactedSchema, null, 2), "utf8");
  fs.writeFileSync(__dirname + "/Database/Structures/schema.json", JSON.stringify(api.Database.Schema, null, 2), "utf8");
  console.log("[*] Esquema de datos compacto: (api.Database.CompactedSchema)");
  // console.log(api.Database.CompactedSchema);
  if(process.env.DATABASE_RESET) {
    await api.Utilities.InitializeDatabase();
  }
};
/**
 * 
 * @name setupDatabaseDecorators
 * @type Function
 * @parameter `api`
 * @description Sets up the decorators of the database: conditionals and consequencials.
 * 
 */
const setupDatabaseDecorators = async function(api) {
  api.Database.Decorators = require(__dirname + "/Database/Decorators/Decorators.js")(api);
};
/**
 * 
 * @name setupApplication
 * @type Function
 * @parameter `api` 
 * @description Sets up the application, applying cors, body-parser and a static files middleware on "/ui" url path.
 * 
 */
const setupApplication = async function (api) {
  api.app.use(cors());
  api.app.use(bodyParser.json({ extended: true }));
  api.app.use("/ui", express.static(__dirname + "/Interface/www"));
};
/**
 * 
 * @name setupMiddlewares
 * @type Function
 * @parameter `api` 
 * @description Creates, injects, sorts and sets the controllers to the application.
 * 
 */
const setupMiddlewares = async function (api) {
  const files = fs.readdirSync(__dirname + "/Middlewares");
  api.Middlewares = {};
  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const filepath = path.resolve(__dirname + "/Middlewares/" + file);
    const middlewareName = file.replace(/\.js/g, "");
    const middlewareModule = require(filepath);
    const middlewareInstance = new middlewareModule(api);
    ////////////////////////////////
    // Dependency injection pattern:
    middlewareInstance.api = api;
    ////////////////////////////////
    api.Middlewares[middlewareName] = middlewareInstance.factory(api);
  }
};
/**
 * 
 * @name setupControllers
 * @type Function
 * @parameter `api` 
 * @description Creates, injects, sorts and sets the controllers to the application.
 * 
 */
const setupControllers = async function (api) {
  const files = fs.readdirSync(__dirname + "/Controllers").filter(f => f !== "Off");
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
/**
 * 
 * @name deployApplication
 * @type Function
 * @parameter `api` 
 * @description Deploys the express application.
 * 
 */
const deployApplication = function (api) {
  return new Promise(function (ok, fail) {
    api.app.listen(process.env.APP_PORT, function () {
      console.log("[*] App escuchando en:");
      console.log("    - http://127.0.0.1:" + process.env.APP_PORT);
      console.log("    - http://127.0.0.1:" + process.env.APP_PORT + "/ui/index.1.html");
      ok();
    });
  })
};
/**
 * 
 * @name main
 * @type Function
 * @parameter `api` 
 * @description Defines the whole setup.
 * 
 */
const main = async function (api = {}) {
  try {
    await setupInitialization(api);
    await setupConfigurations(api);
    await setupUtilities(api);
    await setupQueries(api);
    await setupDatabaseConnection(api);
    await setupDatabaseDecorators(api);
    await setupModels(api);
    await setupApplication(api);
    await setupMiddlewares(api);
    await setupControllers(api);
    await deployApplication(api);
  } catch (error) {
    console.log("Error in source «src/main.js»");
    console.log(error);
    throw error;
  }
};

/**
 * 
 * @name module.exports
 * @type Promise
 * @description Exports a call to `main()`.
 * 
 */
module.exports = main();