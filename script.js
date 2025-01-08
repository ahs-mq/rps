let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    num = Math.random() * (3 - 0) + 0;
    num = Math.floor(num)
    if ( num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let player = prompt('rock, paper or scissors?');
    player = player.toLowerCase();
    return player; 
}


let computerChoice = getComputerChoice()
let humanChoice= getPlayerChoice()

console.log(computerChoice)
console.log(humanChoice)


function playRound(computerChoice,humanChoice) {
    if (computerChoice == humanChoice) {
        return 'Its a Tie!';
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' ) {
        return 'Rock beats scissors!'
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        return 'Paper beats rock!'
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        return 'Scissors beat paper!'
    } else return 'You Lose ' + computerChoice + ' beats ' + humanChoice;

}

console.log(playRound(computerChoice,humanChoice))