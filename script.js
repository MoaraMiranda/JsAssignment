const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

function playAround(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    /* check the user input */

    if (!isNaN(playerSelection)) {
        result = "You entered the wrong input";
    } else {

        if (playerSelection === "rock" && computerSelection === "paper") {
            result = "You Lose! Paper beats Rock";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            result = "You win! Rock beats paper";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            result = "You win! Rock beats scissors";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            result = "You lose! Rock beats scissors";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            result = "You lose! Scissors beats paper";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            result = "You win! Scissors beats paper";
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            result = "It's a draw";
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            result = "It's a draw";
        } else {
            result = "You entered the wrong input";
        }
    }
}

function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "scissors";
    } else {
        return "paper";
    }
}

function generateComputerChoice() {
    computerChoice = computerPlay();
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    playAround(userChoice, computerChoice);
    resultDisplay.innerHTML = result;
}