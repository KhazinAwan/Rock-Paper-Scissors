
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

function playRound(humanChoice , computerChoice) {

    if(humanChoice == 'rock' && computerChoice == 'paper') {
        resultMsg.textContent = "You lose! paper beats rock"
        computerScore++
    }

    else if(humanChoice == 'rock' && computerChoice == 'scissors') {
        resultMsg.textContent = "You win! rock beats scissors"
        humanScore++
    }

    else if(humanChoice == 'paper' && computerChoice == 'rock') {
        resultMsg.textContent = "You win! paper beats rock" 
        humanScore++
    }
    
    else if(humanChoice == 'paper' && computerChoice == 'scissors') {
        resultMsg.textContent = "You lose! scissors beats paper"
        computerScore++
    }

    else if(humanChoice == 'scissors' && computerChoice == 'rock') {
        resultMsg.textContent = "You lose! rock beats scissors" 
        computerScore++
    }

    else if(humanChoice == 'scissors' && computerChoice == 'paper') {
        resultMsg.textContent = "You win! scissors beats paper"
        humanScore++
    }

    else {
        resultMsg.textContent = "Its a tie!"
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

const choices = document.querySelectorAll(".choice")
const resultMsg = document.querySelector(".resultMsg")

choices.forEach( (choice) => {
    choice.addEventListener("click" , (e) => {
        const humanChoice = e.target.textContent.toLowerCase()
        const computerChoice = getComputerChoice()
        console.log(humanChoice)
        console.log(computerChoice)
        playRound(humanChoice , computerChoice)
    })
})


/*function playGame() {

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
    
}*/

//playGame()
