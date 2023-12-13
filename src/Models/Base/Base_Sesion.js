

const Sequelize = require("sequelize");

module.exports = class BaseSesion{
    initialize() {
        return this.api.Database.SequelizeConnection.define("Sesion", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            token: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "token"
            },
            id_usuario: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "id_usuario"
            }
        });
    }
};