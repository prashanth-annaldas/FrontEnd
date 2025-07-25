import styles from './ButtonsContainer.module.css'
import Button from './Button'
function ButtonsContainer({onButtonClicked}){
    return <div className={styles.buttonContainer}>
      <Button onButtonClicked = {onButtonClicked}></Button>
      </div>
}

export default ButtonsContainer;