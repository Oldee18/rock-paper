let choices = ("rock", "paper", "scissors");

    function getComputerChoice() {
        
        let computerChoice = Math.random();
            if (computerChoice <= 0.33) {
                console.log("The computer choose " + "rock".toUpperCase());
            } else if (computerChoice > 0.33 && computerChoice <= 0.66){
                console.log("The computer choose " + "paper".toUpperCase());
            } else if (computerChoice > 0.66) 
                console.log("The computer choose " + "scissors".toUpperCase());
            }
        
        

getComputerChoice()