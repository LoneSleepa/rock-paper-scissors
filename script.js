const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors');
const choice = [rock, paper, scissors];
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.btn');

const containerYou = document.querySelector('#you');
let playScoreBox = document.createElement('div');
playScoreBox.textContent = `${playerScore}`;
containerYou.appendChild(playScoreBox);

const containerCPU = document.querySelector('#CPU');
let compScoreBox = document.createElement('div');
compScoreBox.textContent = `${computerScore}`;
containerCPU.appendChild(compScoreBox);

let playerSelection = getPlayerChoice;
let computerSelection = getComputerChoice();
const win = "Congrats! One point for you!";
const lose = "Sorry, no point for you...";
const tie = "Tie, reroll";


function getPlayerChoice() { // request player's input 
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            
        })
    })

}
function getComputerChoice() { // generates random pick for the CPU
let getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
return getComputerChoice;
}

function playerRound (playerSelection, computerSelection) { // the core of this project. Defines the game rules and its execution.
    
    let newPlayerSelection = getPlayerChoice().toLowerCase(); // 2 new variables so the previous values can share the same scope. 
    let newComputerSelection = getComputerChoice(); // also chose `let` to make sure the variable can change values. 
    console.log(newPlayerSelection);
    console.log(newComputerSelection);

    if (newPlayerSelection === rock &&  newComputerSelection === scissors) {
        playerScore += 1;
        console.log(win);
        return win;
        } else if (newPlayerSelection === scissors && newComputerSelection === paper) {
            playerScore += 1;
            console.log(win);
            return win;
        } else if (newPlayerSelection === paper && newComputerSelection === rock) {
            playerScore += 1;
            console.log(win);
            return win;
        } else if (newPlayerSelection === rock && newComputerSelection === rock) {
            console.log(tie);
           return tie;
        } else if (newPlayerSelection === paper && newComputerSelection === paper) {
            console.log(tie);
           return tie;
        } else if (newPlayerSelection === scissors && newComputerSelection === scissors) {
            console.log(tie);
           return tie;
        } else {
            computerScore += 1;
            console.log(lose);
            return lose;            
        }   
}

function game() {

        playerRound(playerSelection, computerSelection); 
        console.log(playerScore);
        console.log(computerScore);
    
        if (playerScore === 5) {
            const victory = "Time to celebrate. You WIN!!!";
            console.log(victory);
            return victory;
        } else if (computerScore === 5) {
            const defeat = "Sorry, you lost. Someone's laughing at you.";
            console.log(defeat);
            return defeat;
        }
}

game();
