module.exports = async function(api) {
  api.Utilities.Trace("src/Database/Drivers/sequelize.js");
  const { Sequelize } = require("sequelize");
    const main_driver = process.env.DATABASE_DRIVER;
    if(main_driver === "sqlite") {
        const sequelize = new Sequelize({
            dialect: "sqlite",
            storage: process.env.DATABASE_FILE
        });
        return sequelize;
    } else if(main_driver === "mysql") {
        const sequelize = new Sequelize("test", "root", "Toor.123", {
            dialect: "mysql",
            host: "127.0.0.1",
            port: 3306
        });
        return sequelize;
    } else {
        throw new Error("There is no support for this database driver («" + process.env.DATABASE_DRIVER + "»)")
    }
    
}