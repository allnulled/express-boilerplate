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
    - [Crear datos de migración inicial](#crear-datos-de-migración-inicial)
    - [Crear un comando](#crear-un-comando)
    - [Crear una configuración](#crear-una-configuración)
  - [¿Qué más ofrece el boilerplate?](#qué-más-ofrece-el-boilerplate)

## Instalación

Descarga el proyecto y ejecuta `npm install` para instalar las dependencias.

## Ejecución

Para ejecutarlo simplemente `npm start`.

## Filosofía

Este proyecto es completamente **minimalista**.

La ejecución se basa prácticamente en 1 fichero:
  - [`src/main.js`](./src/main.js): define el proceso principal.

Los datos se basan en 2 ficheros más:
  - [`src/Database/scripts/creation.sql`](./src/Database/scripts/creation.sql)
  - [`src/Database/scripts/migration.sql`](./src/Database/scripts/migration.sql)

Además, en el código original, la base de datos es SQLite, por lo cual es un proyecto compacto, que no depende de URLs/servidores externos.

## Uso

En esta sección se desarrollan una serie de procesos que el usuario probablemente quiera hacer.

### Crear un fichero estático

Simplemente añadiendo un fichero cualquiera bajo la carpeta `src/Interface/www`.

### Crear una plantilla HTML con EJS

Simplemente añadiendo un fichero `*.html` bajo la carpeta `src/Interface/ejs`.

### Crear una plantilla CSS con EJS

Simplemente añadiendo un fichero `*.css` bajo la carpeta `src/Interface/ejs`.

### Crear un controlador

En `src/Controllers` puedes crear un fichero como éste:

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

En `src/Utilities` puedes crear un fichero como éste:

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

En [`src/Database/scripts/creation.sql`](./src/Database/scripts/creation.sql) añades la tabla de datos que deseas.

### Crear datos de migración inicial

En [`src/Database/scripts/migration.sql`](./src/Database/scripts/migration.sql) añades la tabla de datos que deseas.

### Crear un comando

En [`package.json`](./package.json) el apartado `scripts` te será de ayuda en esto. Los comandos se ejecutarían mediante `npm`.

### Crear una configuración

En [`src/main.js`](./scr/main.js) tienes la función `setupConfigurations`, donde se establecen los valores para las variables de entorno de `process.env`. Puedes añadrila ahí.

## ¿Qué más ofrece el boilerplate?

Unas pocas clases utilitarias:

 - Para homogeneizar las salidas y entradas JSON de los controladores:
    - [`DispatchSuccess`](./src/Utilities/DispatchSuccess.js)
    - [`DispatchError`.](./src/Utilities/DispatchError.js)
 - Para tratamiento de fechas y texto general:
    - [`GetDateFromString`](./src/Utilities/GetDateFromString.js)
    - [`GetDateToString`](./src/Utilities/GetDateToString.js)
    - [`GetStringLeftPadded`](./src/Utilities/GetStringLeftPadded.js)
 - Para bases de datos:
    - [`GetDatabaseConnection`](./src/Utilities/GetDatabaseConnection.js)
    - [`InitializeDatabase`](./src/Utilities/InitializeDatabase.js)
    - [`QueryDatabase`](./src/Utilities/QueryDatabase.js)
 - Para gestionar peticiones:
    - [`GetRequestParameter`](./src/Utilities/GetRequestParameter.js)
