const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function getComputerChoice() {
    let choiceNum = Math.floor((Math.random() * 3)) + 1;
    console.log(choiceNum);
    if (choiceNum == ROCK) {
        console.log("The Computer Chose Rock");
    } else if (choiceNum == PAPER) {
        console.log("The Computer Chose Paper");
    } else {
        console.log("The Computer Chose Scissors");
    }
}

function getHumanChoice() {
    let userChoice = prompt("Choose Rock, Paper, or Scissors");
    console.log(userChoice);
    while (userChoice != "Rock" && userChoice != "rock" && userChoice != "Paper" && userChoice != "paper" &&
        userChoice != "Scissors" && userChoice != "scissors" ) {
        userChoice = prompt("That was not a valid choice. Choose 1 - Rock, 2 - Paper, or 3 - Scissors");
    }
    if (userChoice == "rock" || userChoice == "Rock") {
        console.log("The User Chose Rock");
    } else if (userChoice == "Paper" || userChoice == "paper") {
        console.log("The User Chose Paper");
    } else {
        console.log("The User Chose Scissors");
    }
}