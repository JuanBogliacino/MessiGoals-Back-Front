module.exports = function(sequelize, datatypes) {
    let alias = "Gol";

    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        num: {
            type: datatypes.INTEGER
        },
        rival_id: {
            type: datatypes.INTEGER
        },
        competicion_id: {
            type: datatypes.INTEGER
        },
        equipo_id: {
            type: datatypes.INTEGER
        },
        tipoDeGol_id: {
            type: datatypes.INTEGER
        },
        anio_id: {
            type: datatypes.INTEGER
        },
        link: {
            type: datatypes.STRING
        }
    }

    let config = {
        tableName: "goles",
        timestamps: false
    }

    let Gol = sequelize.define(alias, cols, config);

    Gol.associate = function(models) {
        Gol.belongsTo(models.Rival, {
           as: "rival",
           foreignKey: "rival_id"
        });

        Gol.belongsTo(models.Anio, {
            as: "anio",
            foreignKey: "anio_id"
         });

         Gol.belongsTo(models.Competicion, {
            as: "competicion",
            foreignKey: "competicion_id"
         });

         Gol.belongsTo(models.TipoDeGol, {
            as: "tipoDeGol",
            foreignKey: "tipoDeGol_id"
         });

         Gol.belongsTo(models.Equipo, {
            as: "equipo",
            foreignKey: "equipo_id"
         });
    }

    return Gol;
}