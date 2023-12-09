#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const [node_bin, ebo_bin, command] = process.argv;
const package_path = path.resolve(process.cwd(), "package.json");

try {
    require(package_path);
} catch (error) {
    throw new Error("Para usar «ebo» tienes que estar emplazado en el mismo directorio que el «package.json» de un proyecto de «express-boilerplate»");
}

const print_help = function() {
    console.log("[Introducción]");
    console.log("   Guía de ayuda de «ebo», el programa de línea de comandos para «express-boilerplate».");
    console.log();
    console.log("[Proyecto]");
    console.log("   " + require(package_path).name);
    console.log();
    console.log("[Documentación]");
    console.log("   https://github.com/allnulled/express-boilerplate");
    console.log();
    console.log("[Versión]");
    console.log("   " + require(package_path).version);
    console.log();
    console.log("[Sintaxis]");
    console.log("   ebo {comando} {parámetros}");
    console.log();
    console.log("[Comandos disponibles]");
    const commands_path = path.resolve(process.cwd(), "src/Commands");
    const command_folders = fs.readdirSync(commands_path);
    Iterando_comandos:
    for(let index_commands=0; index_commands<command_folders.length; index_commands++) {
      const command_folder = command_folders[index_commands];
      if(command_folder === "Ebo") {
        continue Iterando_comandos;
      }
      console.log(`   ebo ${command_folder}`);
    }
    console.log();
};

if(typeof command !== "string") {
    return print_help();
}

try {
    const current_project = process.cwd();
    const command_path = path.resolve(current_project, "src/Commands", command, command + ".js");
    require(command_path);
} catch (error) {
    console.log("Error corriendo «ebo " + command + "»");
    console.log(error);
}