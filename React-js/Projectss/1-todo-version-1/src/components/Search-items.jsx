function SearchBar(){
    return <div class="row">
                <div class="col-4"><input type="text" placeholder="Enter Todo Here"/></div>
                <div class="col-2"><input type="date" /></div>
                <div class="col-1"><button type="button" class="btn btn-success">Add</button></div>
              </div>;
}

export default SearchBar;