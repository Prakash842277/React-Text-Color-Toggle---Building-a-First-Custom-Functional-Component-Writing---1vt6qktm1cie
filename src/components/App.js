import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  return (
    <div id="main">
      <p className={redColor} >Newton School</p>
      <button id='button' onClick={blueColor}>Change Style</button>
    </div>
  )
}


export default App;
