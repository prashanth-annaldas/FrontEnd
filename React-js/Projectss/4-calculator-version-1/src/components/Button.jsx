import styles from './Button.module.css'

function Button({onInput,onClear,onEvaluate}){

    return <>
            <button className={styles.button} onClick={()=>onClear()}>C</button>
            <button className={styles.button} onClick={()=>onInput('1')}>1</button>
            <button className={styles.button} onClick={()=>onInput('2')}>2</button>
            <button className={styles.button} onClick={()=>onInput('+')}>+</button>
            <button className={styles.button} onClick={()=>onInput('3')}>3</button>
            <button className={styles.button} onClick={()=>onInput('4')}>4</button>
            <button className={styles.button} onClick={()=>onInput('-')}>-</button>
            <button className={styles.button} onClick={()=>onInput('5')}>5</button>
            <button className={styles.button} onClick={()=>onInput('6')}>6</button>
            <button className={styles.button} onClick={()=>onInput('*')}>*</button>
            <button className={styles.button} onClick={()=>onInput('7')}v>7</button>
            <button className={styles.button} onClick={()=>onInput('8')}>8</button>
            <button className={styles.button} onClick={()=>onInput('/')}>/</button>
            <button className={styles.button} onClick={()=>onEvaluate()}>=</button>
            <button className={styles.button} onClick={()=>onInput('9')}>9</button>
            <button className={styles.button} onClick={()=>onInput('0')}>0</button>
            <button className={styles.button} onClick={()=>onInput('.')}>.</button>
    </>
}

export default Button;