// import
const C = require('./constants')

// actions
export const sortSquares = (array) => ({
    type: C.SORT_SQUARES,
    squares: array
})

export const showValue = (id) => ({
    type: C.SHOW_VALUE,
    id
})

export const finishGame = (...arg) => {
    if (arg.length !== 0) {
        return {
            type: C.FINISH_GAME,
            finish: false
        }
    } else {
        return {
            type: C.FINISH_GAME,
            finish: true
        }
    }
}