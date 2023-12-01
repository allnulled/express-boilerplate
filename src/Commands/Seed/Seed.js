const semillero_parser = require(__dirname + "/../../Resources/semillero.js");
const semillero_script = require("fs").readFileSync(__dirname + "/Seed.smr").toString();
const emf_output = semillero_parser.parse(semillero_script);
console.log(emf_output);
require("fs").writeFileSync(__dirname + "/../../../Seed.emf", emf_output, "utf8");
require("child_process").execSync("npx emf Seed.emf", {
    cwd: __dirname + "/../../..",
    stdio: [process.stdin, process.stdout, process.stderr]
});