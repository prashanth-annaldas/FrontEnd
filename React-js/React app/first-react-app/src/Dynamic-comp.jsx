function Dynamic(){
    let name = 'Master Coding';
    let subscribers = () =>{
        let sub = Math.random()*100000;
        return Math.round(sub);
    }
    return <p style={{'background-color':'#5CB3FF'}}>channel name is {name} <br></br> No of subscribers : {subscribers()}</p>;
}

export default Dynamic;