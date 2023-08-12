var round = 1;
var scoreUser = 0;
var scoreComputer = 0;

while(round <= 5){

userInput = '';

alert('Round: ' + round);

while (userInput != 'Rock' && userInput != 'Paper' && userInput != 'Scissor'){
var userInput = prompt("Rock, Paper or Scissor?");
}

alert('You choosed: ' + userInput);

var computerInput = Math.ceil(Math.random() * 3);

switch (computerInput) {
    case 3:
        computerInput = 'Rock';
        break;
    case 2:
        computerInput = 'Paper';
        break;
    case 1:
        computerInput = 'Scissor';
        break;
    default:
        break;
}

alert('The computer choosed: ' + computerInput);

var gameOutput = '';

// User choosed Rock

if (userInput == 'Rock' && computerInput == 'Rock') {
    gameOutput = 'Tie';
}

else if (userInput == 'Rock' && computerInput == 'Paper') {
    gameOutput = 'Lost';
}

else if (userInput == 'Rock' && computerInput == 'Scissor') {
    gameOutput = 'Win';
}

// User choosed Paper

else if (userInput == 'Paper' && computerInput == 'Rock') {
    gameOutput = 'Win';
}

else if (userInput == 'Paper' && computerInput == 'Paper') {
    gameOutput = 'Tie';
}

else if (userInput == 'Paper' && computerInput == 'Scissor') {
    gameOutput = 'Lost';
}

// User choosed Scissor

else if (userInput == 'Scissor' && computerInput == 'Rock') {
    gameOutput = 'Lost';
}

else if (userInput == 'Scissor' && computerInput == 'Paper') {
    gameOutput = 'Win';
}

else if (userInput == 'Scissor' && computerInput == 'Scissor') {
    gameOutput = 'Tie';
}

if (gameOutput == 'Win'){
    scoreUser++;
}

if (gameOutput == 'Lost') {
    scoreComputer++;
}

round++;

alert(gameOutput);

}

if(scoreUser > scoreComputer) {
    alert('You won the game! :)');
}

if(scoreComputer > scoreUser) {
    alert('You lost the game! :(');
}

if (scoreComputer == scoreUser) {
    alert('It\'s a tie :S');
}