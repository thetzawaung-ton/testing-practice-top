import { capitalizeString, reverseString, calculator } from "./functions.js";

test('Capitalize first character & reverse the string', () => {
    const testCases = [
        {input: "one", capitalizedStr: "One", reversedStr: "eno"},
        {input: "two", capitalizedStr: "Two", reversedStr: "owt"},
        {input: "three", capitalizedStr: "Three", reversedStr: "eerht"},
        {input: "hello", capitalizedStr: "Hello", reversedStr: "olleh"},
        {input: "world", capitalizedStr: "World", reversedStr: "dlrow"},
    ]
    testCases.forEach(t => {
        expect(capitalizeString(t.input)).toMatch(t.capitalizedStr);
        expect(reverseString(t.input)).toMatch(t.reversedStr);
    })
})

test('Calculator object', () => {
    const testCases = [
        {firstNum: 3, secondNum: 2,  addResult: 5, substractResult: 1, multiplyResult: 6, divideResult: 1.5},
        {firstNum: 5.5, secondNum: 1.5,  addResult: 7, substractResult: 4, multiplyResult: 8.25, divideResult: 3.667},
        {firstNum: 8, secondNum: 2.4,  addResult: 10.4, substractResult: 5.6, multiplyResult: 19.2, divideResult: 3.333}
    ]
    testCases.forEach(t => {
        expect(calculator.add(t.firstNum, t.secondNum)).toBeCloseTo(t.addResult);
        expect(calculator.substract(t.firstNum, t.secondNum)).toBeCloseTo(t.substractResult);
        expect(calculator.multiply(t.firstNum, t.secondNum)).toBeCloseTo(t.multiplyResult);
        expect(calculator.divide(t.firstNum, t.secondNum)).toBeCloseTo(t.divideResult);
    })
})