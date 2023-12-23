# express-boilerplate

Código fuente base para servidores basados en Node.js + Express + SQL.

![Ebo](./docs/icons/ebo-encuadrado-100.png)

![NPM](https://img.shields.io/badge/npm-ok-green) ![Github](https://img.shields.io/badge/github-ok-green)

## Índice

- [express-boilerplate](#express-boilerplate)
  - [Índice](#índice)
  - [Prestaciones](#prestaciones)
  - [Instalación](#instalación)
  - [Ejecución](#ejecución)
  - [Filosofía](#filosofía)
  - [Uso](#uso)
    - [Crear un fichero estático](#crear-un-fichero-estático)
    - [Crear una plantilla HTML con EJS](#crear-una-plantilla-html-con-ejs)
    - [Crear una plantilla CSS con EJS](#crear-una-plantilla-css-con-ejs)
    - [Crear un controlador](#crear-un-controlador)
    - [Crear una utilidad](#crear-una-utilidad)
    - [Crear un modelo de dato](#crear-un-modelo-de-dato)
    - [Crear un modelo de dato programático](#crear-un-modelo-de-dato-programático)
    - [Crear datos de migración inicial](#crear-datos-de-migración-inicial)
    - [Crear consulta](#crear-consulta)
    - [Crear un comando](#crear-un-comando)
    - [Crear una configuración](#crear-una-configuración)
    - [Crear librería de interfaz](#crear-librería-de-interfaz)
    - [Crear componente de interfaz](#crear-componente-de-interfaz)
    - [Habilitar o deshabilitar controladores](#habilitar-o-deshabilitar-controladores)
  - [¿Qué más ofrece el boilerplate?](#qué-más-ofrece-el-boilerplate)
    - [Clases utilitarias](#clases-utilitarias)
    - [Generador de documentación](#generador-de-documentación)

## Prestaciones

0. ✔ Documentación en profundidad con [REFERENCE.md](./src/Documentation/REFERENCE.md).
1. ✔ Herramienta de línea de comandos de serie.
2. ✔ Comandos de serie fácilmente ampliables.
3. ✔ Variables de entorno.
4. ✔ Drivers de base de datos ampliables
5. ✔ Scripts de creación y migración de bases de datos mediante sistema de plantillas EJS.
6. ✔ Estructuras JSON del modelo de la base de datos automáticamente extraído del SQL.
7. ✔ Drivers ampliables de bases de datos para:
    - ✔ SQLite
    - ✔ MySQL
8. ✔ Decoradores de serie y fácilmente ampliables para:
    - ✔ Condicionales
    - ✔ Consecuenciales
    - ✔ Interceptores
    - ✔ Formateadores
9. ✔ Documentación autogenerada mediante javadoc.
10. ✔ Subida de ficheros incluída como funcionalidad nativa.
11. ✔ Interfaces desde servidor a 3 bandas:
    - ✔ Caché: sistema de cacheo incorporado para páginas optimizadas.
    - ✔ Plantillas EJS: sistema de plantillas para páginas que requieren lógica fresca en cada llamada.
    - ✔ Ficheros estáticos: sistema de ficheros estáticos para ficheros inmutables.
12. ✔ Middlewares de serie y fácilmente ampliables, basados en clases.
13. ✔ Controladores de serie y fácilmente ampliables, basados en clases. Incluyen:
    - ✔ *ControllerForCache.js*: controlador para el sistema de caché de interfaces de servidor.
    - ✔ *ControllerForFiles.js*: controlador para ficheros estáticos.
    - ✔ *ControllerForIndex.js*: controlador específico para el fichero index.js
    - ✔ *ControllerForTemplates.js*: controlador para el sistema de plantillas de interfaces de servidor.
    - ✔ *ControllerForUploads.js*: controlador para ficheros estáticos de las subidas.
    - ✔ *Debug.js*: controlador para propósitos de debugging.
    - ✔ *Delete.js*: controlador para eliminar instancia del sistema automático CRUD.
    - ✔ *Environment.js*: controlador para propósitos de debugging.
    - ✔ *Insert.js*: controlador para insertar instancia del sistema automático CRUD.
    - ✔ *Login.js*: controlador para entrar al sistema.
    - ✔ *Logout.js*: controlador para salir del sistema.
    - ✔ *Schema.js*: controlador para averiguar el esquema de datos.
    - ✔ *Select.js*: controlador para seleccionar instancias del sistema automático CRUD.
    - ✔ *SetFile.js*: controlador para subir fichero del sistema automático CRUD.
    - ✔ *Update.js*: controlador para actualizar instancia del sistema automático CRUD.
14. ✔ Modelos de serie basados en clase y en Sequelize, autogenerados a partir del SQL.
15. ✔ Sistema de queries para separar las consultas puramente del resto de lógica.
16. ✔ Carpeta de recursos, con librerías que puede interesar ampliar fácilmente. Incluye:
    - ✔ Librería de comprobaciones `check-that`.
    - ✔ Librería de parsing del SQL `hql.pegjs` y su `hql.js`.
17. ✔ Utilidades globales disponibles en toda la aplicación, basadas en clases, fácilmente ampliables.
18. ✔ Destacablemente, ofrece un sistema REST automático propio que resuelve las 4 operaciones CRUD mediante HTTP.
19. ✔ También autogenera modelos para el ORM de Sequelize.
20. ✔ Los decoradores son la prestación más avanzada, con la cual puedes reusar mucha lógica, además de ahorrar mucho código.

## Instalación

Primero, instalas la herramienta globalmente:

```sh
npm install -g express-boilerplate
```

Después, ya puedes crear proyectos desde 0, colocándote en el directorio en el que quieres empezar el proyecto, y luego simplemente con:

```sh
ebo create .
```

Alternativamente, también puedes descargarte el proyecto **git** o clonarlo directamente en el directorio que desees, que al final sería lo mismo.

## Ejecución

Para ejecutarlo simplemente 

```sh
npm start
```

## Filosofía

Este proyecto es completamente **minimalista**.

La ejecución se basa prácticamente en 2 ficheros:
  - [`src/load.js`](./src/load.js): carga toda la api. Pero no arranca el servidor.
  - [`src/main.js`](./src/main.js): carga toda la api y luego arranca el servidor.

Los datos se basan en 2 ficheros más:
  - [`src/Database/Scripts/creation.sql`](./src/Database/Scripts/creation.sql)
  - [`src/Database/Scripts/migration.sql`](./src/Database/Scripts/migration.sql)

Además, en el código original, la base de datos es SQLite, por lo cual es un proyecto compacto, que no depende de URLs/servidores externos.

## Uso

En esta sección se desarrollan una serie de procesos que el usuario probablemente quiera hacer.

### Crear un fichero estático

Simplemente añadiendo un fichero cualquiera bajo la carpeta [`src/Interface/www`](./src/Interface/www).

### Crear una plantilla HTML con EJS

Simplemente añadiendo un fichero `*.html` bajo la carpeta [`src/Interface/ejs`](./src/Interface/ejs).

### Crear una plantilla CSS con EJS

Simplemente añadiendo un fichero `*.css` bajo la carpeta [`src/Interface/ejs`](./src/Interface/ejs).

### Crear un controlador

En [`src/Controllers`](./src/Controllers) puedes crear un fichero como éste:

```js
module.exports = class {
    
    method = "use";
    
    route = "/";

    priority = 5000;
    
    getMiddleware() {
      return [];
    }
    
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.ControllerForIndex");
        try {
            const errorParameter = this.api.Utilities.GetRequestParameter(request, "error", false);
            if(typeof errorParameter === "string") {
                throw new Error(errorParameter);
            }
            const db = this.api.Utilities.GetDatabaseConnection();
            const [{ Result: result }] = await db.Execute("SELECT 100 as 'Result';");
            const [{ Result: result2 }] = await this.api.Utilities.QueryDatabase("SELECT 200 as 'Result';");
            return this.api.Utilities.DispatchSuccess(response, {
                message: "The API is working",
                result: result + result2
            });
        } catch (error) {
            return this.api.Utilities.DispatchError(response, error);
        }
    }

};
```

La `api` (con `Utilities`) se inyecta en todas las clases de controlador, una vez instanciado. También se recibe como parámetro en el `constructor`.

Por cierto, el auténtico [`ControllerForIndex`](./src/Controllers/ControllerForIndex), en cambio, redirecciona automáticamente la petición a `/index.html`. En este ejemplo se quería mostrar el acceso a las utilidades desde la API inyectada en todos los controladores al igual que utilidades.

### Crear una utilidad

En [`src/Utilities`](./src/Utilities) puedes crear un fichero como éste:

```js
module.exports = class {
    action() {
        this.api.Utilities.Trace("api.Utilities.GetDatabaseConnection");
        return this.api.Database.Connection;
    }
}
```

Esta utilidad es una `action`, pero también puedes crear una utilidad `factory` simplemente escribiendo el método `factory` (y no `action`) a modo de *factory* propiamente, o fábrica del valor final de la utilidad.

La `api` (con `Utilities`) se inyecta en todas las clases de utilidad, una vez instanciada. También se recibe como parámetro en el `constructor`.

### Crear un modelo de dato

En [`src/Database/Scripts/creation.sql`](./src/Database/Scripts/creation.sql) añades la tabla de datos que deseas.

### Crear un modelo de dato programático

En [`src/Models`](./src/Models) añades la clase de modelo que deseas. No tienen una interfaz obligatoria, el consenso se delega a la lógica del proyecto particular. Eso sí, se inyectará `api` y se pasará al constructor.

### Crear datos de migración inicial

En [`src/Database/Scripts/migration.sql`](./src/Database/Scripts/migration.sql) añades la tabla de datos que deseas.

### Crear consulta

En [`src/Queries/`](./src/Queries) añades una nueva clase con el método `query` o `factory`.

### Crear un comando

Los comandos se ejecutarían mediante `ebo`. Deberías ampliar los scripts del `npm` también. Pero `ebo {Comando}` es el que hará la función para llamar a los comandos. La carpeta de `src/Commands` está pretendidamente puesta para almacenar el código de casos como estos.

### Crear una configuración

En [`src/load.js`](./scr/load.js) tienes la función `setupConfigurations`, donde se establecen los valores para las variables de entorno de `process.env`. Puedes añadrila ahí.

Alternativamente puedes usar el fichero `src/Configurations/.env` para establecer las variables globales directamente, sin intervenir código.

### Crear librería de interfaz

En [`src/Interface/www/lib`](./src/Interface/www/lib) añades una nueva carpeta para la nueva librería.

### Crear componente de interfaz

En [`src/Interface/www/lib/components`](./src/Interface/www/lib/components) añades una nueva carpeta para el nuevo componente. Luego típicamente crearías un fichero con el mismo nombre pero terminado en `js` para usar como componente, otro con `.css` y otro con `.md` para guía de uso.

### Habilitar o deshabilitar controladores

Para habilitar controladores solo tienes que mover los controladores, que deben seguir la especificación de clase, en la carpeta [`src/Controllers`](./src/Controllers).

Para deshabilitar controladores solo tienes que mover los controladores de la carpeta [`src/Controllers`](./src/Controllers) a la carpeta [`src/Controllers/Off`](./src/Controllers/Off).

## ¿Qué más ofrece el boilerplate?

Hay algunas otras ventajas, como clases utilitarias, o herramientas para análisis de software.

### Clases utilitarias

Unas pocas clases utilitarias:

 - [`AuthenticateRequest`](./src/Utilities/AuthenticateRequest.js) para autentificar peticiones. Le pone el `request.$$authentication`.
 - [`CheckThat`](./src/Utilities/CheckThat.js) para hacer comprobaciones con reporte de errores uniforme.
 - [`CloneExceptProperties`](./src/Utilities/CloneExceptProperties.js) para clonar un objeto, sin ciertas propiedades.
 - [`CloneOnlyProperties`](./src/Utilities/CloneOnlyProperties.js) para clonar un objeto, solo ciertas propiedades.
 - [`CloseDeployment`](./src/Utilities/CloseDeployment.js) para cerrar el despliegue: conexiones, sockets, etc.
 - [`Die`](./src/Utilities/Die.js) para interrumpir el proceso del sistema. Para debugging.
 - [`DispatchError`](./src/Utilities/DispatchError.js) para despachar errores en JSON.
 - [`DispatchErrorAsHtml`](./src/Utilities/DispatchErrorAsHtml.js) para despachar errores en HTML.
 - [`DispatchSuccess`](./src/Utilities/DispatchSuccess.js) para despachar éxitos en JSON.
 - [`DispatchSuccessAsHtml`](./src/Utilities/DispatchSuccessAsHtml.js) para despachar ficheros HTML.
 - [`FormatRowsByGroups`](./src/Utilities/FormatRowsByGroups.js) para agrupar los datos resultantes de una consulta con JOINs en el SQL.
 - [`GetDatabaseConnection`](./src/Utilities/GetDatabaseConnection.js) para obtener conexión de base de datos.
 - [`GetDateFromString`](./src/Utilities/GetDateFromString.js) para obtener Date de String.
 - [`GetDateToString`](./src/Utilities/GetDateToString.js) para obtener String de Date.
 - [`GetRandomString`](./src/Utilities/GetRandomString.js) para obtener String aleatorio.
 - [`GetRequestParameter`](./src/Utilities/GetRequestParameter.js) para obtener parametro de petición.
 - [`GetStringLeftPadded`](./src/Utilities/GetStringLeftPadded.js) para obtener String con espaciado por la izquierda.
 - [`InitializeDatabase`](./src/Utilities/InitializeDatabase.js) para inicializar la base de datos.
 - [`QueryDatabase`](./src/Utilities/QueryDatabase.js) para ejecutar una consulta SQL.
 - [`Trace`](./src/Utilities/Trace.js) para tracear un método o función.


### Generador de documentación

Con `express-boilerplate` también tienes un generador de documentación basado en comentarios [`javadoc`](https://github.com/allnulled/javadoc). Solo tienes que hacer:

```sh
npm run build-documentation
```

Así puedes generar documentación en [`src/Documentation/REFERENCE.md`](./src/Documentation/REFERENCE.md).

