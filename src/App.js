import React from 'react'
import Tile from './components/Tile'

import './css/App.css';
import './css/style.css';

function App() {

  return(
    <div className='container'>
      <Tile location="Ashford" />
      <Tile location="Folkestone" />
      <Tile location="London" />
    </div>
  )

}

export default App