const fs = require("fs");
const path = require("path");

const [bin_node, bin_file, output] = process.argv;
if(typeof output === "undefined") {
    throw new Error("Required an argument to output the project express-boilerplate");
}

const output_dir = path.resolve(process.cwd(), output);
console.log("[*] Generating «express-boilerplate» project on: " + output_dir);
require("fs-extra").copySync(__dirname + "/../../..", output_dir);