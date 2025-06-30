function capitalize(s){
    return String(s[0]).toUpperCase() + String(s).slice(1);
}

function getComputerChoice(){
    let a = getRandom(-1,1);
    if (a > 0){
        return "Rock";
    }
    else if (a < 0){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
function getHumanChoice(){
    let a = prompt("Rock, Paper or Scissors? ");
    a = a.toLowerCase();
    a = capitalize(a);
    return a;
}

function playGame(){
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice,computerChoice){
        if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore+=1;
        }
        else if ((computerChoice === "Rock" && humanChoice === "Scissors") || (computerChoice === "Paper" && humanChoice === "Rock") || (computerChoice === "Scissors" && humanChoice === "Paper")){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore+=1;
        }
        else{
            console.log("It's a tie!")
        }
    }

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice(), humanChoice = getHumanChoice();
        playRound(humanChoice,computerChoice);
    }
    if (humanScore > computerScore){
        console.log("You win the game!");
    }
    else if (humanScore < computerScore){
        console.log("You lose the game!");
    }
    else{
        console.log("It's a tie!");
    }
}
playGame();