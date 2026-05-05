export const capitalizeString = (str) => {
    return str.split("").map((str, index) => index === 0 ? str.toUpperCase() : str).join("");
}

export const reverseString = (str) => {
    return str.split("").reverse().join("");
}