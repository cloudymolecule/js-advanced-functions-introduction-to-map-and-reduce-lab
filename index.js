// map-like methods

function mapToNegativize(array){
    let newArray = []
    array.forEach(element => {
        newArray.push(element - (element * 2))
    })
    return newArray
}

function mapToNoChange(array){
    let newArray = []
    array.forEach(element => {
        newArray.push(element)
    })
    return newArray
}

function mapToDouble(array){
    let newArray = []
    array.forEach(element => {
        newArray.push(element * 2)
    })
    return newArray
}

function mapToSquare(array){
    let newArray = []
    array.forEach(element => {
        newArray.push(Math.pow(element, 2))
    })
    return newArray
}


// reduce-like methods

function reduceToTotal(array, startingPoint){
    let total
    if (startingPoint) {total = startingPoint} else {total = 0}
    array.forEach(element => {
        total = total + element
    })
    return total
}

function reduceToAllTrue(array){
    let res = true
    array.forEach(element => {
        if (!element) {res = false}
    })
    return res
}

function reduceToAnyTrue(array){
    let res = false
    array.forEach(element => {
        if (!!element) {res = true}
    })
    return res
}

