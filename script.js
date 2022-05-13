//An array that contains possible choices
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const handArray = [rock, paper, scissors];

//This sets a baseline score for the player and computer
let playerScore = 0;
let computerScore = 0;

//Function for computer to randomly choose rock, paper, or scissors
function getComputerChoice() {
    const computerChoice = handArray[Math.floor(Math.random() * handArray.length)];
    console.log("Computer picks " + computerChoice);
    return computerChoice;
}

function fixCase(input) {
    return input.toLowerCase();
}

function logRockWins() {
    console.log("Rock Wins!");
}

function logPaperWins() {
    console.log("Paper Wins!");
}

function logScissorsWins() {
    console.log("Scissors Wins!");
}

//Function to evaluate possible moves and keep score.
function playRound (playerSelection, computerSelection) {
    // Make sure the selections are all lower case so that comparisons are correct
    playerSelection = fixCase(playerSelection);
    computerSelection = fixCase(computerSelection);

    if (playerSelection === computerSelection) {
        console.log("DRAW!");
    }

    if (playerSelection === rock && computerSelection === paper) {
        logPaperWins();
        computerScore += 1;
    }

    if (playerSelection === rock && computerSelection === scissors) {
        logRockWins();
        playerScore += 1;
    }

    if (playerSelection === paper && computerSelection === scissors) {
        logScissorsWins();
        computerScore += 1;
    }

    if (playerSelection === paper && computerSelection === rock) {
        logPaperWins();
        playerScore += 1;
    }

    if (playerSelection === scissors && computerSelection === rock) {
        logRockWins();
        computerScore += 1;
    }

    if (playerSelection === scissors && computerSelection === paper) {
        logScissorsWins();
        playerScore += 1;
    }

    console.log('current scores player: ' + playerScore + ' computer: ' + computerScore);
}


function getPlayerChoice() {
    const playerChoice = prompt("Please choose rock, paper, or scissors: ");
    console.log('Player chooses ' + playerChoice);
    return playerChoice;
}

//Play 5 rounds and log results
function game(bestOf) {
    const winningScore = (bestOf + 1)/2
    let noWinner = true;

    while (noWinner) {
        let playerChoice = getPlayerChoice();

        const computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice);

        if (playerScore === winningScore) {
            console.log("You win!");
            noWinner = false;
        }

        if (computerScore === winningScore) {
            console.log("You lose!");
            noWinner = false;
        }
    }
}

const bestOf = 9;
game(bestOf);