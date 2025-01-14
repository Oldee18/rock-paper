const Choice = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
    }

const choices = [
    Choice.ROCK,
    Choice.PAPER,
    Choice.SCISSORS
    ]    


let humanScore = 0;
let computerScore = 0;

const computerChoice = Math.floor(Math.random()*3);
console.log(computerChoice)

const humanChoice = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase();

const getComputerChoice = function () {

}
