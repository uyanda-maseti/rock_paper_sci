function getComputerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
    case 1:
        console.log('rock');
        break;
    case 2:
        console.log('paper');
        break;
    case 3:
        console.log('scissors');
        break;
    
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Enter either rock, paper or scissors')
    console.log(humanChoice);
}

getHumanChoice();