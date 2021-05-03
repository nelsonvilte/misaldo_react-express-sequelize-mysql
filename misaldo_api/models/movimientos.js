module.exports = (sequelize, DataTypes) => {
  //"movimiento: tabla a generar en la base de datos"
  return sequelize.define("movimiento", {
    //objeto con los campos a generar en la tabla
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    monto: {
      type: DataTypes.FLOAT,
      // allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    descripcion: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fecha: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
};
