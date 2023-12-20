const fs = require("fs-extra");
const path = require("path");

const uiscript_css_output_file = path.resolve(__dirname + "/../../Interface/www/lib/xcomponents/xcomponents.css");
const uiscript_components_dir = path.resolve(__dirname + "/../../Interface/www/lib/xcomponents/components");
const component_folders = fs.readdirSync(uiscript_components_dir);
let css_all = "";
Iterating_components:
for(let index=0; index<component_folders.length; index++) {
  const folder = component_folders[index];
  if(folder === "api.js") {
    continue Iterating_components;
  }
  console.log("[*] Importing " + folder);
  const component_dir = path.resolve(uiscript_components_dir, folder);
  const component_css_file = component_dir + "/" + folder + ".css";
  const component_css_contents = fs.readFileSync(component_css_file).toString();
  css_all += component_css_contents + "\n";
}
fs.writeFileSync(uiscript_css_output_file, css_all, "utf8");