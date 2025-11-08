const express = require("express");
const router = express.Router();
const {
  desglosarString,
  twoSum,
  conversionRomana,
  descomposicion,
} = require("../talleres/taller3");

// Endpoint para desglosar un string
router.post("/desglosar-string", (req, res) => {
  try {
    const { texto, tipo } = req.body;
    const result = desglosarString(texto, tipo);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint para una suma de dos números que den un objetivo
router.post("/two-sum", (req, res) => {
  const { lista, numero } = req.body;
  const result = twoSum(lista, numero);
  res.json({ result });
});

// Endpoint para conversión de números romanos a enteros
router.post("/conversion-romana", (req, res) => {
  const { numRomano } = req.body;
  const result = conversionRomana(numRomano);
  res.json({ result });
});

// POST endpoint for descomposicion
router.post("/descomposicion", (req, res) => {
  const { entrada } = req.body;
  const result = descomposicion(entrada);
  res.json({ result });
});

module.exports = router;
