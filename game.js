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
    let userChoice = prompt("Choose 1 - Rock, 2 - Paper, or 3 - Scissors");
    while (userChoice != ROCK || userChoice != PAPER || userChoice != SCISSORS) {
        userChoice = prompt("That was not a valid choice. Choose 1 - Rock, 2 - Paper, or 3 - Scissors");
    }
    if (userChoice == ROCK) {
        console.log("The User Chose Rock");
    } else if (userChoice == PAPER) {
        console.log("The User Chose Paper");
    } else {
        console.log("The User Chose Scissors");
    }
}