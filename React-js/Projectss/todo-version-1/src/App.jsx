import AppName from "./components/AppName";
import SearchBar from "./components/Search-items"
import EnteredItems from "./components/Entered-items"
import "./App.css"

function App() {
  return (<center class="todo-container">
            <AppName/>
            <div class="container text-center">
              <SearchBar/>
              <div class="itemsContainer">
                <EnteredItems/>
              </div>
            </div>
         </center>);
}

export default App;
