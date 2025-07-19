import TodoItem from "./todo-item"

function TodoItems({todoItems}){
    return <div className="itemsContainer">
                {todoItems.map((item) =>(
                    <TodoItem todoName={item.name} todoDate={item.date}/>
                ))}
            </div>;
}

export default TodoItems;