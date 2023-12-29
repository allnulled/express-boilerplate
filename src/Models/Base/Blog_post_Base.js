const Sequelize = require("sequelize");

module.exports = class Blog_post_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Blog_post", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            titulo: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "titulo"
            },
            subtitulo: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "subtitulo"
            },
            contenido: {
                type: Sequelize.TEXT,
                allowNull: true,
                field: "contenido"
            },
            fecha_de_creacion: {
                type: Sequelize.DATE,
                allowNull: true,
                field: "fecha_de_creacion"
            },
            fecha_de_actualizacion: {
                type: Sequelize.DATE,
                allowNull: true,
                field: "fecha_de_actualizacion"
            }
        }, {
            timestamps: false,
            freezeTableName: true
        });
    }
};