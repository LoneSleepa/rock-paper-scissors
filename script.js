const rock = 'rock'
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

let playerSelection = getPlayerChoice;
let computerSelection = getComputerChoice();
const win = "Congrats! One point for you!";
const lose = "Sorry, no point for you...";
const tie = "Tie, reroll";
let playerScore = 0;
let computerScore = 0;

/*function getPlayerChoice() { // request player's input 
let  getPlayerChoice = prompt("Type rock, paper or scissors.");
return getPlayerChoice;
}*/
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
    for (let i= 0; i <  5; i++) {   // The necessary loop so the game can run 5 times.
        playerRound(playerSelection, computerSelection); 
        console.log(playerScore);
        console.log(computerScore);
    }
        if (playerScore === computerScore) { // this block defines endgame results.
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
