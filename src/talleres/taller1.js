function convertidorTemp(tempCel) {
  const tempFar = tempCel * (9 / 5) + 32;
  return tempFar;
}

function resolvedor(a, b, c, signo) {
  if (a == 0) {
    throw new Error("El parametro a no puede ser 0");
  }

  const deter = b * b - 4 * a * c;

  if (deter < 0) {
    throw new Error("No tiene soluciones reales");
  }

  let x;
  if (signo) {
    x = ((-b + Math.sqrt(deter)) / (2 * a));
  } else {
    x = ((-b - Math.sqrt(deter)) / (2 * a));
  }

  return x;
}

function mejorParidad(numero) {
  return numero % 2 === 0;
}

function peorParidad(numero) {
  const listaPar = "2,4,6,8,10";
  const numeroAtexto = String(numero);

  if (listaPar.includes(numeroAtexto)) {
    return true;
  } else if (numero >= 1 && numero <= 10) {
    return false;
  } else {
    throw new Error("Funciona solo del 1 al 10");
  }
}

module.exports = {
  convertidorTemp,
  resolvedor,
  mejorParidad,
  peorParidad
};