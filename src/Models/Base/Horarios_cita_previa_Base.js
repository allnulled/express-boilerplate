const Sequelize = require("sequelize");

module.exports = class Horarios_cita_previa_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Horarios_cita_previa", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            cita_previa_inicio: {
                type: Sequelize.DATE,
                allowNull: false,
                field: "cita_previa_inicio"
            },
            cita_previa_final: {
                type: Sequelize.DATE,
                allowNull: false,
                field: "cita_previa_final"
            },
            id_entrenador: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "id_entrenador"
            }
        }, {
            timestamps: false,
            freezeTableName: true
        });
    }
};