import object from "ES5/Extends/es5-prototypal-inheritance"

Array.matrix = function (numRows, numCols, initial) {
    const arr = []
    for (let i = 0; i < numRows; i++) {
        let columns = []
        for (let j = 0; j < numCols; j++) {
            columns[j] = initial
        }
        arr[i] = columns[j]
    }
    return arr
}

function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object)
}