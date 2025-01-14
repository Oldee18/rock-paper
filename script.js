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


let humanChoice = ""
  
    const getHumanChoice = function () {

        const rockBtn = document.querySelector("#rock")
        const paperBtn = document.querySelector("#paper")
        const scissorsBtn = document.querySelector("#scissors")
        
        rockBtn.addEventListener("click", () => {
            humanChoice = choices[0]
            console.log(choices[0])
            playGame()
        })
        paperBtn.addEventListener("click", () => {
            humanChoice = choices[1]
            console.log(choices[1])
            playGame()
        })
        scissorsBtn.addEventListener("click", () => {
            humanChoice = choices[2]
            console.log(choices[2])
            playGame()
            })
        /* let humanChoice = prompt("Do you choose rock, paper or scissors?").toLocaleLowerCase();
            if (humanChoice === "rock") {
                humanChoice = choices[0]
                console.log(choices[0])
            } else if (humanChoice === "paper") {
                humanChoice = choices[1]
                console.log(choices[1])
            } else if (humanChoice === "scissors") {
                humanChoice = choices[2]
                console.log(choices[2]);
            }   */
        return humanChoice;
    }

const playGame = function () {

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

    const humanSelection = humanChoice
    const computerSelection = getComputerChoice()

    
        if (humanSelection === computerSelection) {
            console.log(tie,)
        } else if (humanSelection > computerSelection) {
            computerScore++
            console.log(computerWin,)
        } else if (humanSelection < computerSelection) {
            humanScore++
            console.log(humanWin,)
        }
    

    let scores = `You have ${humanScore} score, and the computer have ${computerScore}`
    console.log(scores)
   
  
}

getHumanChoice()


/*const playFiveGame = function () {
    for (let i = 1; i<6; i++ ) {
        playGame()
    }
}
playFiveGame() */