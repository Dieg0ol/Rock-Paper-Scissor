function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    let test = choices[computerChoice];
    //console.log(choices[computerChoice]); 
    return test;

}



function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Make your choice by Rock, Paper and Scissor.").toUpperCase();
    if (playerSelection !== "ROCK" && playerSelection !== "Paper" && playerSelection !== "SCISSORS") {
        return ("its not work try again");
    }


    computerSelection = getComputerChoice().toUpperCase();
    if (playerSelection === computerSelection) {
        return ["draw", playerSelection, computerSelection];
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSOR" && computerSelection === "PAPER")
    ) {
        return ["you win", playerSelection, computerSelection];
    } else {
        return ["you lose bro", playerSelection, computerSelection];
    }





    /*
    // antiga

//if (playerSelection === computerSelection) {
return ["draw", playerSelection, computerSelection];
} else if (
(playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
(playerSelection === "PAPER" && computerSelection === "ROCK") ||
(playerSelection === "SCISSOR" && computerSelection === "PAPER")
) {
return ["you win", playerSelection, computerSelection];
} else {
return ["you lose bro", playerSelection, computerSelection];
}
    
    
    
    */

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const [result, playerSelection, computerSelection] = playRound();
        if (result === "you win") {
            playerScore++;
            console.log("you win this round")
        } else if (result === "you lose bro") {
            computerScore++;
            console.log("you lose this round");
        } else {
            console.log("it's a draw");
        }
    }
    console.log('the game is over');

}
game();