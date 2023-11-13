# express-boilerplate

Código fuente base para servidores basados en Node.js + Express + SQLite.

## Instalación

Descarga el proyecto y ejecuta `npm install` para instalar las dependencias.

## Ejecución

Para ejecutarlo simplemente `npm start`.

## Filosofía

Este proyecto es completamente **minimalista**.

La ejecución se basa prácticamente en 1 fichero:
  - `src/main.js`: define el proceso principal.

Los datos se basan en 2 ficheros más:
  - `src/Database/scripts/creation.sql`
  - `src/Database/scripts/migration.sql`

Además, en el código original, la base de datos es SQLite, por lo cual es un proyecto compacto, que no depende de URLs/servidores externos.

## Uso

A continuación se detallan los procesos de desarollo siguientes:

### Crear nuevo controlador

En `src/Controllers` puedes crear un fichero como éste, que es el de `IndexController`:

```
module.exports = class {
    method = "use";
    route = "/";
    getMiddleware() { return []; }
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.IndexController");
        const db = this.api.Utilities.GetDatabaseConnection();
        const [result] = await db.Execute("SELECT 100;");
        response.json({ message: "OK!", result });
    }
};
```

### Crear una utilidad nueva

En `src/Utilities` puedes crear un fichero como éste:

```
module.exports = class {
    action() {
        this.api.Utilities.Trace("api.Utilities.GetDatabaseConnection");
        return this.api.Database.Connection;
    }
}
```

Esta utilidad es una `action`, pero también puedes crear una utilidad `factory` simplemente escribiendo el método `factory` (y no `action`) a modo de *factory* propiamente, o fábrica del valor final de la utilidad.

### Crear un modelo de dato

En `src/Database/scripts/creation.sql` añades la tabla de datos que deseas.

### Crear un comando

En `package.json` el apartado `scripts` te será de ayuda en esto. Los comandos se ejecutarían mediante `npm`.

### Crear una configuración

En `src/main.js` tienes la función `setupConfigurations`, donde se establecen los valores para las variables de entorno de `process.env`. Puedes añadrila ahí.