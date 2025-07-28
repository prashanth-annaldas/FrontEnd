import { useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";

function SearchBar({onNewItems}){
  const [todoName,setTodoName] = useState();
  const [todoDate,setTodoDate] = useState();

  function handleNameChange(event){
    setTodoName(event.target.value);
  }
  
  function handleDateChange(event){
    setTodoDate(event.target.value);
  }

  function handleButtonClicked(){
    onNewItems(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  }

  return (<div className="container text-center">
            <div className="row n-row">
              <div className="col-6"><input type="text" value={todoName} placeholder="Enter Todo Here" onChange={handleNameChange}/></div>
              <div className="col-4"><input type="date" value={todoDate} onChange={handleDateChange}/></div>
              <div className="col-1"><button type="button" className="btn btn-success n-button" onClick={handleButtonClicked}><RiAddLargeFill  /></button></div>
            </div>
          </div>);
}

export default SearchBar;