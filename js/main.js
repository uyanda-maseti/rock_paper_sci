function getHumanChoice() {
    let humanChoice = prompt('Enter either rock, paper or scissors')
    return humanChoice;
}

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return 'rock'

        case 2:
            return 'paper'

        case 3:
            return 'scissors'

    }
}




function playGame() {

    let humanScore = 0
    let computerScore = 0
    let play = true

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++
            console.log(`You win!!! \nPlayer score: ${humanScore} \n Computer score: ${computerScore} `);
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++
            console.log(`You win!!! \nPlayer score: ${humanScore} \nComputer score: ${computerScore} `);
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++
            console.log(`You win!!! \nPlayer score: ${humanScore} \nComputer score: ${computerScore} `);
        } else if (humanChoice === computerChoice) {
            console.log(`You draw \nPlayer score: ${humanChoice} \nComputer score: ${computerChoice}`);
        } else {
            computerScore++
            console.log(`You lose ${computerChoice} beats ${humanChoice} \nPlayer score: ${humanScore} \nComputer score : ${computerScore}`);
        }
    }

    function playAgain(){
        let userInput = prompt("Enter Y/N:")
        userInput.toLowerCase()
        if (userInput == 'y'){
            return true
        }else{
            return false
        }
    }

    let round = 0;

    while (play && round < 5) {
        const humanSelection = getHumanChoice().toLowerCase()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
        play = playAgain()
        round++
    }


}

playGame()
