import styles from './ButtonsContainer.module.css'
import Button from './Button'
function ButtonsContainer({onInput,onClear,onEvaluate}){
    return <div className={styles.buttonContainer}>
      <Button onInput = {onInput} onClear = {onClear} onEvaluate = {onEvaluate}></Button>
      </div>
}

export default ButtonsContainer;