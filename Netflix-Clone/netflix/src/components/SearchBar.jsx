import { useState } from "react";

function SearchBar({ onSearch }){
    const [query, setQuery] = useState("");

    const handleSubmit = (e)=>{
        e.preventDafault();
        if(query.trim()) onSearch(query);
    }

    return <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="Enter movie name.." value={ query } onChange={(e)=>setQuery(e.target.value)} />
        <button type="Submit">Submit</button>
    </form>
}

export default SearchBar;