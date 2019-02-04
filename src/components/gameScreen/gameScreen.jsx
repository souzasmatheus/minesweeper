import React from 'react'
//import {sortSquares} from '../../state/actionCreators'
//import presetField from '../../lib/minesweeperMaker'
//import fillMinesArray from '../../lib/minesSorter'

// components
import Square from '../square/square'
import Restart from '../restart/restart'

const Game = ({store}) => {
    const {squares} = store.getState()
    return (
        <div>
            <Restart store={store}/>
            <table /*onClick={() => store.dispatch(
                sortSquares(presetField(fillMinesArray()))
            )}*/>
                <tbody>
                    <tr>
                    {squares.map(square => {
                        if (square.id < 9) {
                            return <Square 
                            key={square.id} 
                            id={square.id}
                            symbol={square.symbol} 
                            store={store}
                            isClicked={square.isClicked}/>
                        } else {return null}
                    })}
                    </tr>
                    <tr>
                    {squares.map(square => {
                        if (square.id > 8 && square.id < 18) {
                            return <Square 
                            key={square.id}
                            id={square.id} 
                            symbol={square.symbol} 
                            store={store}
                            isClicked={square.isClicked}/>
                        } else {return null}
                    })}
                    </tr>
                    <tr>
                    {squares.map(square => {
                        if (square.id > 17 && square.id < 27) {
                            return <Square 
                            key={square.id} 
                            id={square.id}
                            symbol={square.symbol} 
                            store={store}
                            isClicked={square.isClicked}/>
                        } else {return null}
                    })}
                    </tr>
                    <tr>
                    {squares.map(square => {
                        if (square.id > 26 && square.id < 36) {
                            return <Square 
                            key={square.id}
                            id={square.id} 
                            symbol={square.symbol} 
                            store={store}
                            isClicked={square.isClicked}/>
                        } else {return null}
                    })}
                    </tr>
                    <tr>
                    {squares.map(square => {
                        if (square.id > 35 && square.id < 45) {
                            return <Square 
                            key={square.id} 
                            id={square.id}
                            symbol={square.symbol} 
                            store={store}
                            isClicked={square.isClicked}/>
                        } else {return null}
                    })}
                    </tr>
                    <tr>
                    {squares.map(square => {
                        if (square.id > 44 && square.id < 54) {
                            return <Square 
                            key={square.id} 
                            id={square.id}
                            symbol={square.symbol} 
                            store={store}
                            isClicked={square.isClicked}/>
                        } else {return null}
                    })}
                    </tr>
                    <tr>
                    {squares.map(square => {
                        if (square.id > 53 && square.id < 63) {
                            return <Square 
                            key={square.id} 
                            id={square.id}
                            symbol={square.symbol} 
                            store={store}
                            isClicked={square.isClicked}/>
                        } else {return null}
                    })}
                    </tr>
                    <tr>
                    {squares.map(square => {
                        if (square.id > 62 && square.id < 72) {
                            return <Square 
                            key={square.id} 
                            id={square.id}
                            symbol={square.symbol} 
                            store={store}
                            isClicked={square.isClicked}/>
                        } else {return null}
                    })}
                    </tr>
                    <tr>
                    {squares.map(square => {
                        if (square.id > 71 && square.id < 81) {
                            return <Square 
                            key={square.id} 
                            id={square.id}
                            symbol={square.symbol} 
                            store={store}
                            isClicked={square.isClicked}/>
                        } else {return null}
                    })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Game