// variables

// helping functions
const getRandomNumbers = (max) => {
    const num = Math.floor(Math.random() * max) + 1
    
    return num
}

const checkUniqueness = (value, array) => {
    let equalValuesArray = []
    
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            equalValuesArray.push(array[i])
        }
    }

    if (equalValuesArray.length !== 0) {
        return false
    } else {
        return true
    }
}

const pushToArray = (value, array) => {
    array.push(value)
}

const toPushOrNotToPush = (value, array, condition, func) => {
    if (condition(value, array)) {
        func(value, array)
    }
}

// specific functions
const fillMinesArray = () => {
    let mines = []

    while (mines.length < 10) {
        let randomValue = getRandomNumbers(81)
        toPushOrNotToPush(randomValue, mines, checkUniqueness, pushToArray)
    }

    return mines
}

module.exports =  fillMinesArray