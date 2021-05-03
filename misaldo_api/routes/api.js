const router = require("express").Router();

const apiMovimientosRouter = require("./api/movimientos");

router.use("/movimientos", apiMovimientosRouter);

module.exports = router;
