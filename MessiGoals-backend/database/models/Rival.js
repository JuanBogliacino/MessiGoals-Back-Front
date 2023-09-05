module.exports = function(sequelize, datatypes) {
    let alias = "Rival";

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
        tableName: "rival",
        timestamps: false
    }

    let Rival = sequelize.define(alias, cols, config);

    Rival.associate = function(models) {
        Rival.hasMany(models.Gol, {
           as: "goles",
           foreignKey: "rival_id"
        });
    }

    return Rival;
}