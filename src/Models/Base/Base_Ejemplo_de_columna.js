

const Sequelize = require("sequelize");

module.exports = class BaseEjemplo_de_columna{
    initialize() {
        return this.api.Database.SequelizeConnection.define("Ejemplo_de_columna", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            color: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "color"
            }
        });
    }
};