const rock = 'rock'
const paper = 'paper';
const scissors = 'scissors';
const choice = [rock, paper, scissors];

function getComputerChoice() {
const getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
console.log(getComputerChoice);
}
getComputerChoice();
