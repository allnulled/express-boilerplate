const fs = require("fs");
const path = require("path");

const [bin_node, bin_ebo, command, output] = process.argv;
console.log("-----------------------");
console.log("Node:     " + bin_node);
console.log("Ebo:      " + bin_ebo);
console.log("Comando:  " + command);
console.log("Salida:   " + output);
console.log("-----------------------");
if(typeof output === "undefined") {
    throw new Error("Se requiere un argumento como directorio de salida");
}

const output_dir = path.resolve(process.cwd(), output);
console.log("[*] Generando proyecto «express-boilerplate» en: " + output_dir);
require("fs-extra").copySync(__dirname + "/../../..", output_dir);