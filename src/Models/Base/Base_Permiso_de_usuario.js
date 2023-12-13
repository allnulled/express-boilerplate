

const Sequelize = require("sequelize");

module.exports = class BasePermiso_de_usuario{
    initialize() {
        return this.api.Database.SequelizeConnection.define("Permiso_de_usuario", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            id_usuario: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "id_usuario"
            },
            id_permiso: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "id_permiso"
            }
        });
    }
};