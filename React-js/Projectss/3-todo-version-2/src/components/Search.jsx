function SearchBar(){
    return (<div className="container text-center">
              <div className="row">
                <div className="col-4"><input type="text" placeholder="Enter Todo Here"/></div>
                <div className="col-2"><input type="date" className="date-Bar" /></div>
                <div className="col-1"><button type="button" className="btn btn-success">Add</button></div>
              </div>
            </div>);
}

export default SearchBar;