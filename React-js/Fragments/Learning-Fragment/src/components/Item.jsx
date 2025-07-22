const Item = ({clothItems, handleButtonClicked})=>{
    
    return <li className="list-group-item">
        <span className="item">{clothItems}</span>
        <button className="Button  btn btn-info" onClick={handleButtonClicked}>Buy</button>
    </li>
}

export default Item;