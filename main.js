let playerChoice
let computerChoice
const piedraButton = document.getElementById('piedra')
const papelButton = document.getElementById('papel')
const tijeraButton = document.getElementById('tijera')
let resultTextbox = document.getElementById('result')
let computerChoiceBox = document.getElementById('computerChoice')

// Randmonly returns piedra, papel o tijera
const getComputerChoice = () => {
    computerChoice = Math.floor(Math.random() * 3)
    switch(computerChoice) {
        case 0:
            computerChoice = 'piedra'
            return computerChoice
        case 1:
            computerChoice = 'papel'
            return computerChoice
        case 2:
            computerChoice = 'tijera'
            return computerChoice
    }
}

// Take's both choices and returns the winner's message
const checkWinner = (playerChoice, computerChoice) => {
    if (playerChoice == computerChoice) {
        return "Empate :("
    } else if ((playerChoice == 'piedra' && computerChoice == 'tijera') ||
               (playerChoice == 'papel' && computerChoice == 'piedra') ||
               (playerChoice == 'tijera' && computerChoice == 'papel')) {
        return 'Gano Player!'
    } else {
        return 'Gano Compu!'
    }
}

// When PPT button pressed -> Assign player choice to it's variable ->
// Show the winner and computer's choice.
piedraButton.addEventListener('click', function() {
    playerChoice = 'piedra'
    resultTextbox.textContent = checkWinner(playerChoice, getComputerChoice())
    computerChoiceBox.textContent = computerChoice
})

papelButton.addEventListener('click', function() {
    playerChoice = 'papel'
    resultTextbox.textContent = checkWinner(playerChoice, getComputerChoice())
    computerChoiceBox.textContent = computerChoice
})

tijeraButton.addEventListener('click', function() {
    playerChoice = 'tijera'
    resultTextbox.textContent = checkWinner(playerChoice, getComputerChoice())
    computerChoiceBox.textContent = computerChoice
})
