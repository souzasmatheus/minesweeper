import React from 'react'
import {sortSquares, finishGame} from '../../state/actionCreators'
import presetField from '../../lib/minesweeperMaker'
import fillMinesArray from '../../lib/minesSorter'
import './restart.css'

const Restart = ({store}) => (
    <p onClick={() => {
        store.dispatch(
            sortSquares(presetField(fillMinesArray()))
        )
        store.dispatch(
            finishGame(1)
        )
    }}><i className="fas fa-undo"></i></p>
)

export default Restart