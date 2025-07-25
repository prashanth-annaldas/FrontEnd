import styles from './Button.module.css'

function Button({onButtonClicked}){
    const items = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return <>
        {items.map((item,index)=>(
            <button key={item + index}className={styles.button} onClick={()=>onButtonClicked(item)}>{item}</button>
        ))}
    </>
}

export default Button;