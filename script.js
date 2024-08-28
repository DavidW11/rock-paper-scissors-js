console.log("Hello World")

let choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

// console.log(getComputerChoice());

// assume that human enters valid choice
function getHumanChoice() {
    let choice = prompt("Enter your Choice:").trim().toLowerCase();
    
    if (choices.includes(choice)) {
        return choice;
    }
    else {
        return null;
    }
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log("You chose " + humanChoice);
    console.log("Computer chose " + computerChoice);

    let result = (choices.indexOf(computerChoice) - choices.indexOf(humanChoice)) % 3;

    if (result==0) {
        console.log("It's a Tie!")
        computerScore++;
        humanScore++;
    }
    else if (result==1) {
        console.log("Computer Won!")
        computerScore++;
    }
    else {
        console.log("You Won!")
        humanScore++;
    }
}

// playRound();
// console.log(computerScore, humanScore);

function playGame() {
    let rounds = 5;
    for (let i=0; i<rounds; i++) {
        playRound();
    }

    console.log("Final Scores:");
    console.log("Computer Score: " + computerScore);
    console.log("Your Score: " + humanScore);
}

playGame();