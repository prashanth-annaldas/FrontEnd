import AppName from "./components/AppName";
import SearchBar from "./components/Search"
import TodoItem from "./components/todo-items"
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css"
import { useState } from "react";

function App() {

  const [todoItems,setTodoItems] = useState([]);


  function handleNewButton(itemName, itemDueDate){
    let newTodoItems = [...todoItems,{name: itemName,date: itemDueDate}]
    setTodoItems(newTodoItems);
  }

  function handleDeleteButton(todoItemName){
    let newTodoItem = todoItems.filter((item)=>item.name !== todoItemName);
    setTodoItems(newTodoItem);
  }

  return (<center className="todo-container">
            <AppName/>
              <SearchBar onNewItems={handleNewButton}/>
              {todoItems.length === 0 && <WelcomeMsg/>}
              <TodoItem todoItems={todoItems} onDeleteItems = {handleDeleteButton}/>
         </center>);
}

export default App;
