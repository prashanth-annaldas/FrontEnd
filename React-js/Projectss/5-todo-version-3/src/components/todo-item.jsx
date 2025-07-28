import { RiDeleteBin6Line } from "react-icons/ri";

function TodoItem({todoName,todoDate,todoDelete}) {

  return (
    <div className="container">
      <div className="row n-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-1">
          <button type="button" className="btn btn-danger n-button" onClick={()=>todoDelete(todoName)}>
            <RiDeleteBin6Line/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;