CHOICES = ['Rock', 'Scissors', 'Paper'];

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerIndex = CHOICES.indexOf(playerSelection[0].toUpperCase() + playerSelection.slice(1))
    computerIndex = CHOICES.indexOf(computerSelection[0].toUpperCase() + computerSelection.slice(1))

    if (playerIndex === computerIndex)
        console.log("It's a tie!");

    else if ((playerIndex + 1) % CHOICES.length === computerIndex)
        console.log(`You Won! ${CHOICES[playerIndex]} beats ${CHOICES[computerIndex]}`);

    else
        console.log(`You Lose! ${CHOICES[computerIndex]} beats ${CHOICES[playerIndex]}`);
}

playRound("Rock", computerPlay());
