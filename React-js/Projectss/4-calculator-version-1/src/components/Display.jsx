import styles from './Display.module.css'

function display({value}){
    return <input className={styles.display} type="text" value={value} readOnly/>;
}

export default display;