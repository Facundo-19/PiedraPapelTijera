let playerChoice
const piedraButton = document.getElementById('piedra')
const papelButton = document.getElementById('papel')
const tijeraButton = document.getElementById('tijera')

// Randmonly returns Piedra, Papel o Tijera
const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3)
    switch(computerChoice) {
        case 0:
            return "Piedra"
        case 1:
            return "Papel"
        case 2:
            return "Tijera"
    }
}


// Takes both inputs and returns the winner
const playRound = (playerChoice, computerChoice) => {
    if (playerChoice == computerChoice) {
        return "Empate"
    } else if (playerChoice) {

    }
}

