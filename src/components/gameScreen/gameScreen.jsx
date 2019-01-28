import React from 'react'
import {sortSquares} from '../../state/actionCreators'
import presetField from '../../lib/minesweeperMaker'
import fillMinesArray from '../../lib/minesSorter'

const Game = ({store}) => {
    const {squares} = store.getState()
    return (
        <table onClick={() => store.dispatch(
            sortSquares(presetField(fillMinesArray()))
        )}>
            <tbody>
                <tr>
                {squares.map(square =>
                    <td key={square.id}>{square.symbol}</td>)
                }
                </tr>
            </tbody>
        </table> 
    )
}

export default Game