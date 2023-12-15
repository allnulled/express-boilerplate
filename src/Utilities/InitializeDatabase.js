module.exports = class {
    /**
     * 
     * @name api.Utilities.InitializeDatabase
     * @type Función
     * @description Inicializa la base de datos, esto es: crea las tablas y aplica las migraciones. Consiste en 2 llamadas:
     *    - `this.applyCreationScript`: aplica el script de creación.
     *    - `this.applyMigrationScript`: aplica el script de migración.
     * 
     */
    async action() {
        this.api.Utilities.Trace("api.Utilities.InitializeDatabase");
        await this.applyCreationScript();
        await this.applyMigrationScript();
    }
    async applyCreationScript_modoRudimentario() {
      const fs = require("fs");
      const creationScript = fs.readFileSync(__dirname + "/../Database/Scripts/creation.sql").toString();
      const creationSentences = creationScript.split(/;[ \t]*(\n)/g).filter(text => text.trim().length !== 0);
      for(let index=0; index<creationSentences.length; index++) {
        const creationSentence = creationSentences[index].trim();
        await this.api.Database.Connection.Execute(creationSentence);
      }
    }
    async applyCreationScript() {
      if(process.env.DATABASE_DRIVER === "mysql") {
        await this.api.Database.Connection.Execute("USE " + process.env.DATABASE_NAME);
      }
      const creationSentences = this.api.Database.Schema.map(sentence => sentence.script);
      for(let index=0; index<creationSentences.length; index++) {
        const creationSentence = creationSentences[index].trim();
        await this.api.Database.Connection.Execute(creationSentence);
      }
    }
    async applyMigrationScript() {
      const fs = require("fs");
      const migrationScript = fs.readFileSync(__dirname + "/../Database/Scripts/migration.sql").toString();
      const migrationSentences = migrationScript.split(/;[ \t]*(\n)/g).filter(text => text.trim().length !== 0);
      for(let index=0; index<migrationSentences.length; index++) {
        const migrationSentence = migrationSentences[index].trim();
        await this.api.Database.Connection.Execute(migrationSentence);
      }
    }
}