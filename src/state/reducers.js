const C = require('./constants')

const square = (state={}, action) => {
    switch (action.type) {
        case C.SHOW_VALUE:
            return (state.id !== action.id) ? 
                state :
                {
                    ...state,
                    isClicked: true
                }
        default:
            return state
    }
}

const squares = (state=[], action) => {
    switch (action.type) {
        case C.SORT_SQUARES:
            return action.squares
        case C.SHOW_VALUE:
            return state.map(
                m => square(m, action)
            )
        default:
            return state
    }
}

const finish = (state=false, action) => {
    switch (action.type) {
        case C.FINISH_GAME:
            return action.finish
        default:
            return state
    }
}

module.exports = {square, squares, finish}
