const Sequelize = require("sequelize");

module.exports = class Carpeta_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Carpeta", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
                field: "nombre"
            },
            id_carpeta_padre: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "id_carpeta_padre"
            }
        }, {
          timestamps: false,
          freezeTableName: true
        });
    }
};