const CHOICES = ['👊🏼', '✌🏼', '✋🏼'];
const COMPUTER_WIN = 0;
const PLAYER_WIN = 1;
const TIE = 3;

let playerScore = computerScore = 0;

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomChoice];
}

function updateScore() {
    const userScoreDisplay = document.querySelector('.user-score');
    const computerScoreDisplay = document.querySelector('.computer-score');

    let leader = computerScore > playerScore ? computerScoreDisplay : userScoreDisplay;
    let loser = computerScore > playerScore ? userScoreDisplay : computerScoreDisplay;

    if (computerScore === playerScore) {
        leader = null;
        loser = null;

        userScoreDisplay.classList.remove('green');
        userScoreDisplay.classList.add('red');

        computerScoreDisplay.classList.remove('green');
        computerScoreDisplay.classList.add('red');
    }

    userScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (leader && loser) {
        leader.classList.remove('red');
        leader.classList.add('green');

        loser.classList.remove('green');
        loser.classList.add('red');
    }
}

function playRound(e) {
    const computerChoice = document.querySelector('.comp-choice');
    const message = document.querySelector('.message');

    playerIndex = CHOICES.indexOf(this.childNodes[1].textContent);
    computerIndex = CHOICES.indexOf(computerPlay());

    computerChoice.lastChild.textContent = CHOICES[computerIndex];
    computerChoice.style.display = 'block';

    if (playerIndex === computerIndex) {
        message.textContent = 'Tie!';
    }

    else if ((playerIndex + 1) % CHOICES.length === computerIndex) {
        playerScore++;
        message.textContent = 'Good Job! you won the round!';
    }

    else {
        computerScore++;
        message.textContent = 'You lost the round, so sad :(';
    }

    updateScore();
    checkEnd();
}

function checkEnd() {
    if (computerScore === 5 || playerScore === 5) {
        const message = document.querySelector('.message');

        document.querySelectorAll('.selection').forEach(sel => sel.removeEventListener('click', playRound));
        document.querySelectorAll('.selection').forEach(sel => sel.style.cursor = 'default');

        if (computerScore > playerScore) {
            message.textContent = 'You lost the game! maybe next time...';
            message.classList.add('red');
        }

        else if (computerScore < playerScore) {
            message.textContent = 'You won the game! congratulations!';
            message.classList.add('green');
        }

        else {
            message.textContent = 'It\'s a tie! GG for both';
            message.classList.add('blue');
        }
    }

}


document.querySelectorAll('.selection').forEach(sel => sel.addEventListener('click', playRound));
