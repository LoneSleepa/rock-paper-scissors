const rock = 'rock'
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

const playerSelection = rock;
console.log(playerSelection);
const computerSelection = getComputerChoice();
const win = "Congrats! One point for you!";
const lose = "Sorry, no point for you...";
const tie = "Tie, reroll";



function getComputerChoice() {
const getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
return getComputerChoice;
console.log(getComputerChoice);
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



playerRound(playerSelection, computerSelection);
console.log(playerRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;
console.log(playerScore);
console.log(computerScore);

function game() {
    if (win) {
        playerScore = playerScore++;
        return playerScore++;
    } else {
        computerScore = computerScore++;
        return computerScore++;
    }
    playerRound(playerSelection, computerSelection);
}

game();
console.log(playerScore);
console.log(computerScore);
