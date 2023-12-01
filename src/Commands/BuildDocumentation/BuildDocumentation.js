require("javadoc").generate({
    include: [__dirname + "/../../"+"**/*.js"],
    exclude: ["**/node_modules/"+"**", "test/test.js", "**/calo.js"],
    format: "json",
    output: __dirname + "/../../Documentation/REFERENCE.json"
}).then(function() {
    const reference = require(__dirname + "/../../Documentation/REFERENCE.json"); 
    console.log(reference);
    let out = "";
    for(let index=0; index<reference.success.length; index++) {
      const file_match = reference.success[index];
      for(let index_match=0; index_match<file_match.length; index_match++) {
        const comment_match = file_match[index_match];
        out += "\n\n----\n\n";
        for(let key in comment_match) {
          const subitems = comment_match[key];
          if(typeof subitems === "string") {
            out += "\n - **";
            out += key;
            out += "**: ";
            out += subitems;
          } else {
            Iterating_subitems:
            for(let index_subitems=0; index_subitems<subitems.length; index_subitems++) {
              const subitem = subitems[index_subitems];
              if(subitem.trim() === "") {
                continue Iterating_subitems;
              }
              out += "\n - **";
              out += key;
              out += "**: ";
              out += subitem;
            }
          }
        }
      }
    }
    require("fs").writeFileSync(__dirname + "/../../Documentation/REFERENCE.md", out, "utf8");
});