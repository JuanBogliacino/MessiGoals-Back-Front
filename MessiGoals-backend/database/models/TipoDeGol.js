module.exports = function(sequelize, datatypes) {
    let alias = "TipoDeGol";

    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: datatypes.STRING
        }
    }

    let config = {
        tableName: "tipodegol",
        timestamps: false
    }

    let TipoDeGol = sequelize.define(alias, cols, config);

    TipoDeGol.associate = function(models) {
        TipoDeGol.hasMany(models.Gol, {
           as: "goles",
           foreignKey: "tipoDeGol_id"
        });
    }

    return TipoDeGol;
}