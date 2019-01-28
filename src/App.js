import React from 'react';
import './App.css';
import Game from './components/gameScreen/gameScreen'

const App = ({store}) => (
  <div className="App">
    <Game store={store} />
  </div>
)

export default App;
