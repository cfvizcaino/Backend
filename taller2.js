let lista = [3, 17, -1, 4, -19]

//PUNTO #1 --------------------------

function findMax(listaNum){
    let maximun = listaNum[0];

    for(const num of listaNum){
        if(num > maximun){
            maximun = num;
        }
    }
    return maximun;
}

console.log(findMax(lista))


//PUNTO #2 --------------------------

function includes(listaNum, numCheck){
    
    for(const num of listaNum){
        if(num == numCheck){
            return true;
        }
    }
    return false;
}

console.log(includes(lista, 2))
console.log(includes(lista, 4))


//PUNTO #3 --------------------------

function sum(listaNum){
    let totalSuma = 0;

    for(const num of listaNum){
        totalSuma += num
    }

    return totalSuma;
}

console.log(sum(lista))


/*
Para poder hacer el punto #4 "missingNumbers", añadí la función findMin()
*/

//PUNTO #4 --------------------------

let lista2 = [7, 2, 4, 6, 3, 9] 

function findMin(listaNum){
    let minimum = listaNum[0];

    for(const num of listaNum){
        if(num < minimum){
            minimum = num;
        }
    }
    return minimum;
}

function missingNumbers(listaNum){
    if (listaNum.length === 0) return [];

    let maximum = findMax(listaNum);
    let minimum = findMin(listaNum);

    let missing = [];

    for(let i = minimum; i <= maximum; i++){
        if(!includes(listaNum, i)){
            missing.push(i);
        }
    }

    return missing;
}

console.log(missingNumbers(lista2));