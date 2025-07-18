const errMsg = ({items}) =>{
    return  (<> {items.length === 0 && <h4>Out of Stack</h4>}</>);
}

export default errMsg;