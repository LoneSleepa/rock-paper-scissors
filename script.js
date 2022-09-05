const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

let playerScore = 0;
let computerScore = 0;
const containerYou = document.querySelector('#you');
const playScoreBox = document.createElement('div');
playScoreBox.textContent = `${playerScore}`;
containerYou.appendChild(playScoreBox);
const containerCPU = document.querySelector('#CPU');
const compScoreBox = document.createElement('div');
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
    const result = document.querySelector('.matchMsg');
        
        if (playerSelection === rock &&  newComputerSelection === scissors) {
        playerScore += 1;
        playScoreBox.textContent=`${playerScore}`;
        result.textContent=win;
        
        } else if (playerSelection === scissors && newComputerSelection === paper) {
            playerScore += 1;
            playScoreBox.textContent=`${playerScore}`;
            result.textContent=win;

        } else if (playerSelection === paper && newComputerSelection === rock) {
            playerScore += 1;
            playScoreBox.textContent=`${playerScore}`;
            result.textContent=win;

        } else if (playerSelection === rock && newComputerSelection === rock) {
            result.textContent=tie;

        } else if (playerSelection === paper && newComputerSelection === paper) {
            result.textContent=tie;

        } else if (playerSelection === scissors && newComputerSelection === scissors) {
           result.textContent=tie;

        } else {
            computerScore += 1;
            compScoreBox.textContent=`${computerScore}`;
            result.textContent=lose;

        }
        const finalScore = document.querySelector('#endMsg');
        
        if (playerScore === 5) {
        const victory = "Time to celebrate. You WIN!!!";
        finalScore.textContent = victory;
         } else if (computerScore === 5) {
        const defeat = "Sorry, you lost. Someone's laughing at you.";
            finalScore.textContent = defeat;
            console.log(finalScore.textContent);
};
};        
        
 
   




  
    