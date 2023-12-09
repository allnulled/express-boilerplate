const fs = require("fs");
const path = require("path");
const hql_path = path.resolve(__dirname + "/../../Resources/hql.js");
const hql_parser = require(hql_path);
const database_creation_path = path.resolve(__dirname + "/../../Database/Scripts/creation.sql");
const database_creation = fs.readFileSync(database_creation_path).toString();
require("child_process").execSync("npm run build-database-creation", {
    cwd: __dirname + "/../../..",
    stdio: [process.stdin, process.stdout, process.stderr]
});
try {
    const ast = hql_parser.parse(database_creation);
    console.log("El script [src/Database/Scripts/creation.sql] actual es correcto.");
} catch (error) {
    console.log("Error testeando creación de base de datos:");
    console.log(error);
}