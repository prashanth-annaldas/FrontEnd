import styles from './Button.module.css'

function Button(){
    const items = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return <>
        {items.map((item)=>(
            <button className={styles.button}>{item}</button>
        ))}
    </>
}

export default Button;