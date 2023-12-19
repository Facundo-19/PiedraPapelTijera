let playerChoice
let computerChoice
const piedraButton = document.getElementById('piedra')
const papelButton = document.getElementById('papel')
const tijeraButton = document.getElementById('tijera')
let resultTextbox = document.getElementById('result')
let computerChoiceBox = document.getElementById('computerChoice')

// Randmonly returns Piedra, Papel o Tijera
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


// Takes both inputs and returns the winner
const checkWinner = (playerChoice, computerChoice) => {
    if (playerChoice == computerChoice) {
        return "Empate"
    } else if ((playerChoice == 'piedra' && computerChoice == 'tijera') ||
               (playerChoice == 'papel' && computerChoice == 'piedra') ||
               (playerChoice == 'tijera' && computerChoice == 'papel')) {
        return 'Gana Player'
    } else {
        return 'Gana Computer'
    }
}

// When PPT button pressed
piedraButton.addEventListener('click', function() {
    playerChoice = 'piedra'
    resultTextbox.textContent = checkWinner(playerChoice, getComputerChoice())
    computerChoiceBox.textContent = computerChoice
})
