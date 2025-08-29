function convertidorTemp(tempCel) {
  const tempFar = tempCel * (9 / 5) + 32
  return tempFar
}

console.log(convertidorTemp(30))

function resolvedor(a, b, c, signo) {
  if (a == 0) {
    return console.log("El parametro a no puede ser 0")
  }

  const deter = b * b - 4 * a * c

  if (deter < 0) {
    return console.log("No tiene soluciones reales")
  }

  let x
  if (signo) {
    x = ((-b + Math.sqrt(deter)) / 2) * a
  } else {
    x = ((-b - Math.sqrt(deter)) / 2) * a
  }

  return x
}

console.log(resolvedor(1, 5, 4, false))

function mejorParidad(numero) {
  return numero % 2 == 0
}

console.log(mejorParidad(5))

function peorParidad(numero) {
  const listaPar = "2,4,6,8,10"

  const numeroAtexto = String(numero)

  if (listaPar.includes(numeroAtexto)) {
    return true
  } else if (numero >= 1 && numero <= 10) {
    return false
  } else {
    return console.log("Funciona solo del 1 al 10")
  }
}

console.log(peorParidad(11))
