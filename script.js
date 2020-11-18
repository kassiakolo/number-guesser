let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Choose random number bewteen 0-9
let generateTarget = () => Math.floor(Math.random(0,9))
let targetNumber = generateTarget()

//Compare whose score is closer to target numebr
let compareGuesses = (humanNumber, computerNumber, targetNumber) => {
    if (targetNumber <= humanNumber < computerNumber || targetNumber >= humanNumber > computerNumber) {
        return true
    } else {
        return false
    }
}

//Function to update winner's score after each round
let updateScore = (winner) => {
    if (winner === 'human') {
        return humanScore += 1;
    } else {
        return computerScore += 1;
    }
}

//Change round number after each round
let advanceRound = () => currentRoundNumber += 1

