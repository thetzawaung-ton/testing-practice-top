import { capitalizeString, reverseString, calculator, caesarCipher, analyzeArray } from "./functions.js";

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

test('Caesar cipher', () => {
    const testCases = [
        {text: "abcd", shift: 3, expectedResult: "defg"},
        {text: "xyz", shift: 2, expectedResult: "zab"},
        {text: "Abcd e", shift: 1, expectedResult: "Bcde f"},
        {text: "CD e", shift: 2, expectedResult: "EF g"},
        {text: "abC", shift: -3, expectedResult: "xyZ"},
        {text: "abc", shift: 53, expectedResult: "bcd"}
    ]

    testCases.forEach(t => {
        expect(caesarCipher(t.text, t.shift)).toMatch(t.expectedResult);
    })
})

test('Analyze Array', () => {
    const testCases = [
        {
            array: [1, 2, 3, 4, 5],
            object: {
                average: 3,
                min: 1,
                max: 5,
                length: 5,
            }
        },
        {
            array: [1, 8, 3, 4, 2, 6],
            object: {
                average: 4,
                min: 1,
                max: 8,
                length: 6,
            }
        },
        {
            array: [-2, 0, 2, 4, 6, -6, -4],
            object: {
                average: 0,
                min: -6,
                max: 6,
                length: 7,
            }
        },
   ]

    testCases.forEach(t => {
        expect(analyzeArray(t.array)).toEqual(t.object);
    })
})

