// import
const fillMinesArray = require('./minesSorter')

// variables
let squares = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81]

// helping functions
const injectArray = (priorityArray, secondaryArray, substitute) => {
    priorityArray.map((item) => (
        secondaryArray.splice(item - 1, 1, substitute)
    ))

    return secondaryArray
}

// specific functions
const checkDistance = (index, array) => {
    let nearbyBombsCount = 0
    const distances = [-10, -9, -8, -1, 1, 8, 9, 10]
    for (let i = 0; i < distances.length; i++) {
        if (array[index + distances[i]] === 'mine') {
            nearbyBombsCount ++
        }
    }

    return nearbyBombsCount

}

const makeField = (array) => {
    const stateArray = array.map((item, i) => {
        if (item !== 'mine') {
            let symbol = checkDistance(i, array)
            return {
                symbol,
                id: i,
                isClicked: false
            }
        } else {
            return {
                symbol: 'mine',
                id: i,
                isClicked: false
            }
        }
    })

    return stateArray
}

const presetField = (arg) => {
    return makeField(injectArray(arg, squares, 'mine'))
}

module.exports = {presetField, fillMinesArray}
