
const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
      
        if (humanChoice === 'rock' && computerChoice === 'scissors'){
            humanScore++;
            console.log(`You win!! \n  score is Player: ${humanScore} \n Computer: ${computerScore} `);
        } else if (humanChoice === 'paper' && computerChoice === 'rock'){
            humanScore++;
            console.log(`You win!! \n  score is Player: ${humanScore} \n Computer: ${computerScore} `);
        } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            console.log(`You win!! \n  score is Player: ${humanScore} \n Computer: ${computerScore} `);
        } else if (humanChoice === computerChoice){
            console.log(`You draw \n Player: ${humanChoice} \n Computer: ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose ${computerChoice} beats ${humanChoice} \n Player: ${humanScore} \n Computer: ${computerScore}`);
        }
    }
    
    
    for (let i = 0; i < 5; i++){
        playRound(humanSelection, computerSelection);
    }
}



function getComputerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
    case 1:
        return 'rock';
    
    case 2:
        return 'paper';

    case 3:
        return 'scissors';
    
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Enter either rock, paper or scissors')
    return humanChoice;
}



playGame();