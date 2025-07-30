import styles from './WelcomeMsg.module.css'
function WelcomeMsg({todoItems}){
    return todoItems.length === 0 && <h2 className={styles.WelcomeMsg}>Enjoy Your Day, Keep Smiling :)</h2>
}

export default WelcomeMsg;