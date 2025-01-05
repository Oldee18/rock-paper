let humanScore = 0;
let computerScore = 0;

function playGame() {


let computerChoice = Math.random();
let humanChoice = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase();



    function getComputerChoice() {
        
            if (computerChoice <= 0.33) {
                console.log("The computer chose " + "rock".toUpperCase());
            } else if (computerChoice > 0.33 && computerChoice <= 0.66){
                console.log("The computer chose " + "paper".toUpperCase());
            } else if (computerChoice > 0.66) 
                console.log("The computer chose " + "scissors".toUpperCase());
    }



    function getHumanChoice() {

            if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
                console.log("You chose " + humanChoice.toUpperCase());
            } else {
                console.log("This choice was not part of the game!!! Choice another!")
            }
    }



    function playRound(humanSelection, computerSelection) {

        

        // Human chose ROCK!

        if (humanChoice === "rock" && computerChoice <= 0.33) {
            console.log("It's a tie!");
        } else if (humanChoice === "rock" && (computerChoice > 0.33 && computerChoice <= 0.66)) {
            console.log("You lose!")
            ++computerScore;
        } else if (humanChoice === "rock" && computerChoice > 0.66) {
            console.log("You win!")
            ++humanScore;
        }
        
        // Human chose PAPER!

        if (humanChoice === "paper" && computerChoice <= 0.33) {
            console.log("You win!");
            ++humanScore;
        } else if (humanChoice === "paper" && (computerChoice > 0.33 && computerChoice <= 0.66)) {
            console.log("It's a tie!");
        } else if (humanChoice === "paper" && computerChoice > 0.66) {
            console.log("You lose!");
            ++computerScore;
        }

        // Human chose SCISSORS!

        if (humanChoice === "scissors" && computerChoice <= 0.33) {
            console.log("You lose");
            ++computerScore;
        } else if (humanChoice === "scissors" && (computerChoice > 0.33 && computerChoice <= 0.66)) {
            console.log("You win!");
            ++humanScore;
        } else if (humanChoice === "scissors" && computerChoice > 0.66) {
            console.log("It's a tie!");
        }
        console.log("Your score is " + humanScore);
        console.log("Computer score is " + computerScore);
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
playGame();
playGame();
playGame();
playGame();
playGame();
console.log("Your finale score is " + humanScore);
console.log("Computer finale score is " + computerScore);

    if (humanScore > computerScore) {
        console.log("YOU ARE THE WINNER!!!");
    } else if (humanScore === computerScore) {
        console.log("IT'S A TIE!!! MAYBE NEXT TIME");
    } else if (humanScore < computerScore) {
        console.log("YOU ARE THE LOSER!!! GOOD LUCK NEXT TIME");
    }