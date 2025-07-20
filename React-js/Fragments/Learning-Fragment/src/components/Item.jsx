const Item = ({clothItems})=>{
    const handleButtonClicked = (clothItems)=>{
        console.log(`${clothItems} being bought`)
    }
    return <li className="list-group-item">
        <span className="item">{clothItems}</span>
        <button className="Button  btn btn-info" onClick={()=>handleButtonClicked(clothItems)}>Buy</button>
    </li>
}

export default Item;