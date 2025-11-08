const express = require("express");
const router = express.Router();
const {
  findMax,
  includes,
  sum,
  findMin,
  missingNumbers,
} = require("../talleres/taller2");

// Endpoint para encontrar el máximo en una lista
router.post("/find-max", (req, res) => {
  const { lista } = req.body;
  const result = findMax(lista);
  res.json({ maximum: result });
});

// Endpoint para verificar si un número está en la lista
router.post("/includes", (req, res) => {
  const { lista, numCheck } = req.body;
  const result = includes(lista, numCheck);
  res.json({ included: result });
});

// Endpoint para sumar los elementos de una lista
router.post("/sum", (req, res) => {
  const { lista } = req.body;
  const result = sum(lista);
  res.json({ total: result });
});

// Endpoint para encontrar los numeros faltantes en una secuencia
router.post("/missing-numbers", (req, res) => {
  const { lista } = req.body;
  const result = missingNumbers(lista);
  res.json({ missing: result });
});

module.exports = router;
