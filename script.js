const Choice = {
    ROCK: "ROCK",
    PAPER: "PAPER",
    SCISSORS: "SCISSORS"
    }

let choices = [
    Choice.ROCK,
    Choice.PAPER,
    Choice.SCISSORS
    ]

const humanWin = "You WIN!"
const computerWin = "The computer win. Try again!"
const tie = "It's a tie! Try again!"

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
    let computerChoice = Math.floor(Math.random()*3)
        if (computerChoice == 0){
            computerChoice = choices[0]
            console.log(choices[0])
        } else if (computerChoice == 1) {
            computerChoice = choices[1]
            console.log(choices[1])
        } else if (computerChoice == 2) {
            computerChoice = choices[2]
            console.log(choices[2]);
        }    
    return computerChoice;
}
const getHumanChoice = function () {
    let humanChoice = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase();
        if (humanChoice === "rock") {
            humanChoice = choices[0]
            console.log(choices[0])
        } else if (humanChoice === "paper") {
            humanChoice = choices[1]
            console.log(choices[1])
        } else if (humanChoice === "scissors") {
            humanChoice = choices[2]
            console.log(choices[2]);
        }    
    return humanChoice;
}

const playRound = function (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(tie)
    } else if (humanChoice > computerChoice) {
        console.log(computerWin)
    } else if (humanChoice < computerChoice) {
        console.log(humanWin)
    }    
}
getHumanChoice()
getComputerChoice()
playRound()