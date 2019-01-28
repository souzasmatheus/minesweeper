// import
const C = require('./constants')
const {presetField, fillMinesArray} = require('../lib/minesweeperMaker')

// actions
const sortSquares = () => ({
    type: C.SORT_SQUARES,
    squares: presetField(fillMinesArray())
})

const showValue = (id) => ({
    type: C.SHOW_VALUE,
    id
})

const finishGame = () => ({
    type: C.FINISH_GAME,
    finish: true
})

module.exports = {sortSquares, showValue, finishGame}
