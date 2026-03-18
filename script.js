
let humanScore = 0
let computerScore = 0
choices = ["rock" , "paper" , "scissors"]


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


    if(humanScore == 5 || computerScore == 5) {

    winner()
    pLayAgainLogic()

    }

}

function pLayAgainLogic() {

    const choiceButtons = document.querySelectorAll(".choice")
    const buttonContainer = document.querySelector(".buttons")

    choiceButtons.forEach((choice) => choice.remove())

    const reset = document.createElement("button")
    reset.textContent = "Play Again"
    reset.classList.add("choice" , "playAgain")
    buttonContainer.appendChild(reset)

    reset.addEventListener("click" , () => {

        humanScore = 0
        computerScore = 0

        humanDisplayScore.textContent = humanScore
        compDisplayScore.textContent = computerScore
        resultMsg.textContent = "LET THE GAME BEGIN!"

        reset.remove()

        addChoiceButtons()

    })
}

function addChoiceButtons() {

    choices.forEach((choice) => {

        const choiceButton = document.createElement("button")
        choiceButton.classList.add("choice")
        choiceButton.textContent = choice

        choiceButton.addEventListener("click" , (e) => {

            const humanChoice = e.target.textContent.toLowerCase()
            const computerChoice = getComputerChoice()

            console.log(humanChoice)

            playRound(humanChoice , computerChoice)
            
            humanDisplayScore.textContent = humanScore
            compDisplayScore.textContent = computerScore
        })
       
        const buttonContainer = document.querySelector(".buttons")
        buttonContainer.appendChild(choiceButton)
    })

}

function winner() {

    if(humanScore == 5) {
        resultMsg.textContent = "YOU WON THE GAME!"
    }

    else {
        resultMsg.textContent = "COMPUTER WON THE GAME!"
    }
}



addChoiceButtons()

const humanDisplayScore = document.querySelector(".human .score")
const compDisplayScore = document.querySelector(".computer .score")
const resultMsg = document.querySelector(".resultMsg")
