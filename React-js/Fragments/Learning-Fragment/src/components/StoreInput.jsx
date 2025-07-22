import styles from './StoreInput.module.css'

function StoreInput({handleOnChange}){

    return <input className={styles.input} type="text" placeholder='Enter any Item' onChange={handleOnChange}/>
}

export default StoreInput;