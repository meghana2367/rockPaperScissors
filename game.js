const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerScoreUI = document.querySelector("#playerScore");
const computerScoreUI = document.querySelector("#computerScore");
const result = document.querySelector("#result");
const explain = document.querySelector("#explain");

const addPlayer = document.createElement("span");
addPlayer.textContent = " " + humanScore;
const addComputer = document.createElement("span");
addComputer.textContent = " " + computerScore;
result.textContent = " Good Luck!";

playerScoreUI.appendChild(addPlayer);
computerScoreUI.appendChild(addComputer);


rock.addEventListener("click", () => {
    explain.textContent = "You chose rock!";
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
    explain.textContent = "You chose paper!";
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
    explain.textContent = "You chose scissors!";
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
        result.textContent = "It's a tie!";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You chose rock, the computer chose scissors: You Won!");
        result.textContent = "You Won!";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You chose rock, the computer chose paper: You Lost!");
        result.textContent = "You Lost!";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You chose paper, the computer chose scissors: You Lost!");
        result.textContent = "You Lost!";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You chose paper, the computer chose rock: You Won!");
        result.textContent = "You Won!";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You chose scissors, the computer chose paper: You Won!");
        result.textContent = "You Won!";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You chose scissors, the computer chose rock: You Lost!");
        result.textContent = "You Lost!";
    } else {
        console.log("shouldn't get here");
    }

    addPlayer.textContent = " " + humanScore;
    addComputer.textContent = " " + computerScore;

    if (humanScore == 5 && computerScore == 5) {
        result.textContent = "Y'all Tied Playing Rock Paper Scissors";
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore == 5) {
        result.textContent = "You win Rock Paper Scisors";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        result.textContent = "You win Rock Paper Scisors";
        humanScore = 0;
        computerScore = 0;
    }
}

function playGame() {
    // Any additional game setup can go here
}
