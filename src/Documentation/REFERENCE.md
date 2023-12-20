

----


 - **@name**:  src/Database/Decorator/Conditionals/columna_tiene_valor.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Los parámetros de la petición, petición inclusive.
 - **@parameter**:  `columna_id:String` El nombre de la columna.
 - **@parameter**:  `controlador:Object` El controlador que enchufa esto.
 - **@parameter**:  `valores_string:String` Valores posibles, separados.
 - **@parameter**:  `valores_separador:String` Separador de los valores posibles.
 - **@description**:  Comprueba, con una query si es necesario, que el item tiene uno de los valores indicados (valores_string).
 - **@returns**:  `tiene_valor:Booleano` Si tiene o no alguno de los valores indicados (valores_string).

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Conditionals/columna_tiene_valor.js

----


 - **@name**:  src/Database/Decorator/Conditionals/no_tiene_permiso.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Los parámetros de la petición, petición inclusive.
 - **@parameter**:   `permisos:Array<String>` Los permisos a comprobar.
 - **@description**:  Devuelve un booleano indicando si tiene alguno de los permisos indicados (permisos).
 - **@returns**:  `no_tiene_permisos:Boolean`
 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Conditionals/no_tiene_permiso.js

----


 - **@name**:  src/Database/Decorators/Conditionals/ocurre.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data` Los parámetros de la petición, petición inclusive.
 - **@parameter**:   `...permisos:Array<String>` Permisos.
 - **@description**:  Devuelve `true` siempre.
 - **@returns**:  `true`

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Conditionals/ocurre.js

----


 - **@name**:  src/Database/Decorators/Conditionals/tiene_permiso.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Los parámetros de la petición, petición inclusive.
 - **@parameter**:  `...permisos:Array<String>` Permisos a comprobar.
 - **@description**:  Devuelve un booleano para permitir saber si tiene o no alguno de los permisos indicados (permisos).
 - **@returns**:  `tiene_permisos:Boolean` Si tiene o no alguno de los permisos.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Conditionals/tiene_permiso.js

----


 - **@name**:  src/Database/Decorators/Consequencials/columna_solo_actualizable_a.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Los parámetros de la petición, petición inclusive. Requerido.
 - **@parameter**:  `columna_id:String` El nombre de la columna. Requerido.
 - **@parameter**:  `controlador:Object` El controlador que enchufa este decorador. Requerido.
 - **@parameter**:  `valores:String` Los valores posibles, separados. Requerido.
 - **@parameter**:  `separador:String` El separador de los valores posibles. Por defecto: "," (coma).
 - **@description**:  Si es un Update comprueba que el valor en la columna indicada (id_columna) sea uno de los valores indicados (valores)

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Consequencials/columna_solo_actualizable_a.js

----


 - **@name**:  src/Database/Decorators/Consequencials/permitir.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object`
 - **@description**:  Deja pasar la acción, no hace nada.
 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Consequencials/permitir.js

----


 - **@name**:  src/Database/Decorators/Consequencials/prohibir.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Los parámetros de la petición, petición inclusive.
 - **@parameter**:  `error:String` Mensaje de error.
 - **@description**:  Se lanza un error, o el indicado (error) o uno estándar.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Consequencials/prohibir.js

----


 - **@name**:  src/Database/Decorators/Interceptors/Columns/fijar_fecha_actual_de_usuario_al_actualizar.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Requerido. Los parámetros de la request, inclusive request.
 - **@parameter**:  `id_columna:String` Requerido. Nombre de la columna.
 - **@parameter**:  `controlador:Object` Requerido. El controlador que lo está llamando.
 - **@description**:  Si es Insertar, toma un nuevo Date, lo formatea a texto y lo asigna a la columna indicada ("id_columna").

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Interceptors/Columns/fijar_fecha_actual_al_insertar.js

----


 - **@name**:  src/Database/Decorators/Interceptors/Columns/fijar_id_de_usuario_al_actualizar.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Requerido. Los parámetros de la request, inclusive request.
 - **@parameter**:  `id_columna:String` Requerido. Nombre de la columna.
 - **@parameter**:  `controlador:Object` Requerido. El controlador que lo está llamando.
 - **@description**:  Si es Insertar o Actualizar, toma el `request.$$authentication.usuario.id` y lo asigna a la columna indicada ("id_columna").

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Interceptors/Columns/fijar_id_de_usuario_al_actualizar.js

----


 - **@name**:  src/Database/Decorators/Interceptors/Columns/fijar_id_de_usuario_al_insertar.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Requerido. Objeto de parámetros de la petición.
 - **@parameter**:  `id_columna:String` Requerido. El nombre de la columna que contiene el id de usuario.
 - **@parameter**:  `controlador:Object` Requerido.
 - **@description**:  Si es Insert, toma el `request.$$authentication.usuario.id` y lo pone en la columna indicada ("id_columna").

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Interceptors/Columns/fijar_id_de_usuario_al_insertar.js

----


 - **@name**:  src/Database/Decorators/Interceptors/Columns/fijar_valor_inicial.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Requerido. Este objeto contiene los parámetros de la petición, inclusive la petición y la respuesta.
 - **@parameter**:  `id_columna:String|Number` Requerido. Nombre de la columna cuyo valor es a fijar.
 - **@parameter**:  `controlador:Object` Requerido. Este es el objeto del controlador que lo ha enchufado. Puede ser uno entre los controladores CRUD: Select, Insert, Update o Delete.
 - **@parameter**:  `valor:String` Requerido. Valor a fijar.
 - **@description**:  Comprueba si es operación Insert.
Si es, fija el valor indicado (valor) en la columna indicada (id_columna).

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Interceptors/Columns/fijar_valor_inicial.js

----


 - **@name**:  src/Database/Decorators/Interceptors/Tables/registrar_cambios_en.js#resolve
 - **@type**:  Función asíncrona
 - **@parameter**:  `data:Object` Requerido. Este objeto contiene los parámetros de la petición, inclusive la petición y la respuesta.
 - **@parameter**:  `controlador:Object` Requerido. Este es el objeto del controlador que lo ha enchufado. Puede ser uno entre los controladores CRUD: Select, Insert, Update o Delete.
 - **@parameter**:  `tabla_historial:String` Requerido.
 - **@parameter**:  `columna_operacion_historial:String` Por defecto: `operacion`.
 - **@parameter**:  `columna_tabla_historial:String` Por defecto: `tabla`.
 - **@parameter**:  `columna_identificador_historial:String` Por defecto: `identificador`.
 - **@parameter**:  `columna_parametros_historial:String` Por defecto: `parametros`.
 - **@parameter**:  `columna_autentificacion_historial:String` Por defecto: `autentificacion`.
 - **@parameter**:  `columna_creado_en_historial:String` Por defecto: `creado_en`.
 - **@description**:  Cuando es "Insert" / "Update" / "Delete" hace un insert en la tabla indicada (tabla_historial) con los campos indicados.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Interceptors/Tables/registrar_cambios_en.js

----


 - **@name**:  src/Database/Decorators/sqlite.js
 - **@type**:  Función asíncrona
 - **@parameter**:  `api`
 - **@returns**:  Devuelve una interfaz homogénea para ejecutar código en la base de datos SQL. En este caso, rellena con la lógica para funcionar con una base de datos SQLite. El proceso es el que sigue.
Si `process.env.DATABASE_RESET` tiene valor true sobreescribe en blanco el fichero `process.env.DATABASE_FILE`.
Crea una conexión bruta con tal fichero.
Crea una conexión neta con 2 propiedades:

   - NativeConnection: conexión nativa de sqlite (la conexión "bruta").
   - Execute: función para ejecutar código SQL contra la base de datos.

Devuelve la conexión neta.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Drivers/sqlite.js

----


 - **@name**:  src/Database/Decorators/Interceptors/Columns/fijar_fecha_actual_de_usuario_al_actualizar.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Requerido. Los parámetros de la request, inclusive request.
 - **@parameter**:  `id_columna:String` Requerido. Nombre de la columna.
 - **@parameter**:  `controlador:Object` Requerido. El controlador que lo está llamando.
 - **@description**:  Si es Insertar o Actualizar, toma un nuevo Date, lo formatea a texto y lo asigna a la columna indicada ("id_columna").

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Interceptors/Columns/fijar_fecha_actual_al_actualizar.js

----


 - **@name**:  Decorators.js
 - **@type**:  Función
 - **@parameter**:  `api` Objeto principal de la API del proyecto.
 - **@description**:  Devuelve cargados los condicionales, consecuenciales, interceptores de tabla e interceptores de columna, juntos, cargados por este mismo orden. Este fichero se llama, teóricamente, desde el main para cargar los decoradores de la base de datos.
 - **@returns**:  `{ Conditionals, Consequencials, Interceptors: { Tables, Columns } }`

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Decorators.js

----


 - **@name**:  src/Database/Decorators/Interceptors/Columns/es_actualizable_si_id_usuario_coincide_con.js#resolve
 - **@type**:  Función
 - **@parameter**:  `data:Object` Los parámetros de la petición, petición inclusive.
 - **@parameter**:  `id_columna:String` Nombre de la columna.
 - **@parameter**:  `controlador:Object` Instancia de controlador que enchufa este decorador.
 - **@description**:  Lanza un error si se está intentando actualizar pero la columna no coincide con el identificador de usuario.
Busca en `data.item_recuperated` y si no encuentra, hace una query buscando el `data.id` como id, usando `data.table` como tabla.
Compara el `request.$$authentication.usuario.id` con el valor de esta columna indicada (id_columna).
Si no coinciden, lanza un error de que el valor no se puede alterar.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Database/Decorators/Interceptors/Columns/es_actualizable_si_id_usuario_coincide_con.js

----


 - **@name**:  src/main.js#setupInitialization
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Inicializa una aplicación express en `api.app`.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#setupConfigurations
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Inicializa variables `process.env` a partir del código y de `src/Configurations/.env`.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#setupUtilities
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Monta todas las utilidades a partir de `src/Utilities`.
Itera sobre todas las utilidades.
Crea cada utilidad con el operador `new` y pasándole la `api`.
Le inyecta la api.
Si encuentra una `utilidad.action`: establece como utilidad este método bindeado a la utilidad.
Si, en cambio, encuentra una `utilidad.factory`: establece como utilidad el resultado de llamar a este método, bindeado a la utilidad.
Si no, lanza un error porque la interfaz estaría incompleta en la utilidad.
 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#setupQueries
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Monta todas las queries a partir de `src/Queries`.
El proceso es similar al de las utilidades.
Itera sobre las queries.
Crea cada query.
Le inyecta la api.
Si encuentra el método `query.query`: establece como query este método bindeado a la instancia de query.
Si, en cambio, encuentra el método `query.factory`: establece como query el resultado de una llamada a este método bindeado a la instancia de query.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#setupModels
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Monta todos los modelos a partir de `src/Models`.
El proceso es similar al de los otros tipos de componente.
Ignorando la carpeta "Base", itera sobre todos los ficheros de la carpeta.
Crea una instancia del modelo.
Le inyecta la api.
Si encuentra el método "initialize" lo llama.
Asigna el resultado de "initialize" o si no el modelo creado en "api.Models.$orm[modelName]".
Imprime el número de modelo y su origen.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#setupDatabaseConnection
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Crea `api.Database` con:
    - `api.Database.SequelizeConnection`: conexión para los modelos en Sequelize.
    - `api.Database.Connection`: conexión para las queries crudas.
    - `api.Database.Schema`: esquema de los datos original. Lo extrae de parsear el fichero "src/Database/Scripts/creation.sql" con el HQL Parser.
    - `api.Database.CompactedSchema`: esquema de los datos compacto. Compacta los atributos directamente aquí.

Al final del proceso, también se escriben los ficheros:
    - `Database/Structures/schema.json`
    - `Database/Structures/schema.compacted.json`

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#setupDatabaseDecorators
 - **@type**:  Función
 - **@parameter**:  `api`
 - **@description**:  Monta los decoradores de base de datos, esto es:
   - Conditionals: bloques de código que devuelven un booleano.
   - Consequencials: bloques de código que representan acciones.
   - Table interceptors: bloques de código que representan acciones aplicadas a una tabla.
   - Column interceptors: bloques de código que representan acciones aplicadas a una columna.

Estos decoradores no son los únicos que la API permite como decoradores significativos para la seguridad del servidor y los datos. Pero sí representan el grupo de decoradores más personalizable. Esto se explicará en otra parte de la API.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#setupApplication
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Monta la aplicación express, aplicando CORS, body-parser y un middleware de ficheros estáticos en "/ui" con la carpeta "src/Interface/www".

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#setupMiddlewares
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Monta los middlewares.
El proceso es similar al de otros tipos de componente.
Itera sobre la carpeta "src/Middlewares".
Crea un middleware.
Le inyecta la API.
Asigna el nuevo middleware llamando a su función "factory()".

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#setupControllers
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Monta los controladores.
El proceso es similar al de otros tipos de componente.
Itera sobre la carpeta "src/Controllers".
Crea un controller.
Le inyecta la API.
Ordena todos los controladores según su propiedad "priority", el cual a mayor es, mayor es también la prioridad.
Itera sobre los controladores ordenados.
Monta cada controlador en la aplicación.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#deployApplication
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Despliega la aplicación express por el puerto `process.env.APP_PORT`. Imprime entonces las URLs de la aplicación servidor y de la aplicación del backoffice en Castelog/Vue.js.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#main
 - **@type**:  Función
 - **@parameter**:  `api` 
 - **@description**:  Define todo el *setup* del main. Esto es lo que sigue.

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
await deployApplication(api, configurations);

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  src/main.js#module.exports
 - **@type**:  Promise
 - **@description**:  Exporta una llamada a la función `main()`.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/load.js

----


 - **@name**:  api.Middlewares.BodyParserUrlEncoded
 - **@type**:  Función
 - **@details**:  `await this.api.Utilities.AuthenticateRequest(request);`. En errores, despacha un error en formato JSON.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Middlewares/AuthenticateRequest.js

----


 - **@name**:  api.Middlewares.BodyParserUrlEncoded
 - **@type**:  Función
 - **@details**:  `return require("body-parser").urlencoded({ extended: true });`

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Middlewares/BodyParserUrlEncoded.js

----


 - **@name**:  api.Middlewares.BodyParserUrlEncoded
 - **@type**:  Función
 - **@details**:  `return require("body-parser").json({ extended: true });`

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Middlewares/BodyParserJson.js

----


 - **@name**:  AuthenticateRequest
 - **@type**:  Función
 - **@parameter**:  `request:Object`
 - **@description**:  Autentifica una petición. Esto significa que establece el valor `request.$$authentication` con los datos de sesion, usuario y permisos, si el token proporcionado vía `authorization` pertenece a una sesión válida. De lo contrario, lanzará un error estandarizado.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/AuthenticateRequest.js

----


 - **@name**:  api.Utilities.CloneExceptProperties
 - **@type**:  Función
 - **@parameter**:  `object:Object`
 - **@parameter**:  `properties:Array<String>`
 - **@parameter**:  `output:Object`
 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/CloneExceptProperties.js

----


 - **@name**:  api.Utilities.CheckThat
 - **@type**:  Función
 - **@parameter**:  `...args:Array`
 - **@description**:  Este método sirve como puente con la API de check-that, otro proyecto del autor que sirve para hacer comprobaciones de tipos y tener un reporte de errores uniforme y más o menos asistido.
 - **@returns**:  Devuelve un `check.that(...args)` de la libería `check-that`. Para saber más de cómo se utiliza `check-that`, puedes ir a [https://github.com/allnulled/check-that](https://github.com/allnulled/check-that).

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/CheckThat.js

----


 - **@name**:  api.Utilities.CloneOnlyProperties
 - **@type**:  Función
 - **@parameter**:  `object:Object`
 - **@parameter**:  `properties:Array<String>`
 - **@parameter**:  `output:Object`
 - **@returns**:  `output:Object` Objeto indicado (output) pero extendido con propiedades indicadas (propierties) del objeto indicado (object).
 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/CloneOnlyProperties.js

----


 - **@name**:  api.Utilities.CloseDeployment
 - **@type**:  Función
 - **@description**:  Cierra conexiones a bases de datos, servidores, etc. para que termine el proceso de forma natural controlada.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/CloseDeployment.js

----


 - **@name**:  api.Utilities.Die
 - **@type**:  Función
 - **@parameter**:   `...args:Array<any>` Lista de textos o cosas que se quieren imprimir por consola antes de matar el proceso.
 - **@description**:  Imprime por consola cualquier cosa y luego termina el proceso actual. Solo se usa para propósitos de debug.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/Die.js

----


 - **@name**:  api.Utilities.DispatchSuccess
 - **@type**:  Función
 - **@parameter**:  `response:Object` Respuesta de la petición.
 - **@parameter**:  `error:Error` Error.
 - **@description**:  Establece el estado de la respuesta de petición indicada (response) en 500 (ESTADO:BAD REQUEST) y envía un JSON con una cabecera estándar de petición con fallo enviando el error indicado (error).

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/DispatchError.js

----


 - **@name**:  api.Utilities.DispatchErrorAsHtml
 - **@type**:  Función
 - **@parameter**:  `response:Object` Respuesta de petición.
 - **@parameter**:  `error:Error` Error.
 - **@description**:  Establece el estado de la respuesta de petición indicada (response) en 500 (ESTADO:BAD REQUEST) y la cabecera de texto en HTML con charset utf8. Luego envía los contenidos como HTM, que son la página de `src/Interface/ejs/error.html` renderizada con el error indicado (error).
Si esto falla, imprime el error y luego envía el `error.message` como único texto plano.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/DispatchErrorAsHtml.js

----


 - **@name**:  api.Utilities.DispatchSuccessAsHtml
 - **@type**:  Función
 - **@parameter**:  `response`
 - **@parameter**:  `contents`
 - **@description**:  Establece el estado de la respuesta de petición indicada (response) en 200 (ESTADO:OK) y la cabecera de texto en HTML con charset utf8. Luego envía los contenidos (contents) como HTML.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/DispatchSuccessAsHtml.js

----


 - **@name**:  api.Utilities.FormatRowsByGroups
 - **@type**:  Función
 - **@parameter**:  `rows:Array` Lista devuelta por un select con joins del SQL.
 - **@parameter**:  `groups:Array<String>` Lista de nombres  
 - **@parameter**:  `inListMode:Boolean` Si se prefiere una lista con objetos, en lugar de un objeto con identificadores. Por defecto: `true`.
 - **@description**:  A partir de los nombres de las columnas, que son compuestos de `{Tabla}.{Columna}`, se averiguan los diferentes ids de cada tabla, y se separan sus columnas y se devuuelve el resultado, que puede estar en formato objeto con ids, o en formato array directo.
 - **@returns**:  `lists:Object<Array<Object>> | lists:Object<Object<Object>>` Objeto con los grupos indicados (groups) como clave y las rows con las columnas agrupadas como valor.
Si `inListMode` es `true` se devuelve:
   - Un objeto donde las claves son los grupos y los valores son:
   - Arrays con los objetos como valores.
Si `inListMode` es `false` se devuelve:
   - Un objeto donde las claves son los grupos y los valores son:
   - Objetos donde las claves son los id de los objetos y los valores son los objetos.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/FormatRowsByGroups.js

----


 - **@name**:  api.Utilities.GetDatabaseConnection
 - **@type**:  Función
 - **@description**:  Devuelve `this.api.Database.Connection`.
 - **@returns**:  `connection:Object` Objeto conexión neta.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/GetDatabaseConnection.js

----


 - **@name**:  api.Utilities.GetStringFromString
 - **@type**:  Función
 - **@parameter**:  `dateString:String` Fecha en formato texto.
 - **@description**:  Devuelve una fecha (tipo Date) a partir de una fecha tipo texto indicada (`dateString`)
 - **@returns**:  `date:Date` Fecha en formato Date.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/GetDateFromString.js

----


 - **@name**:  api.Utilities.DispatchSuccess
 - **@type**:  Función
 - **@parameter**:  `response:Object` Respuesta de la petición.
 - **@parameter**:  `data:Object` Datos de respuesta.
 - **@description**:  Establece el estado de la respuesta de petición indicada (response) en 200 (ESTADO:OK) y envía un JSON con una cabecera estándar de petición con éxito enviando los datos indicados (data).

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/DispatchSuccess.js

----


 - **@name**:  api.Utilities.GetDateToString
 - **@type**:  Función
 - **@parameter**:  `date:Date` Fecha a formatear.
 - **@parameter**:  `format:String` Formato a usar. Por defecto: `"YYYY-MM-DD HH:mm:ss.xxx"`.
 - **@description**:  Transforma una fecha (o Date) indicado (date) en texto (o String) con el formato indicado (format).
 - **@returns**:  `output:String` La fecha formateada a texto.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/GetDateToString.js

----


 - **@name**:  api.Utilities.GetRandomString
 - **@type**:  Función
 - **@parameter**:  `len:Integer` Número de caracteres.
 - **@parameter**:  `alphabet:Array<String>` Alfabeto de caracteres válidos.
 - **@description**:  Genera un texto aleatorio de longitud indicada (len) con el alfabeto indicado (alphabet).
 - **@returns**:  Devuelve el texto aleatorio generado.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/GetRandomString.js

----


 - **@name**:  api.Utilities.GetRequestParameter
 - **@type**:  Función
 - **@parameter**:  `request:Object` Petición (objeto tipo Request de express) de la cual tomar el parámetro
 - **@parameter**:  `name:String` Nombre del parámetro que tomar.
 - **@parameter**:  `defaultValue:any` Valor que será devuelto en caso de no existir tal parámetro.
 - **@returns**:  `parameter:any` Devuelve el parámetro tomado del primero de entre, y por este orden:
   - `request.body`
   - `request.query`
   - `request.headers`

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/GetRequestParameter.js

----


 - **@name**:  api.Utilities.InitializeDatabase
 - **@type**:  Función
 - **@description**:  Inicializa la base de datos, esto es: crea las tablas y aplica las migraciones. Consiste en 2 llamadas:
   - `this.applyCreationScript`: aplica el script de creación.
   - `this.applyMigrationScript`: aplica el script de migración.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/InitializeDatabase.js

----


 - **@name**:  api.Utilities.GetStringLeftPadded
 - **@type**:  Función
 - **@parameter**:  `text:String` Texto a espaciar.
 - **@parameter**:  `spaces:Number` Espacios totales que debe acabar teniendo como mínimo.
 - **@parameter**:  `padding:String` Texto a usar en el espaciamiento.
 - **@descripcion**:  Devuelve la copia de un texto (text) pero con tantos espacios como se indiquen (spaces) de los cuales los que falten serán rellenados con el texto indicado (padding), aplicado por la izquierda.
 - **@returns**:  `output:String` Texto resultante del espaciamiento.
 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/GetStringLeftPadded.js

----


 - **@name**:  api.Utilities.QueryDatabase
 - **@type**:  Función
 - **@parameter**:  `query:String` Consulta SQL a ejecutar.
 - **@returns**:  `any` Resultado de la consulta ejecutada.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/QueryDatabase.js

----


 - **@name**:  api.Utilities.Trace
 - **@type**:  Función
 - **@parameter**:  `msg:String`. Mensaje a imprimir por traceo.
 - **@description**:  Imprime un mensaje prependizando '[TRACE]' por la consola.

 - **file**: /home/carlos/Software/Nodejs/express-boilerplate/src/Utilities/Trace.js