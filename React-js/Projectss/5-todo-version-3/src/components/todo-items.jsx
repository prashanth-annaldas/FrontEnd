import TodoItem from "./todo-item"
import styles from "./todo-items.module.css";

function TodoItems({todoItems,onDeleteItems}){
    return <div className={styles.itemsContainer}>
                {todoItems.map((item) =>(
                    <TodoItem todoName={item.name} todoDate={item.date} todoDelete = {onDeleteItems}/>
                ))}
            </div>;
}

export default TodoItems;