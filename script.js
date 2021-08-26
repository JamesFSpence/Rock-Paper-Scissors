function computerPlay() {
    let randomOneToThree = Math.floor(Math.random()*3);
    let computerChoice = "";
    if (randomOneToThree == 0) {
        computerChoice = "Rock";
    }
    else if (randomOneToThree == 1) {
        computerChoice = "Paper";
    }
    else if (randomOneToThree == 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

let computerScore = 0;
let playerScore = 0;

function selectionNumber(input) {
    if (input.toLowerCase() == "rock") {
        return 0;
    }
    else if (input.toLowerCase() == "paper") {
        return 1;
    }
    else if (input.toLowerCase() == "scissors") {
        return 2;
    }
    else {
        return "Please enter a valid input!";
    }
}

function singleGame(playerSelection, computerSelection) {
    
    if (selectionNumber(playerSelection) - selectionNumber(computerSelection) == 0) {
        return "It's a draw!";
    }
    else if ((selectionNumber(playerSelection) - selectionNumber(computerSelection)+3)%3 == 1) {
        playerScore = playerScore+1;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if ((selectionNumber(playerSelection) - selectionNumber(computerSelection)+3)%3 == 2) {
        computerScore = computerScore +1;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    computerScore = 0;
    playerScore = 0;
    let i = 0;
    while (i < 5) {
        let playerSelection = prompt("Enter your choice or 'Rock', 'Paper' or 'Scissors':");
        let computerSelection = computerPlay();
        if (selectionNumber(playerSelection) == "Please enter a valid input!") {
            alert("Please enter a valid input!");
        }
        else {
            i = i+1;
            console.log("The computer chose "+ computerSelection + ". "+ singleGame(playerSelection, computerSelection));
            if (i == 1) {
            console.log("After " + i + " round, the score is: YOU: " + playerScore + " - COMPUTER: " + computerScore);
            }
            else {
                console.log("After " + i + " rounds, the score is: YOU: " + playerScore + " - COMPUTER: " + computerScore);
            }
        }
        
    }
    if (playerScore > computerScore) {
        return "You won the game!";
    }
    else if (playerScore < computerScore) {
        return "You lost the game!";
    }
    else {
        return "You tied the game!";
    }
}