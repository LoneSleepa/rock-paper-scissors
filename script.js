const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];
const win = "Congrats! One point for you!";
const tie = "Tie, reroll";
const lose = "Sorry, no point for you..."

let playerScore = 0;
let computerScore = 0;
const playScoreBox = document.querySelector('#youScore');
playScoreBox.textContent = `${playerScore}`;
const compScoreBox = document.querySelector('#cpuScore');
compScoreBox.textContent = `${computerScore}`;

let computerSelection = getComputerChoice();
function getComputerChoice() { // generates random pick for the CPU
let getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
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

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    playScoreBox.textContent=`${playerScore}`;
    compScoreBox.textContent=`${computerScore}`;
    const newResult = document.querySelector('.matchMsg');
    const newFinalSc = document.querySelector('#endMsg');
    const newSummary = document.querySelector('.summary');
    newResult.textContent = "";
    newFinalSc.textContent = "";
    newSummary.textContent = "";
};

function playerRound (playerSelection, computerSelection) { // the core of this project. Defines the game rules and its execution.
    
    let newComputerSelection = getComputerChoice(); // also chose `let` to make sure the variable can change values. 
    const result = document.querySelector('.matchMsg');
    const summary = document.querySelector('.summary');
    let conclusion = `You picked ${playerSelection} while your opponent chose ${newComputerSelection}.`
            
        if (playerSelection === rock &&  newComputerSelection === scissors) {
        playerScore += 1;
        playScoreBox.textContent=`${playerScore}`;
        summary.textContent = conclusion;
        result.textContent = win;
                
        } else if (playerSelection === scissors && newComputerSelection === paper) {
            playerScore += 1;
            playScoreBox.textContent =`${playerScore}`;
            summary.textContent = conclusion;
            result.textContent = win;

        } else if (playerSelection === paper && newComputerSelection === rock) {
            playerScore += 1;
            playScoreBox.textContent =`${playerScore}`;
            summary.textContent = conclusion;
            result.textContent = win;

        } else if (playerSelection === rock && newComputerSelection === rock) {
            summary.textContent = conclusion;
            result.textContent = tie;

        } else if (playerSelection === paper && newComputerSelection === paper) {
            summary.textContent = conclusion;
            result.textContent = tie;

        } else if (playerSelection === scissors && newComputerSelection === scissors) {
            summary.textContent = conclusion;
            result.textContent = tie;

        } else {
            computerScore += 1;
            compScoreBox.textContent =`${computerScore}`;
            summary.textContent = conclusion;
            result.textContent = lose;

        }
        const finalScore = document.querySelector('#endMsg');        
        if (playerScore === 5) {
        const victory = "Time to celebrate. You WIN!!!";
        finalScore.textContent = victory;
        setTimeout(resetGame, 2000);

        } else if (computerScore === 5) {
        const defeat = "You lost. Someone's laughing at you.";
        finalScore.textContent = defeat;  
        setTimeout(resetGame, 2000);
};
};        
        
 
   




  
    