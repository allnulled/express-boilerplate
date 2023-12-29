const Sequelize = require("sequelize");

module.exports = class Horarios_entrenador_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Horarios_entrenador", {
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
            }
        }, {
            timestamps: false,
            freezeTableName: true
        });
    }
};