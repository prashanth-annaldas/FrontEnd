import Display from './components/Display'
import React, { useState } from 'react';
import ButtonsContainer from './components/ButtonsContainer'
import './App.css'
import styles from './App.module.css'

function App() {
  const [currentDisplay,setCurrentDisplay] = useState('');
  
  function displayupdate(value){
      setCurrentDisplay(currentDisplay + value);
  }

  function cleardisplay(){
      setCurrentDisplay('');
  }

  function Evaluatedisplay(){
      try{
        setCurrentDisplay(eval(currentDisplay).toString());
      }
      catch{
        setCurrentDisplay("Invalid Input");
      }
  };

  return <div className={styles.calculator}>
    <Display value = {currentDisplay}></Display>
    <ButtonsContainer onInput = {displayupdate} onClear = {cleardisplay} onEvaluate = {Evaluatedisplay}></ButtonsContainer>
  </div>
}

export default App;
