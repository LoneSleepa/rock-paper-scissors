const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

let playerScore = 0;
let computerScore = 0;
const containerYou = document.querySelector('#you');
let playScoreBox = document.createElement('div');
playScoreBox.textContent = `${playerScore}`;
containerYou.appendChild(playScoreBox);
const containerCPU = document.querySelector('#CPU');
let compScoreBox = document.createElement('div');
compScoreBox.textContent = `${computerScore}`;
containerCPU.appendChild(compScoreBox);

let computerSelection = getComputerChoice();
function getComputerChoice() { // generates random pick for the CPU
let getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
console.log(getComputerChoice);
return getComputerChoice;
}
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scisBtn = document.querySelector('#scissors');
rockBtn.addEventListener('click', () => {
    playerRound(rock, computerSelection);
});
paperBtn.addEventListener('click', () => {
    playerRound(paper, computerSelection);
});
scisBtn.addEventListener('click', () => {
    playerRound(scissors, computerSelection);
});

const win = "Congrats! One point for you!";
const lose = "Sorry, no point for you...";
const tie = "Tie, reroll";



function playerRound (playerSelection, computerSelection) { // the core of this project. Defines the game rules and its execution.
    
    let newComputerSelection = getComputerChoice(); // also chose `let` to make sure the variable can change values. 

    if (playerSelection === rock &&  newComputerSelection === scissors) {
        playerScore += 1;
        console.log(win);
        return win;
        } else if (playerSelection === scissors && newComputerSelection === paper) {
            playerScore += 1;
            console.log(win);
            return win;
        } else if (playerSelection === paper && newComputerSelection === rock) {
            playerScore += 1;
            console.log(win);
            return win;
        } else if (playerSelection === rock && newComputerSelection === rock) {
            console.log(tie);
           return tie;
        } else if (playerSelection === paper && newComputerSelection === paper) {
            console.log(tie);
           return tie;
        } else if (playerSelection === scissors && newComputerSelection === scissors) {
            console.log(tie);
           return tie;
        } else {
            computerScore += 1;
            console.log(lose);
            return lose;            
        }   
}

/*function game() {

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

game();*/
