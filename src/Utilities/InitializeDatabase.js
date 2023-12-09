module.exports = class {
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