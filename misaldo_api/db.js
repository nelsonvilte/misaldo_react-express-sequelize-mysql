const Sequelize = require("sequelize");
//llamada al modelo definido
const movimientoModel = require("./models/movimientos");
//conexion con base de datos
const sequelize = new Sequelize("movimientosdb", "root", "2012.20", {
  host: "localhost",
  dialect: "mysql",
});
//obtencion del modelo "Movimiento" el cual se puede sincronizar con la base de datos
const Movimiento = movimientoModel(sequelize, Sequelize);

//sincronizacion con las tablas de la base de datos
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas");
  })
  .catch(function () {
    console.log("Tablas no sincronizadas");
  });

//exportación de objetos para utilizarlo por fuera
module.exports = {
  Movimiento,
};
