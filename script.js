let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
    return CHOICES[Math.floor(Math.random()*CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "It's a draw!";
    } else if(playerSelection == "ROCK" && computerSelection == "SCISSORS" 
              || playerSelection == "SCISSORS" && computerSelection == "PAPER"
              || playerSelection == "PAPER" && computerSelection == "ROCK") {
                playerScore++;
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            } else computerScore++;
                   return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
    while(computerScore != 5 && playerScore != 5) {
        playerSelection = prompt("Pick your choice: ");
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if(playerScore == 5) {
        console.log("CONGRATULATIONS! Try to defend your title!");
        return;
    } else {
        console.log("GAME OVER! Better luck next time!");
        return;
    }
}