const rock = 'rock'
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

const playerSelection = getPlayerChoice().toLowerCase();
const computerSelection = getComputerChoice();
const win = "Congrats! One point for you!";
const lose = "Sorry, no point for you...";
const tie = "Tie, reroll";
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
const  getPlayerChoice = prompt("Type rock, paper or scissors.");
return getPlayerChoice;
}
function getComputerChoice() {
const getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
return getComputerChoice;
}

function playerRound (playerSelection, computerSelection) {
    getPlayerChoice();
    getComputerChoice();
    if (playerSelection === rock &&  computerSelection === scissors) {
        playerScore += 1;
         return win;
        } else if (playerSelection === scissors && computerSelection === paper) {
            playerScore += 1;
            return win;
        } else if (playerSelection === paper && computerSelection === rock) {
            playerScore += 1;
           return win;
        } else if (playerSelection === rock && computerSelection === rock) {
           return tie;
        } else if (playerSelection === paper && computerSelection === paper) {
           return tie;
        } else if (playerSelection === scissors && computerSelection === scissors) {
           return tie;
        } else {
            computerScore += 1;
            return lose;            
        }   
}

function game() {
    for (let i= 0; i <  5; i++) {
        playerRound(playerSelection, computerSelection);
    }
        if (playerScore > computerScore) {
            const victory = "Time to celebrate. You WIN!!!";
            console.log(victory);
            return victory;
        } else if (computerScore > playerScore) {
            const defeat = "Sorry, you lost. Someone's laughing at you.";
            console.log(defeat);
            return defeat;
        } else if (playerScore === computerScore) {
            const draw = "None of you won neither lost the game! Care for a rematch?";
            console.log(draw);
            return draw;
        }
}

game();
console.log(playerScore);
console.log(computerScore);
