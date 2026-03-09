
let humanScore = 0
let computerScore = 0


function getComputerChoice() {

    let num = Math.floor(Math.random() * 3)

    if(num == 0) {
        return 'rock'
    }

    else if(num == 1) {
        return 'paper'
    }

    else {
        return 'scissors'
    }

}

function getHumanChoice() {

    let input = prompt("Enter your choice: ")

    input = input.toLowerCase()

    return input

}

function playRound(humanChoice, computerChoice) {
  
    if(humanChoice == 'rock' && computerChoice == 'paper') {
        console.log("You lose! Paper beats rock")
        computerScore++
    }

    else if(humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You lose! Paper beats rock")
        humanScore++
    }

    if(humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You lose! Paper beats rock")
        humanScore++
    }
    
    if(humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("You lose! Paper beats rock")
        computerScore++
    }

    if(humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("You lose! Paper beats rock")
        computerScore++
    }

    if(humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You lose! Paper beats rock")
        humanScore++
    }

    else {
        console.log("Its a tie!")
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


console.log(getHumanChoice())