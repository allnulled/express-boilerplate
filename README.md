# express-boilerplate

Código fuente base para servidores basados en Node.js + Express + SQLite y finalmente EJS para simular algo similar al PHP clásico de plantillas.

## Índice

- [express-boilerplate](#express-boilerplate)
  - [Índice](#índice)
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
    - [Análisis de software](#análisis-de-software)
    - [Generador de documentación incluído](#generador-de-documentación-incluído)


## Instalación

Por consola sería así:

```sh
git clone https://github.com/allnulled/express-boilerplate .
npm install
```

Pero puedes descargarte el proyecto a mano, perscindiendo de `git` en la línea de comandos. El `npm install` es necesario, así que debes tener instalado `npm` y `node`.

## Ejecución

Para ejecutarlo simplemente 

```sh
npm start
```

## Filosofía

Este proyecto es completamente **minimalista**.

La ejecución se basa prácticamente en 1 fichero:
  - [`src/main.js`](./src/main.js): define el proceso principal.

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

En [`package.json`](./package.json) el apartado `scripts` te será de ayuda en esto. Los comandos se ejecutarían mediante `npm`.

La carpeta de `src/Commands` está pretendidamente puesta para almacenar el código de casos como estos.

### Crear una configuración

En [`src/main.js`](./scr/main.js) tienes la función `setupConfigurations`, donde se establecen los valores para las variables de entorno de `process.env`. Puedes añadrila ahí.

Alternativamente puedes usar el fichero `src/Configurations/.env` para establecer las variables globales directamente, sin intervenir código.

### Crear librería de interfaz

En [`src/Interface/www/lib`](./src/Interface/www/lib) añades una nueva carpeta para la nueva librería.

### Crear componente de interfaz

En [`src/Interface/www/lib/components`](./src/Interface/www/lib/components) añades una nueva carpeta para el nuevo componente. Luego típicamente crearías un fichero con el mismo nombre pero terminado en `js` para usar como componente, otro con `.css` y otro con `.md` para guía de uso.

### Habilitar o deshabilitar controladores

Para habilitar controladores solo tienes que mover los controladores, que deben seguir la especificación de clase, en la carpeta [`src/Controllers`](./src/Controllers).

Para deshabilitar controladores solo tienes que mover los controladores de la carpeta [`src/Controllers`](./src/Controllers) a la carpeta [`src/ControllersOff`](./src/ControllersOff).

## ¿Qué más ofrece el boilerplate?

Hay algunas otras ventajas, como clases utilitarias, o herramientas para análisis de software.

### Clases utilitarias

Unas pocas clases utilitarias:

 - [`CheckThat`](./src/Utilities/CheckThat.js) para hacer comprobaciones con reporte de errores uniforme
 - [`DispatchError`](./src/Utilities/DispatchError.js) para despachar errores en JSON
 - [`DispatchErrorAsHtml`](./src/Utilities/DispatchErrorAsHtml.js) para despachar errores en HTML
 - [`DispatchSuccess`](./src/Utilities/DispatchSuccess.js) para despachar éxitos en JSON
 - [`DispatchSuccessAsHtml`](./src/Utilities/DispatchSuccessAsHtml.js) para despachar ficheros HTML
 - [`GetDatabaseConnection`](./src/Utilities/GetDatabaseConnection.js) para obtener conexión de base de datos
 - [`GetDateFromString`](./src/Utilities/GetDateFromString.js) para obtener Date de String
 - [`GetDateToString`](./src/Utilities/GetDateToString.js) para obtener String de Date
 - [`GetRandomString`](./src/Utilities/GetRandomString.js) para obtener String aleatorio
 - [`GetRequestParameter`](./src/Utilities/GetRequestParameter.js) para obtener parametro de petición
 - [`GetStringLeftPadded`](./src/Utilities/GetStringLeftPadded.js) para obtener String con espaciado por la izquierda
 - [`InitializeDatabase`](./src/Utilities/InitializeDatabase.js) para inicializar la base de datos
 - [`QueryDatabase`](./src/Utilities/QueryDatabase.js) para ejecutar una consulta SQL
 - [`Trace`](./src/Utilities/Trace.js) para tracear un método o función

### Análisis de software

Por defecto, `express-boilerplate` viene con 1 comando: `npm run seed-project` o `node src/Commands/SeedProject/SeedProject.js`. Y este fichero está al lado de otro: `src/Commands/SeedProject/SeedProject.smr`. Este tipo de ficheros responde a un lenguaje de programación particular de este proyecto: `semillero`. Los ficheros fuente están en `src/Resources/semillero.pegjs` y su homólogo `.js`.

Para saber más sobre qué puedes hacer con semillero, tienes su documentación en otra parte de este proyecto: [semillero](./src/Documentation/SEMILLERO.md).

### Generador de documentación incluído

Con `express-boilerplate` también tienes un generador de documentación basado en comentarios [`javadoc`](https://github.com/allnulled/javadoc). Solo tienes que hacer:

```sh
npm run build-documentation
```

Así puedes generar documentación en [`src/Documentation/REFERENCE.md`](./src/Documentation/REFERENCE.md).

