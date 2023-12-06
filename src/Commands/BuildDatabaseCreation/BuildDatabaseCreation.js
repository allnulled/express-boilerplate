const fs = require("fs");
const ejs = require("ejs");

module.exports = (async function() {
    try {
        const input_file = __dirname + "/../../Database/scripts/creation.sql.ejs";
        const output_file = __dirname + "/../../Database/scripts/creation.sql";
        const scripts_dir = __dirname + "/../../Database/scripts";
        const template_contents = fs.readFileSync(input_file).toString();
        const template_output = ejs.render(template_contents, { scripts_dir });
        fs.writeFileSync(output_file, template_output, "utf8");
    } catch (error) {
        console.log(error);
    }
})();

