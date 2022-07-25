module.exports = (sequelize, DataTypes) => {

    const Carrera = sequelize.define("carrera", {
        carrera: {
            type: DataTypes.STRING
        },
        mencion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nro_materias: {
            type: DataTypes.STRING
        },
        total_creditos: {
            type: DataTypes.STRING
        },
        titulo: {
            type: DataTypes.STRING
        }
    
    })

    return Carrera

}