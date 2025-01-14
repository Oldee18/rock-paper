const Choice = {
    ROCK: "ROCK",
    PAPER: "PAPER",
    SCISSORS: "SCISSORS"
    }

const choices = [
    Choice.ROCK,
    Choice.PAPER,
    Choice.SCISSORS
    ]    


let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
    const computerChoice = Math.floor(Math.random()*3)
        if (computerChoice == 0){
            return console.log(choices[0])
        } else if (computerChoice == 1) {
            return console.log(choices[1])
        } else 
        return console.log(choices[2])
}
const getHumanChoice = function () {
    const humanChoice = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase();
        if (humanChoice === "rock") {
            console.log(choices[0])
        } else if (humanChoice === "paper") {
            console.log(choices[1])
        } else 
            console.log(choices[2])
}
getHumanChoice()
getComputerChoice()
