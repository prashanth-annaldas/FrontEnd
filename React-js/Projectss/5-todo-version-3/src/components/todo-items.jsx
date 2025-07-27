import TodoItem from "./todo-item"
import styles from "./todo-items.module.css";

function TodoItems({todoItems}){
    return <div className={styles.itemsContainer}>
                {todoItems.map((item) =>(
                    <TodoItem todoName={item.name} todoDate={item.date}/>
                ))}
            </div>;
}

export default TodoItems;