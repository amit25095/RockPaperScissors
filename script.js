const CHOICES = ['Rock', 'Scissors', 'Paper'];
const COMPUTER_WIN = 0;
const PLAYER_WIN = 1;
const TIE = 3;

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerIndex = CHOICES.indexOf(playerSelection[0].toUpperCase() + playerSelection.slice(1));
    computerIndex = CHOICES.indexOf(computerSelection[0].toUpperCase() + computerSelection.slice(1));

    let winner = TIE;

    if (playerIndex == -1)
        playerIndex = 0;

    if (playerIndex === computerIndex) {
        console.log("It's a tie!");
        winner = TIE;
    }

    else if ((playerIndex + 1) % CHOICES.length === computerIndex) {
        console.log(`You Won! ${CHOICES[playerIndex]} beats ${CHOICES[computerIndex]}`);
        winner = PLAYER_WIN;
    }

    else {
        console.log(`You Lose! ${CHOICES[computerIndex]} beats ${CHOICES[playerIndex]}`);
        winner = COMPUTER_WIN;
    }

    return winner;
}

// function game() {
//     let computerPoints = playerPoints = 0;

//     for (let i = 0; i < 5; i++) {
//         // const playerChoice = prompt("Enter choice (rock, paper, scissors)");
//         const res = playRound(playerChoice, computerPlay());

//         if (res == COMPUTER_WIN)
//             computerPoints++;

//         else if (res == PLAYER_WIN)
//             playerPoints++;
//     }

//     if (computerPoints > playerPoints)
//         console.log("You lost the game! maybe next time...");

//     else if (computerPoints < playerPoints)
//         console.log("You won the game! congratulations!");

//     else
//         console.log("It's a tie! GG for both");
// }

// game();