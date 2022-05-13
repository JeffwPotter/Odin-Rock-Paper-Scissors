//An array that contains possible choices
const handArray = [ 
    "rock",
    "paper",
    "scissors"
];

//Function for computer to randomly choose rock, paper, or scissors
function computerPlay() {
    const randomComputerSelection = handArray[Math.floor(Math.random() * handArray.length)];
    return randomComputerSelection;
}
const computerSelection = computerPlay();

// Test computerPlay function
console.log("Computer picks " + computerSelection);


let playerSelection = prompt("Please choose rock, paper, or scissors: ");

//This sets a baseline score for the player and computer
let playerScore = 0;
let computerScore = 0;

//Function to evaluate possible moves and keep score.
function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Paper Wins!");
        computerScore += 1;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Rock Wins!");
        playerScore += 1;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Scissors Wins!");
        computerScore += 1;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Paper Wins!");
        playerScore += 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Rock Wins!");
        computerScore += 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Scissors Wins!");
        playerScore += 1;
    }
    else  {
        console.log("DRAW!");
    }

} 

//Log results of play
console.log(playRound(playerSelection, computerSelection));

 function game() {
     for (let i = 0; i < 5; i++) {
         if (i < 5) {
             playRound(playerSelection, computerSelection);
         }

     }
 }