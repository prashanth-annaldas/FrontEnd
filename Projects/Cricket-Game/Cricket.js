function matchResult(userChoice){
    let randomNumber = Math.random()*3;
    let computerChoice;
    if(randomNumber>0&&randomNumber<=1){
        computerChoice='Bat';
    }
    else if(randomNumber>1&&randomNumber<=2){
        computerChoice='Ball';
    }
    else{
        computerChoice='Stump';
    }
    let result;
    if(computerChoice===userChoice){
        result=`IT'S A TIE`;
    }
    else if((userChoice==='Bat'&&computerChoice==='Ball')||(userChoice==='Ball'&&computerChoice==='Stump')||(userChoice==='Stump'&&computerChoice==='Bat')){
        result=`USER WON`;
    }
    else{
        result=`COMPUTER WON`;
    }
    alert(`You have Choosen ${userChoice}. Computer Chooses ${computerChoice} \n \n ${result}`);
}