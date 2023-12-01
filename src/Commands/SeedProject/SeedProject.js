const semillero_parser = require(__dirname + "/../../Resources/semillero.js");
const semillero_script = require("fs").readFileSync(__dirname + "/SeedProject.smr").toString();
const emf_output = semillero_parser.parse(semillero_script);

require("fs").writeFileSync(__dirname + "/../../../SeedProject.emf", emf_output, "utf8");
require("child_process").execSync("npx emf SeedProject.emf", {
    cwd: __dirname + "/../../..",
    stdio: [process.stdin, process.stdout, process.stderr]
});