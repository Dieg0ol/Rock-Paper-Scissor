function getComputerChoice() { // logica usada para pegar a escolhada maquina
    const choices = ["Rock", "Paper", "Scissor"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    let test = choices[computerChoice];
    //console.log(choices[computerChoice]); 
    return test;

}


    // pega a escolha do usuario e compara com a da maquina e mostra o resultado
function playRound(playerSelection) { 
    playerSelection = prompt("Make your choice by Rock, Paper and Scissor.").toUpperCase(); // pega a entrada do usuario
    if (playerSelection !== "ROCK" && playerSelection !== "Paper" && playerSelection !== "SCISSORS") { // compara ela, se for diferente do que está ali da erro 
        return ("its not work try again");
    }


    let computerSelection = getComputerChoice().toUpperCase();
    if (playerSelection === computerSelection) { // se a do usuario e da maquina forem igual da DRAW
        return ["draw", playerSelection, computerSelection];
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||  // se as codições forem verdade o usuario ganha!
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||    // se as codições forem verdade o usuario ganha!
        (playerSelection === "SCISSOR" && computerSelection === "PAPER")    // se as codições forem verdade o usuario ganha!
    ) {
        return ["you win", playerSelection, computerSelection];
    } else {
        return ["you lose bro", playerSelection, computerSelection]; // se todas forem errada o usuario perde!
    }


}


 // essa função joga o game 5 vezes e mostra o resultado.
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