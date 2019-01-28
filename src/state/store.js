// import
const reducers = require('./reducers')
const {squares, finish} = reducers
const redux = require('redux')
const {createStore, combineReducers, applyMiddleware} = redux

const presetField = require('../lib/minesweeperMaker')
const fillMinesArray = require('../lib/minesSorter')

// variables
const stateData = {
    "finish": false,
    "squares": presetField(fillMinesArray())
} 

// store
const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger)(createStore)(combineReducers({squares, finish}), stateData)

module.exports = storeFactory
