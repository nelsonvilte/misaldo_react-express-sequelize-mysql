const router = require("express").Router();

const { Movimiento } = require("../../db");

router.get("/", async (req, res) => {
  const movimientos = await Movimiento.findAll();
  res.json(movimientos);
});

router.get("/:movimientoId", async (req, res) => {
  const movimiento = await Movimiento.findOne({
    where: { id: req.params.movimientoId },
  });
  res.json(movimiento);
});

router.post("/", async (req, res) => {
  const movimiento = await Movimiento.create(req.body);
  res.json(movimiento);
});

router.put("/:movimientoId", async (req, res) => {
  await Movimiento.update(req.body, {
    where: { id: req.params.movimientoId },
  });
  res.json({ success: "Se ha modificado" });
});

router.delete("/:movimientoId", async (req, res) => {
  await Movimiento.destroy({
    where: { id: req.params.movimientoId },
  });
  res.json({ success: "registro eliminado" });
});

module.exports = router;
