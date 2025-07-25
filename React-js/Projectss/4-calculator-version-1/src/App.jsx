import Display from './components/Display'
import React, { useState } from 'react';
import ButtonsContainer from './components/ButtonsContainer'
import styles from './App.module.css'

function App() {
  const [currentDisplay,setCurrentDisplay] = useState('');
  
  function onButtonClicked(value){
    if(value === 'C'){
      setCurrentDisplay('');
    }
    else if(value === '='){
      let total = eval(currentDisplay);
      setCurrentDisplay(total);
    }
    else{
      let updatedValue = currentDisplay + value;
      setCurrentDisplay(updatedValue);
    }
  }

  return <><h1>Calculator</h1>
            <div className={styles.calculator}>
              <Display value = {currentDisplay}></Display>
              <ButtonsContainer onButtonClicked = {onButtonClicked}></ButtonsContainer>
            </div>
          </>
}

export default App;
