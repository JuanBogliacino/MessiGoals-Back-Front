module.exports = function(sequelize, datatypes) {
    let alias = "Anio";

    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        anio: {
            type: datatypes.INTEGER
        }
    }

    let config = {
        tableName: "anio",
        timestamps: false
    }

    let Anio = sequelize.define(alias, cols, config);

    Anio.associate = function(models) {
        Anio.hasMany(models.Gol, {
           as: "goles",
           foreignKey: "anio_id"
        });
    }

    return Anio;
}