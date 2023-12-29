const Sequelize = require("sequelize");

module.exports = class Permiso_de_usuario_Base {
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
        }, {
            timestamps: false,
            freezeTableName: true
        });
    }
};