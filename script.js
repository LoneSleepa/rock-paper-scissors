const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const choice = [rock, paper, scissors];

let getComputerChoice = choice[Math.floor(Math.random()*choice.length)];
console.log(getComputerChoice);

