import AppName from "./components/AppName";
import SearchBar from "./components/Search"
import TodoItem from "./components/todo-items"
import "./App.css"
import { useState } from "react";

function App() {
  const initializeTodoItems = [
    {
      name: "Shirts",
      date: "20/01/2025",
    },
    {
      name: "Pants",
      date: "20/01/2025",
    },
    {
      name: "Shorts",
      date: "20/01/2025",
    },
    {
      name: "Shorts",
      date: "20/01/2025",
    },
  ];

  const [todoItems,setTodoItems] = useState(initializeTodoItems);

  function handleButton(itemName, itemDueDate){
    console.log(`This is the ${itemName} and due date is ${itemDueDate}`);
  }

  return (<center className="todo-container">
            <AppName/>
              <SearchBar onNewItems={handleButton}/>
              <TodoItem todoItems={todoItems}/>
         </center>);
}

export default App;
