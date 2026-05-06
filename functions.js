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