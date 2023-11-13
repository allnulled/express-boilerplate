module.exports = class {
    action() {
        this.api.Utilities.Trace("api.Utilities.InitializeDatabase");
        const fs = require("fs");
        CreationScript: {
          const creationScript = fs.readFileSync(__dirname + "/../Database/scripts/creation.sql").toString();
          const creationSentences = creationScript.split(/;[ \t]*(\n)/g).filter(text => text.trim().length !== 0);
          for(let index=0; index<creationSentences.length; index++) {
            const creationSentence = creationSentences[index].trim();
            this.api.Database.Connection.Execute(creationSentence);
          }
        }
        MigrationScript: {
          const migrationScript = fs.readFileSync(__dirname + "/../Database/scripts/migration.sql").toString();
          const migrationSentences = migrationScript.split(/;[ \t]*(\n)/g).filter(text => text.trim().length !== 0);
          for(let index=0; index<migrationSentences.length; index++) {
            const migrationSentence = migrationSentences[index].trim();
            this.api.Database.Connection.Execute(migrationSentence);
          }
        }

    }
}