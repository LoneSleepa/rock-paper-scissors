const rock = 'rock'
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

function getComputerChoice() {
const getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
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

const playerSelection = rock;
console.log(playerSelection);
const computerSelection = getComputerChoice();
const win = "Congrats! One point for you!";
const lose = "Sorry, no point for you...";
const tie = "Tie, reroll";

playerRound(playerSelection, computerSelection);
console.log(playerRound(playerSelection, computerSelection));
