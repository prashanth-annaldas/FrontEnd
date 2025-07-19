import AppName from "./components/AppName";
import SearchBar from "./components/Search"
import TodoItem from "./components/todo-items"
import "./App.css"

function App() {
  const todoItems = [
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

  return (<center className="todo-container">
            <AppName/>
              <SearchBar/>
              <TodoItem todoItems={todoItems}/>
         </center>);
}

export default App;
