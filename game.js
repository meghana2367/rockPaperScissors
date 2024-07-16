const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    console.log("You click rock!");
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
    console.log("You click paper!");
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
    console.log("You click scissors!");
    playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
    let choiceNum = Math.floor((Math.random() * 3)) + 1;
    if (choiceNum == ROCK) {
        return "rock";
    } else if (choiceNum == PAPER) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {


    if ((humanChoice == "rock" && computerChoice == "rock") ||
        (humanChoice == "paper" && computerChoice == "paper") ||
        (humanChoice == "scissors" && computerChoice == "scissors" )) {
        console.log("This was a tie!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You chose rock, the computer chose scissors: You Won!");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You chose rock, the computer chose paper: You Lost!");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You chose paper, the computer chose scissors: You Lost!");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You chose paper, the computer chose rock: You Won!");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You chose rock, the computer chose scissors: You Won!");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You chose scissors, the computer chose rock: You Lost!");
    } else{
        console.log("shouldn't get here");
    }

}

function playGame () {
    
}