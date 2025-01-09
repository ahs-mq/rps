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

let computerScore = 0;
let playerScore = 0;


//console.log(computerChoice);
//console.log(humanChoice);

function playRound(computerChoice,humanChoice) {
        if (computerChoice == humanChoice) {
            console.log('Its a Tie!');
        } else if (humanChoice == 'rock' && computerChoice == 'scissors' ) {
            playerScore++;
            console.log('Rock beats scissors!');
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            playerScore++;
            console.log('Paper beats rock!');
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            playerScore++
            console.log('Scissors beat paper!');
        } else {
            computerScore++;
            console.log('You Lose! ' + computerChoice + ' beats ' + humanChoice); 
        }
    }

function playGame(){
    for (let i = 0; i < 5; i++) {
        let humanChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
}
    if (playerScore>computerScore){
        return 'Player Win!'
    } else if (computerScore > playerScore){
        return 'Computer Win'
    } else {
        return 'Tie!'
    }
}
console.log(playGame())