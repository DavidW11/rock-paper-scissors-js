
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};

// console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");
const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    console.log("You chose " + humanChoice);
    console.log("Computer chose " + computerChoice);

    let result = ((choices.indexOf(computerChoice) - choices.indexOf(humanChoice)) % 3 + 3) % 3;
    console.log(result);
    let winnerText = "";

    if (result===0) {
        winnerText = "It's a Tie!"
        computerScore++;
        humanScore++;
    }
    else if (result===1) {
        winnerText = "Computer Won!"
        computerScore++;
    }
    else if (result===2) {
        winnerText = "You Won!"
        humanScore++;
    }

    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;

    results.textContent = "Computer chose " + computerChoice + ". You chose " + humanChoice + ". " + winnerText
};

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
    let id = event.target.id;
    if (id !== "") {
        let humanChoice = event.target.id;
        playRound(humanChoice);
    };
});