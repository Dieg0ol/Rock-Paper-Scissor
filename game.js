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
    if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        console.log("its draw");
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return ("you win");
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return ("you win");
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return ("you win");
    } else {
        return ("you lose bro");

    }

}
playRound();