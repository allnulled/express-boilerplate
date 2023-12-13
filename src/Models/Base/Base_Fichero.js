

const Sequelize = require("sequelize");

module.exports = class BaseFichero{
    initialize() {
        return this.api.Database.SequelizeConnection.define("Fichero", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            fichero: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
                field: "fichero"
            },
            id_carpeta_padre: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "id_carpeta_padre"
            }
        });
    }
};