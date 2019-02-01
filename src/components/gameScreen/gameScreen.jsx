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
                {squares.map(square => {
                    if (square.id < 9) {
                        return <td key={square.id}>{square.symbol}</td>
                    } else {return ''}
                })}
                </tr>
                <tr>
                {squares.map(square => {
                    if (square.id > 8 && square.id < 18) {
                        return <td key={square.id}>{square.symbol}</td>
                    } else {return ''}
                })}
                </tr>
                <tr>
                {squares.map(square => {
                    if (square.id > 17 && square.id < 27) {
                        return <td key={square.id}>{square.symbol}</td>
                    } else {return ''}
                })}
                </tr>
                <tr>
                {squares.map(square => {
                    if (square.id > 26 && square.id < 36) {
                        return <td key={square.id}>{square.symbol}</td>
                    } else {return ''}
                })}
                </tr>
                <tr>
                {squares.map(square => {
                    if (square.id > 35 && square.id < 45) {
                        return <td key={square.id}>{square.symbol}</td>
                    } else {return ''}
                })}
                </tr>
                <tr>
                {squares.map(square => {
                    if (square.id > 44 && square.id < 54) {
                        return <td key={square.id}>{square.symbol}</td>
                    } else {return ''}
                })}
                </tr>
                <tr>
                {squares.map(square => {
                    if (square.id > 53 && square.id < 63) {
                        return <td key={square.id}>{square.symbol}</td>
                    } else {return ''}
                })}
                </tr>
                <tr>
                {squares.map(square => {
                    if (square.id > 62 && square.id < 72) {
                        return <td key={square.id}>{square.symbol}</td>
                    } else {return ''}
                })}
                </tr>
                <tr>
                {squares.map(square => {
                    if (square.id > 71 && square.id < 81) {
                        return <td key={square.id}>{square.symbol}</td>
                    } else {return ''}
                })}
                </tr>
            </tbody>
        </table> 
    )
}

export default Game