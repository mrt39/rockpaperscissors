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
    let winner = ""

    if (playerSelection == computerSelection) {
        result = "DRAW"
    } 

    if (playerSelection == "ROCK") {
        if (computerSelection == "SCISSORS") {
            result = "You Win! Rock beats Scissors" 
            winner = "PLAYER"   
        } 
        else if (computerSelection == "PAPER") {
            result = "You Lose! Paper beats Rock"
            winner = "COMPUTER"
        } 
    } 

    if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            result = "You Win! Paper beats Rock"
            winner = "PLAYER"
        } 
        else if (computerSelection == "SCISSORS") {
            result = "You Lose! Scissors beats Paper"
            winner = "COMPUTER"
        } 
    } 

    if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            result = "You Lose! Rock beats Scissors"
            winner = "COMPUTER"
        } 
        else if (computerSelection == "PAPER") {
            result = "You Win! Scissors beats Paper"
            winner = "PLAYER"
        } 
    } 

    console.log(result)
    return winner
    
  }

function game(times) {

    var playerWinCount = 0
    var computerWinCount = 0

    for (let i = 0; i < times; i++) {

        //we get the playerchoice and computerchoice for every round
        var playerSelection = getPlayerChoice();
        var computerSelection = getComputerChoice(); 
        winnerOfRound = playRound(playerSelection, computerSelection);

        if (winnerOfRound == "PLAYER"){
            playerWinCount ++ 
        } 

        else if (winnerOfRound == "COMPUTER"){
            computerWinCount ++ 
        } 
     }

    if (playerWinCount == computerWinCount){
        console.log(
        `SCORE:
        PLAYER: ${playerWinCount} 
        COMPUTER: ${computerWinCount}
        
        IT'S A DRAW! `)
    } 

    else if (playerWinCount > computerWinCount){
        console.log(
        `SCORE:
        PLAYER: ${playerWinCount} 
        COMPUTER: ${computerWinCount}
        
        YOU WIN! `)
    } 

    else if (playerWinCount < computerWinCount){
        console.log(
        `SCORE:
        PLAYER: ${playerWinCount} 
        COMPUTER: ${computerWinCount}
        
        COMPUTER WINS! `)
    } 


 }

 



//var playerSelection = getPlayerChoice(); 

//var computerSelection = getComputerChoice(); 

//playRound(playerSelection, computerSelection);

game(3);