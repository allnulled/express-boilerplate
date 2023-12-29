const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
/**
 * 
 * @name src/main.js#setupInitialization
 * @type Función
 * @parameter `api` 
 * @description Inicializa una aplicación express en `api.app`.
 * 
 */
const setupInitialization = async function (api) {
  api.app = express();
};
/**
 * 
 * @name src/main.js#setupConfigurations
 * @type Función
 * @parameter `api` 
 * @description Inicializa variables `process.env` a partir del código y de `src/Configurations/.env`.
 * 
 */
const setupConfigurations = async function (api) {
  process.env.APP_IDENTIFIER = "Express Boilerplate - Example";
  process.env.APP_HOST = "http://127.0.0.1";
  process.env.APP_PORT = 5054;
  process.env.APP_URL = process.env.APP_HOST + ":" + process.env.APP_PORT;
  process.env.DATABASE_FILE = path.resolve(__dirname + "/Database/database.sqlite");
  process.env.DATABASE_RESET = true;
  process.env.DATABASE_DRIVER = "sqlite";
  process.env.DATABASE_DRIVER = "mysql";
  process.env.DATABASE_NAME = "test";
  process.env.DATABASE_USER = "root";
  process.env.DATABASE_PASSWORD = "Toor.123";
  process.env.DATABASE_HOST = "127.0.0.1";
  process.env.DATABASE_PORT = "3306";
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
 * @name src/main.js#setupUtilities
 * @type Función
 * @parameter `api` 
 * @description Monta todas las utilidades a partir de `src/Utilities`.
 * Itera sobre todas las utilidades.
 * Crea cada utilidad con el operador `new` y pasándole la `api`.
 * Le inyecta la api.
 * Si encuentra una `utilidad.action`: establece como utilidad este método bindeado a la utilidad.
 * Si, en cambio, encuentra una `utilidad.factory`: establece como utilidad el resultado de llamar a este método, bindeado a la utilidad.
 * Si no, lanza un error porque la interfaz estaría incompleta en la utilidad.
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
 * @name src/main.js#setupQueries
 * @type Función
 * @parameter `api` 
 * @description Monta todas las queries a partir de `src/Queries`.
 * El proceso es similar al de las utilidades.
 * Itera sobre las queries.
 * Crea cada query.
 * Le inyecta la api.
 * Si encuentra el método `query.query`: establece como query este método bindeado a la instancia de query.
 * Si, en cambio, encuentra el método `query.factory`: establece como query el resultado de una llamada a este método bindeado a la instancia de query.
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
 * @name src/main.js#setupModels
 * @type Función
 * @parameter `api` 
 * @description Monta todos los modelos a partir de `src/Models`.
 * El proceso es similar al de los otros tipos de componente.
 * Ignorando la carpeta "Base", itera sobre todos los ficheros de la carpeta.
 * Crea una instancia del modelo.
 * Le inyecta la api.
 * Si encuentra el método "initialize" lo llama.
 * Asigna el resultado de "initialize" o si no el modelo creado en "api.Models.$orm[modelName]".
 * Imprime el número de modelo y su origen.
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
 * @name src/main.js#setupDatabaseConnection
 * @type Función
 * @parameter `api` 
 * @description Crea `api.Database` con:
 *     - `api.Database.SequelizeConnection`: conexión para los modelos en Sequelize.
 *     - `api.Database.Connection`: conexión para las queries crudas.
 *     - `api.Database.Schema`: esquema de los datos original. Lo extrae de parsear el fichero "src/Database/Scripts/creation.sql" con el HQL Parser.
 *     - `api.Database.CompactedSchema`: esquema de los datos compacto. Compacta los atributos directamente aquí.
 * 
 * Al final del proceso, también se escriben los ficheros:
 *     - `Database/Structures/schema.json`
 *     - `Database/Structures/schema.compacted.json`
 * 
 */
const setupDatabaseConnection = async function (api, configurations) {
  const driver_funcion = require(__dirname + "/Database/Drivers/" + process.env.DATABASE_DRIVER + ".js");
  const sequelize_driver_funcion = require(__dirname + "/Database/Drivers/sequelize.js");
  const conexionNeta = await driver_funcion(api, configurations);
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
  const no_skip_creation = configurations.skip_database_creation !== true;
  if(process.env.DATABASE_RESET && no_skip_creation) {
    await api.Utilities.InitializeDatabase();
  }
};
/**
 * 
 * @name src/main.js#setupDatabaseDecorators
 * @type Función
 * @parameter `api`
 * @description Monta los decoradores de base de datos, esto es:
 *    - Conditionals: bloques de código que devuelven un booleano.
 *    - Consequencials: bloques de código que representan acciones.
 *    - Table interceptors: bloques de código que representan acciones aplicadas a una tabla.
 *    - Column interceptors: bloques de código que representan acciones aplicadas a una columna.
 * 
 * Estos decoradores no son los únicos que la API permite como decoradores significativos para la seguridad del servidor y los datos. Pero sí representan el grupo de decoradores más personalizable. Esto se explicará en otra parte de la API.
 * 
 */
const setupDatabaseDecorators = async function(api) {
  api.Database.Decorators = require(__dirname + "/Database/Decorators/Decorators.js")(api);
};
/**
 * 
 * @name src/main.js#setupApplication
 * @type Función
 * @parameter `api` 
 * @description Monta la aplicación express, aplicando CORS, body-parser y un middleware de ficheros estáticos en "/ui" con la carpeta "src/Interface/www".
 * 
 */
const setupApplication = async function (api) {
  api.app.use(cors());
  api.app.use(bodyParser.json({ extended: true }));
  api.app.use("/ui", express.static(__dirname + "/Interface/www"));
};
/**
 * 
 * @name src/main.js#setupMiddlewares
 * @type Función
 * @parameter `api` 
 * @description Monta los middlewares.
 * El proceso es similar al de otros tipos de componente.
 * Itera sobre la carpeta "src/Middlewares".
 * Crea un middleware.
 * Le inyecta la API.
 * Asigna el nuevo middleware llamando a su función "factory()".
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
 * @name src/main.js#setupControllers
 * @type Función
 * @parameter `api` 
 * @description Monta los controladores.
 * El proceso es similar al de otros tipos de componente.
 * Itera sobre la carpeta "src/Controllers".
 * Crea un controller.
 * Le inyecta la API.
 * Ordena todos los controladores según su propiedad "priority", el cual a mayor es, mayor es también la prioridad.
 * Itera sobre los controladores ordenados.
 * Monta cada controlador en la aplicación.
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
 * @name src/main.js#deployApplication
 * @type Función
 * @parameter `api` 
 * @description Despliega la aplicación express por el puerto `process.env.APP_PORT`. Imprime entonces las URLs de la aplicación servidor y de la aplicación del backoffice en Castelog/Vue.js.
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
 * @name src/main.js#main
 * @type Función
 * @parameter `api` 
 * @description Define todo el *setup* del main. Esto es lo que sigue.
 * 
 * await setupInitialization(api, configurations);
 * await setupConfigurations(api, configurations);
 * await setupUtilities(api, configurations);
 * await setupQueries(api, configurations);
 * await setupDatabaseConnection(api, configurations);
 * await setupDatabaseDecorators(api, configurations);
 * await setupModels(api, configurations);
 * await setupApplication(api, configurations);
 * await setupMiddlewares(api, configurations);
 * await setupControllers(api, configurations);
 * await deployApplication(api, configurations);
 * 
 */
const main = async function (api = {}, configurations = {}) {
  try {
    await setupInitialization(api, configurations);
    await setupConfigurations(api, configurations);
    await setupUtilities(api, configurations);
    await setupQueries(api, configurations);
    await setupDatabaseConnection(api, configurations);
    await setupDatabaseDecorators(api, configurations);
    await setupModels(api, configurations);
    await setupApplication(api, configurations);
    await setupMiddlewares(api, configurations);
    await setupControllers(api, configurations);
    return {
      api,
      deploy: () => deployApplication(api)
    };
  } catch (error) {
    console.log("Error in source «src/main.js»");
    console.log(error);
    throw error;
  }
};

/**
 * 
 * @name src/main.js#module.exports
 * @type Promise
 * @description Exporta una llamada a la función `main()`.
 * 
 */
module.exports = async function(...args) {
  const { api, deploy } = await main(...args);
  return { api, deploy };
};