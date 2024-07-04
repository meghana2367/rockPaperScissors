const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors" ) {
        userChoice = prompt("That was not a valid choice. Choose 1 - Rock, 2 - Paper, or 3 - Scissors");
    }
    if (userChoice == ROCK) {
        return "rock";
    } else if (userChoice == PAPER) {
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
    for (let i = 0; i < 5; i++) {
        let compChoice = getComputerChoice();
        let humChoice = getHumanChoice();
        playRound(humChoice, compChoice);
    }
    if (computerScore > humanScore) {
        console.log("The computer won.")
    } else if (computerScore < humanScore) {
        console.log("You won.")
    } else {
        console.log("It's a tie!")
    }
}