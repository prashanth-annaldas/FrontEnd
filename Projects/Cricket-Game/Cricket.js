let scorestr = localStorage.getItem('score');
let score;
scoreRestore(scorestr);
function scoreRestore(scorestr) {
    score = scorestr ? JSON.parse(scorestr) : {win:0,tie:0,lost:0,};
    score.scoredisplay = function (){
        return `SCORE : WON: ${score.win}, TIE: ${score.tie}, LOST: ${score.lost}`;
    };
    showResult();
}
function getResult(userChoice){
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
        score.tie++;
        result=`IT'S A TIE`;
    }
    else if((userChoice==='Bat'&&computerChoice==='Ball')||(userChoice==='Ball'&&computerChoice==='Stump')||(userChoice==='Stump'&&computerChoice==='Bat')){
        score.win++;
        result=`YOU WON`;
    }
    else{
        score.lost++;
        result=`YOU LOST`;
    }
    showResult(userChoice,computerChoice,result);
}
function showResult(userChoice,computerChoice,result) {
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('#userChoice').innerHTML=userChoice!== undefined ? `You have Choosen ${userChoice}.`:'';
    document.querySelector('#computerChoice').innerHTML=computerChoice!== undefined ? `Computer Chooses ${computerChoice}.`:'';
    const resultElement = document.querySelector('#result');
    if (result !== undefined) {
        resultElement.innerHTML = result;
        if (result === "YOU WON") {
            resultElement.style.color = "green";
        } else if (result === "YOU LOST") {
            resultElement.style.color = "red";
        } else if (result === "IT'S A TIE") {
            resultElement.style.color = "gold";
        }
    } else {
        resultElement.innerHTML = '';
        resultElement.style.color = ''; 
    }
    document.querySelector('#score-id').innerHTML= score.scoredisplay();
}