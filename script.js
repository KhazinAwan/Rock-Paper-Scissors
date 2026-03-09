
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
        console.log("You lose! paper beats rock")
        computerScore++
    }

    else if(humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! rock beats scissors")
        humanScore++
    }

    else if(humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! paper beats rock")
        humanScore++
    }
    
    else if(humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("You lose! scissors beats paper")
        computerScore++
    }

    else if(humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("You lose! rock beats scissors")
        computerScore++
    }

    else if(humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! scissors beats paper")
        humanScore++
    }

    else {
        console.log("Its a tie!")
    }

}

function winner() {

    if(humanScore > computerScore) {
        console.log("YAYY! HUMAN WON")
    }

    else if(humanScore < computerScore) {
        console.log("Computer won , better luck nice time")
    }

    else {
        console.log("And we have a tie!")
    }
}



function playGame() {

    for(let i = 0 ; i < 5 ; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Human choice: ${humanSelection}` )
        console.log(`Computer choice: ${computerSelection}` )

        playRound(humanSelection , computerSelection)
    }

    console.log("Score results are: ")
    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)

    winner()
    
}

playGame()
