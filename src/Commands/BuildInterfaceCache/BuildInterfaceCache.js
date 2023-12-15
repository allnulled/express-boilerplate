const fs = require("fs/promises");
const fs_extra = require("fs-extra");
const path = require("path");
const ejs = require("ejs");

module.exports = (async function () {
    try {
        const { api } = await require(__dirname + "/../../load.js")({}, { skip_database_creation: true });
        const cachers_dir = path.resolve(__dirname + "/../../Interface/cache/cachers");
        const cached_dir = path.resolve(__dirname + "/../../Interface/cache/cached");
        const project_dir = path.resolve(__dirname + "/../../..");
        const all_files = await fs.readdir(cachers_dir, { recursive: true });
        let counter = 0;
        Iterating_files:
        for(let index_file=0; index_file<all_files.length; index_file++) {
          const file = all_files[index_file];
          const file_in = path.resolve(cachers_dir, file);
          const file_out = path.resolve(cached_dir, file.replace(".ejs", ""));
          const dir_out = path.dirname(file_out);
          const lstat = await fs.lstat(file_in);
          if(lstat.isDirectory()) {
            continue Iterating_files;
          }
          counter++;
          console.log("[*] Cacheador nº " + counter + ":  ");
          console.log("    - Origen:  " + file_in.replace(project_dir, ""));
          console.log("    - Destino: " + file_out.replace(project_dir, ""));
          const __filename = file_in;
          const __dirname = path.dirname(__filename);
          const template_contents = await fs.readFile(file_in, "utf8");
          const template_output = await ejs.render(template_contents, {
            require,
            __filename,
            __dirname,
            api,
          }, { async: true });
          await fs_extra.ensureDir(dir_out);
          await fs.writeFile(file_out, template_output, "utf8");
        }
    } catch (error) {
        console.log(error);
    }
})();

