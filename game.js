function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[computerChoice]); 
    
    
    }
    
    getComputerChoice();
    