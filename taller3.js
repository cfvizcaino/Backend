// PUNTO #1 -----------------------------
function desglosarString(texto, tipo) {
    const vocales = "aeiouAEIOU";
    let contador = 0;
    
    for (let char of texto) {
        if (tipo === 'vocales' && vocales.includes(char)) {
            contador++;
        } else if (tipo === 'consonantes' && !vocales.includes(char)){
            contador++;
        }

    }
    return contador;
}

console.log(desglosarString("murcielagos", "vocales"));
console.log(desglosarString("murcielagos", "consonantes"));

//PUNTO #2 -----------------------------
function twoSum(lista, numero){
    const mapa = {};

    for (let i = 0; i < lista.length; i++){
        const complemento = numero - lista[i];

        if(mapa.hasOwnProperty(complemento)){
            return [mapa[complemento], i];
        }

        mapa[lista[i]] = i;
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9 ));
console.log(twoSum([3, 4, 2], 6 ));

// PUNTO #3 -----------------------------
function conversionRomana(numRomano){
    const valores = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;

    for(let i = 0; i < numRomano.length; i++){
        const actual = valores[numRomano[i]];
        const siguiente = valores[numRomano[i + 1]];

        if (siguiente && actual < siguiente){
            total -= actual;
        } else {
            total += actual;
        }
    }

    return total;
}

console.log(conversionRomana("III"));
console.log(conversionRomana("XIV"));
console.log(conversionRomana("MMXXIV"));
console.log(conversionRomana("MCMXCVII"));

// PUNTO #4 -----------------------------

function descomposicion(entrada){
    const partes = entrada.split(",");
    const palabra = partes[0];
    const diccionario = partes.slice(1);

    for (let i = 0; i < diccionario.length; i++){
        for (let j = 0; j < diccionario.length; j++){
            if (i !== j){
                if (diccionario[i] + diccionario[j] === palabra){
                    return [diccionario[i], diccionario[j]];   
                }
            }
        }
    }
    return [];    
}

console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"));
console.log(descomposicion("chogath,th,cho,og,gath,ch"));