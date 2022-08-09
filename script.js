const rock = 'rock'
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

const playerSelection = rock;
const computerSelection = getComputerChoice();
const win = "Congrats! One point for you!";
const lose = "Sorry, no point for you...";
const tie = "Tie, reroll";
const endgame = 5;

function getComputerChoice() {
const getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
return getComputerChoice;
}



function playerRound (playerSelection, computerSelection) {
    if (playerSelection === rock &&  computerSelection === scissors) {
         return win;
        } else if (playerSelection === scissors && computerSelection === paper) {
            return win;
        } else if (playerSelection === paper && computerSelection === rock) {
           return win;
        } else if (playerSelection === rock && computerSelection === rock) {
           return tie;
        } else if (playerSelection === paper && computerSelection === paper) {
           return tie;
        } else if (playerSelection === scissors && computerSelection === scissors) {
           return tie;
        } else {
            return lose;            
        }    
}

let playerScore = 0;
let computerScore = 0;

function game() {
    playerRound(playerSelection, computerSelection);

    for (let i= 0; i < (playerScore == 5); i++) {
        console.log(i);
    }
    if (playerSelection === rock &&  computerSelection === scissors) {
        playerScore += 1;
        console.log(playerScore);
        return playerScore;
    } else if (playerSelection === scissors && computerSelection === paper) {
        playerScore += 1;
        console.log(playerScore);
        return playerScore;
    } else if (playerSelection === paper && computerSelection === rock) {
        playerScore += 1;
        console.log(playerScore);
        return playerScore;
    } else if (playerSelection === paper && computerSelection === scissors) {
        computerScore += 1;
        console.log(computerScore);
        return computerScore;
    } else if (playerSelection === rock && computerSelection === paper) {
        computerScore += 1;
        console.log(computerScore);
        return computerScore;
    } else if (playerSelection === scissors && computerSelection === rock) {
        computerScore += 1;
        console.log(computerScore);
        return computerScore;
    }
}

game();
console.log(playerScore);
console.log(computerScore);
console.log(playerSelection, computerSelection);
console.log(playerRound(playerSelection, computerSelection));