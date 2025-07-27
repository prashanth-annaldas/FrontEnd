function SearchBar({onNewItems}){

    return (<div className="container text-center">
              <div className="row n-row">
                <div className="col-6"><input type="text" placeholder="Enter Todo Here"/></div>
                <div className="col-4"><input type="date" /></div>
                <div className="col-1"><button type="button" className="btn btn-success n-button" onClick={()=>onNewItems("p","q")}>Add</button></div>
              </div>
            </div>);
}

export default SearchBar;