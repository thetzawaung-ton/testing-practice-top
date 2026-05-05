import { capitalizeString, reverseString } from "./functions.js";

test('Capitalize first character & reverse the string', () => {
    const testCases = [
        {input: "one", capitalize: "One", reverse: "eno"},
        {input: "two", capitalize: "Two", reverse: "owt"},
        {input: "three", capitalize: "Three", reverse: "eerht"},
        {input: "hello", capitalize: "Hello", reverse: "olleh"},
        {input: "world", capitalize: "World", reverse: "dlrow"},
    ]
    testCases.forEach(t => {
        expect(capitalizeString(t.input)).toMatch(t.capitalize);
        expect(reverseString(t.input)).toMatch(t.reverse);
    })
})