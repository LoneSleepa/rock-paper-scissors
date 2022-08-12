const rock = 'rock'
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

const playerSelection = getPlayerChoice().toLowerCase();
const computerSelection = getComputerChoice();
const win = "Congrats! One point for you!";
const lose = "Sorry, no point for you...";
const tie = "Tie, reroll";

function getPlayerChoice() {
const  getPlayerChoice = prompt("Type rock, paper or scissors.");
return getPlayerChoice;
}
console.log(getPlayerChoice);

function getComputerChoice() {
const getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
return getComputerChoice;
}
console.log(getComputerChoice());



function playerRound (playerSelection, computerSelection) {
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

let playerScore = 0;
let computerScore = 0;

function game() {
    playerRound(playerSelection, computerSelection);

    for (let i= 0; i <  5; i++) {
        console.log(i);
        if (playerScore === 5) {
            const victory = "Time to celebrate. You WIN!!!";
            victory;
            console.log(victory);
            return victory;
        } else if (computerScore === 5) {
            const defeat = "Sorry, you lost. Someone's laughing at you.";
            defeat;
            console.log(defeat);
            return defeat;
        }
    }   
}

game();
console.log(playerScore);
console.log(computerScore);
console.log(playerSelection, computerSelection);
console.log(playerRound(playerSelection, computerSelection));