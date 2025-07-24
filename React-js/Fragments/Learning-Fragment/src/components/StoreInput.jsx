import styles from './StoreInput.module.css'

function StoreInput({handleOnKeyDown}){

    return <input className={styles.input} type="text" placeholder='Enter any Item' onKeyDown={handleOnKeyDown}/>
}

export default StoreInput;