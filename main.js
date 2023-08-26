var round = 1;
var scoreUser = 0;
var scoreComputer = 0;

var userInput = '';

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let userResults = document.getElementById('user_selection');
let computerResults = document.getElementById('computer_selection');
let gameResults = document.getElementById('game_results');

rock.addEventListener('click', function () {
    if (scoreUser < 5 && scoreComputer < 5) {
    userInput = 'Rock';
    userResults.innerText = 'Rock';
    startRound();
    }
});

paper.addEventListener('click', function () {
    if (scoreUser < 5 && scoreComputer < 5) {
    userInput = 'Paper';
    userResults.innerText = 'Paper';
    startRound();
    }
});

scissors.addEventListener('click', function () {
    if (scoreUser < 5 && scoreComputer < 5) {
    userInput = 'Scissors';
    userResults.innerText = 'Scissors';
    startRound();
    }
});

function startRound() {

var computerInput = Math.ceil(Math.random() * 3);

switch (computerInput) {
    case 3:
        computerInput = 'Rock';
        computerResults.innerText = 'Rock';
        break;
    case 2:
        computerInput = 'Paper';
        computerResults.innerText = 'Paper';
        break;
    case 1:
        computerInput = 'Scissors';
        computerResults.innerText = 'Scissors';
        break;
    default:
        break;
}

var gameOutput = '';

// User choosed Rock

if (userInput == 'Rock' && computerInput == 'Rock') {
    gameOutput = 'Tie';
}

else if (userInput == 'Rock' && computerInput == 'Paper') {
    gameOutput = 'Lost';
}

else if (userInput == 'Rock' && computerInput == 'Scissors') {
    gameOutput = 'Win';
}

// User choosed Paper

else if (userInput == 'Paper' && computerInput == 'Rock') {
    gameOutput = 'Win';
}

else if (userInput == 'Paper' && computerInput == 'Paper') {
    gameOutput = 'Tie';
}

else if (userInput == 'Paper' && computerInput == 'Scissors') {
    gameOutput = 'Lost';
}

// User choosed Scissor

else if (userInput == 'Scissors' && computerInput == 'Rock') {
    gameOutput = 'Lost';
}

else if (userInput == 'Scissors' && computerInput == 'Paper') {
    gameOutput = 'Win';
}

else if (userInput == 'Scissors' && computerInput == 'Scissors') {
    gameOutput = 'Tie';
}

if (gameOutput == 'Win'){
    scoreUser++;
}

if (gameOutput == 'Lost') {
    scoreComputer++;
}

gameResults.innerHTML += 'Round: ' + round + ' : ' + gameOutput + '<br>';

round++;

if (scoreUser == 5) {
    alert('You won the game! :)');
}

if (scoreComputer == 5) {
    alert('You lost the game! :(');
}

}