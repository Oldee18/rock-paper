let choices = ("rock", "paper", "scissors");
let humanScore = 0;
let computerScore = 0;

    function getComputerChoice() {
        
        let computerChoice = Math.random();
            if (computerChoice <= 0.33) {
                console.log("The computer chose " + "rock".toUpperCase());
            } else if (computerChoice > 0.33 && computerChoice <= 0.66){
                console.log("The computer chose " + "paper".toUpperCase());
            } else if (computerChoice > 0.66) 
                console.log("The computer chose " + "scissors".toUpperCase());
            }



    function getHumanChoice() {

        let humanChoice = prompt("What is your choice?").toLocaleLowerCase();
            if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
                console.log("You chose " + humanChoice);
            } else {
                console.log("This choice was not part of the game!!! Choice another!")
            }
    }

getHumanChoice()
getComputerChoice()