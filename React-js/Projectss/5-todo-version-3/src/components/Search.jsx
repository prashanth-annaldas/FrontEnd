import { useRef } from "react";
import { RiAddLargeFill } from "react-icons/ri";

function SearchBar({onNewItems}){
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  function handleButtonClicked(event){
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItems(todoName,todoDate);
  };

  return (<div className="container text-center">
            <form className="row n-row" onSubmit={handleButtonClicked}>
              <div className="col-6"><input type="text" ref = {todoNameElement} placeholder="Enter Todo Here" /></div>
              <div className="col-4"><input type="date" ref = {todoDateElement} /></div>
              <div className="col-1"><button type="submit" className="btn btn-success n-button"><RiAddLargeFill  /></button></div>
            </form>
          </div>);
}

export default SearchBar;