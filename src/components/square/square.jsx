import React from 'react'
import {showValue, finishGame} from '../../state/actionCreators'

const Square = ({store, symbol, isClicked, id}) => {
    if (isClicked === false && symbol === 'mine') {
        return <td onClick={() => {
            store.dispatch(finishGame())
            store.dispatch(showValue(id))
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