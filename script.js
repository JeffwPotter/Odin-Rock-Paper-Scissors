//An array that contains possible choices
const handArray = [ 
    "rock",
    "paper",
    "scissors"
];

function computerPlay() {
    computerSelection = handArray[Math.floor(Math.random() * handArray.length)];
    return computerSelection;
}

function playerSelection() {
    const playerPick = function () {
        return prompt("Please choose rock, paper, or scissors: ");
        return playerPick;
    }
}
// COMMENTED OUT INCASE I NEED IT LATER    let playerPick = prompt("Please choose rock, paper, or scissors: ");

function playRound (playerPick, computerSelection) {
    if (playerPick == "rock" && computerSelection == "paper") {
        console.log("Paper Wins!");
    }
    else if (playerPick == "rock" && computerSelection == "scissors") {
        console.log("Rock Wins!");
    }
    else if (playerPick == "paper" && computerSelection == "scissors") {
        console.log("Scissors Wins!");
    }
    else if (playerPick == "paper" && computerSelection == "rock") {
        console.log("Paper Wins!");
    }
    else if (playerPick == "scissors" && computerSelection == "rock") {
        console.log("Rock Wins!");
    }
    else if (playerPick == "scissors" && computerSelection == "paper") {
        console.log("Scissors Wins!");
    }
    else  {
        console.log("DRAW!");
    }

} 

function game() {
    playRound();
}

for (let i = 0; i < 5; i++) {
    game();
}