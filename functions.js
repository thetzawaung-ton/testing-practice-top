export const capitalizeString = (str) => {
    return str.split("").map((str, index) => index === 0 ? str.toUpperCase() : str).join("");
}

export const reverseString = (str) => {
    return str.split("").reverse().join("");
}

class Calculator {
    add(a, b) {
        return a + b;
    }
    substract(a, b) {
        return a -b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}

export const calculator = new Calculator;

export const caesarCipher = (text, shift) => {
    const caesarArray = [];
    const smallAlphabets = "abcdefghijklmnopqrstuvwxyz".split('');
    const capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const textArray = text.split('');
    let caesarText;
    textArray.forEach(str => {
        function changeToCaesar(index) {
            caesarText = index + shift;
            if(caesarText >= 26) {
                caesarText = caesarText - 26;
            } else if (caesarText < 0) {
                caesarText = caesarText + 26;
            }
            return caesarText;
        }
        if(smallAlphabets.includes(str)) {
            const smallIndex = smallAlphabets.indexOf(str);
            changeToCaesar(smallIndex);
            caesarArray.push(smallAlphabets[caesarText]);
        } else if(capitalAlphabets.includes(str)) {
            const capitalIndex = capitalAlphabets.indexOf(str);
            changeToCaesar(capitalIndex);
            caesarArray.push(capitalAlphabets[caesarText]);
        } else {
            caesarArray.push(str);
        }
    })
    return caesarArray.join("");
}

export const analyzeArray = (array) => {
    const average = (array) => array.reduce((prev, cur) => prev + cur, 0) / array.length;

    const min = (array) => array.reduce((prev, cur) => cur < prev ? cur : prev, array[0]);

    const max = (array) => array.reduce((prev, cur) => cur > prev ? cur : prev, array[0]);

    return {average: average(array), min: min(array), max: max(array), length: array.length};
}