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


let humanChoice = [];

   // const getHumanChoice = function () {

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
    const divWinner = document.querySelector(".winner")
        if ((humanSelection === choices[0]) && (computerSelection === choices[0])) {
            divWinner.innerHTML = tie
        } else if ((humanSelection === choices[1]) && (computerSelection === choices[1])) {
            divWinner.innerHTML = tie
        } else if ((humanSelection === choices[2]) && (computerSelection === choices[2])) {
            divWinner.innerHTML = tie
        }

        if ((humanSelection === choices[0]) && (computerSelection === choices[2])) {
            divWinner.innerHTML = humanWin
            humanScore++
        } else if ((humanSelection === choices[1]) && (computerSelection === choices[0])) {
            divWinner.innerHTML = humanWin
            humanScore++
        } else if ((humanSelection === choices[2]) && (computerSelection === choices[1])) {
            divWinner.innerHTML = humanWin
            humanScore++
        }

        if ((humanSelection === choices[0]) && (computerSelection === choices[1])) {
            divWinner.innerHTML = computerWin
            computerScore++
        } else if ((humanSelection === choices[1]) && (computerSelection === choices[2])) {
            divWinner.innerHTML = computerWin
            computerScore++
        } else if ((humanSelection === choices[2]) && (computerSelection === choices[0])) {
            divWinner.innerHTML = computerWin
            computerScore++
        }
    const bestFiveWinner = document.querySelector(".bestfivewinner")
        const gameOver = "The computer win the game of the best of 5"
        const playerWin = "You win the game of the best of 5"

    let scores = `You have ${humanScore} score, and the computer have ${computerScore}`
    const divScores = document.querySelector(".scores")
    divScores.innerHTML=scores

        if (humanScore === 5) {
            bestFiveWinner.innerHTML = playerWin
            humanScore = 0
            computerScore = 0
        } else if (computerScore === 5) {
            bestFiveWinner.innerHTML = gameOver
            humanScore = 0
            computerScore = 0
        }

}

//getHumanChoice()


