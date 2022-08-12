const rock = 'rock'
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

let playerSelection = getPlayerChoice().toLowerCase();
let computerSelection = getComputerChoice();
const win = "Congrats! One point for you!";
const lose = "Sorry, no point for you...";
const tie = "Tie, reroll";
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
let  getPlayerChoice = prompt("Type rock, paper or scissors.");
return getPlayerChoice;
}
function getComputerChoice() {
let getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
return getComputerChoice;
}

function playerRound (playerSelection, computerSelection) {
    getPlayerChoice();
    getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === rock &&  computerSelection === scissors) {
        playerScore += 1;
        console.log(win);
        return win;
        } else if (playerSelection === scissors && computerSelection === paper) {
            playerScore += 1;
            console.log(win);
            return win;
        } else if (playerSelection === paper && computerSelection === rock) {
            playerScore += 1;
            console.log(win);
            return win;
        } else if (playerSelection === rock && computerSelection === rock) {
            console.log(tie);
           return tie;
        } else if (playerSelection === paper && computerSelection === paper) {
            console.log(tie);
           return tie;
        } else if (playerSelection === scissors && computerSelection === scissors) {
            console.log(tie);
           return tie;
        } else {
            computerScore += 1;
            console.log(lose);
            return lose;            
        }   
}

function game() {
    for (let i= 0; i <  5; i++) {
        console.log(i);
        playerRound(playerSelection, computerSelection);
        console.log(playerScore);
        console.log(computerScore);
    }
        if (playerScore === computerScore) {
            const draw = "None of you won neither lost the game! Care for a rematch?";
            console.log(draw);
            return draw;        
        } else if (playerScore > computerScore) {
            const victory = "Time to celebrate. You WIN!!!";
            console.log(victory);
            return victory;
        } else {
            const defeat = "Sorry, you lost. Someone's laughing at you.";
            console.log(defeat);
            return defeat;
        }
}

game();
