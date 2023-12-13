module.exports = async function(api) {
    const { Sequelize } = require("sequelize");
    const main_driver = process.env.DATABASE_DRIVER;
    if(main_driver === "sqlite") {
        const sequelize = new Sequelize({
            dialect: "sqlite",
            storage: process.env.DATABASE_FILE
        });
        return sequelize;
    } else if(main_driver === "mysql") {
        throw new Error("This database driver is not supported yet");
    } else {
        throw new Error("There is no support for this database driver («" + process.env.DATABASE_DRIVER + "»)")
    }
    
}