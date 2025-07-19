function TodoItem({todoName,todoDate}) {

  return (
    <div class="container">
      <div class="row n-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger n-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;