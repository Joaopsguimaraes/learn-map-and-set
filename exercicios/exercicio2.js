const myArray = [30,30,40,5,223,2049, 3034, 5]

function valoresUnicos(myArray) {
    const mySet = new Set(myArray);
    return [...mySet]
}
console.log(valoresUnicos(myArray))