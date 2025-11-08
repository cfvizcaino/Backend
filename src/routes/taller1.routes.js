const express = require("express");
const router = express.Router();
const {
  convertidorTemp,
  resolvedor,
  mejorParidad,
  peorParidad,
} = require("../talleres/taller1");

// Endpoint para convertidorTemp
router.post("/convertidorTemp", (req, res) => {
  const { tempCel } = req.body;
  const result = convertidorTemp(tempCel);
  res.json({ result });
});

// Endpoint para resolvedor
router.post("/resolvedor", (req, res) => {
  const { a, b, c, signo } = req.body;
  const result = resolvedor(a, b, c, signo);
  res.json({ result });
});

// Endpoint para mejorParidad
router.post("/mejorParidad", (req, res) => {
  const { numero } = req.body;
  const result = mejorParidad(numero);
  res.json({ result });
});

// Endpoint para peorParidad
router.post("/peorParidad", (req, res) => {
  try {
    const { numero } = req.body;
    const result = peorParidad(numero);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
