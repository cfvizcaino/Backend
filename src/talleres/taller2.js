function findMax(listaNum) {
    let maximun = listaNum[0];

    for (const num of listaNum) {
        if (num > maximun) {
            maximun = num;
        }
    }
    return maximun;
}

function includes(listaNum, numCheck) {
    for (const num of listaNum) {
        if (num == numCheck) {
            return true;
        }
    }
    return false;
}

function sum(listaNum) {
    let totalSuma = 0;

    for (const num of listaNum) {
        totalSuma += num;
    }

    return totalSuma;
}

function findMin(listaNum) {
    let minimum = listaNum[0];

    for (const num of listaNum) {
        if (num < minimum) {
            minimum = num;
        }
    }
    return minimum;
}

function missingNumbers(listaNum) {
    if (listaNum.length === 0) return [];

    let maximum = findMax(listaNum);
    let minimum = findMin(listaNum);

    let missing = [];

    for (let i = minimum; i <= maximum; i++) {
        if (!includes(listaNum, i)) {
            missing.push(i);
        }
    }

    return missing;
}

module.exports = {
    findMax,
    includes,
    sum,
    findMin,
    missingNumbers
};