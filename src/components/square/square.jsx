import React from 'react'
import {showValue, finishGame} from '../../state/actionCreators'
import './square.css'

const Square = ({store, symbol, isClicked, id}) => {
    if (isClicked === false && symbol === 'mine') {
        return <td onClick={() => {
            store.dispatch(showValue(id))
            setTimeout(() => store.dispatch(finishGame()), 700)
        }}></td>
    } else if (isClicked === true && symbol === 'mine') {
        return <td><i className="fas fa-bomb"></i></td>
    } else if (isClicked === true) {
        return <td>{symbol}</td>
    } else {
        return <td onClick={() => store.dispatch(
            showValue(id)
        )}></td>
    }
}

export default Square