console.log("Hello World");


 function getPlayerChoice() {
    let playerchoice = prompt("Rock, paper or scissors?").toUpperCase();

    if (playerchoice == "ROCK" || playerchoice == "PAPER" || playerchoice == "SCISSORS" ) {
        return playerchoice
      }
      //turn back and prompt the user again if the input isn't valid
    else {
        return getPlayerChoice()
    }  
 }

 

 function getComputerChoice() {
    const randomNumb = Math.floor(Math.random() * 3) + 1
    console.log(randomNumb)

    let computerchoice = ""

    if (randomNumb == 1) {
        computerchoice = "ROCK"
    } 
    else if (randomNumb == 2) {
        computerchoice = "PAPER"
    } 
    else if (randomNumb == 3) {
        computerchoice = "SCISSORS"
    } 

    return computerchoice
 }


 
function playRound(playerSelection, computerSelection) {

    let result = ""

    if (playerSelection == computerSelection) {
        result = "DRAW"
    } 

    if (playerSelection == "ROCK") {
        if (computerSelection == "SCISSORS") {
            result = "You Win! Rock beats Scissors"    
        } 
        else if (computerSelection == "PAPER") {
            result = "You Lose! Paper beats Rock"
        } 
    } 

    if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            result = "You Win! Paper beats Rock"
        } 
        else if (computerSelection == "SCISSORS") {
            result = "You Lose! Scissors beats Paper"
        } 
    } 

    if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            result = "You Lose! Rock beats Scissors"
        } 
        else if (computerSelection == "PAPER") {
            result = "You Win! Scissors beats Paper"
        } 
    } 

    console.log(result)
    return result
    
  }




var playerSelection = getPlayerChoice() 

var computerSelection = getComputerChoice(); 

playRound(playerSelection, computerSelection)



