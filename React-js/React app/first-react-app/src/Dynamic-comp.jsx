function Dynamic(){
    let name = 'Prashanth';
    let fullName = () =>{
        return 'Prashanth Annaldas';
    }
    return <h2>My name is {name} <br></br> My full name is {fullName()}</h2>;
}

export default Dynamic;