let computerScore = 0;
let playerScore = 0;
let maxround = 5;
let currentround = 0;
let currentPlay = document.getElementById('currentPlay');
let tally = document.getElementById('round');



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



function getPlayerChoice(event) {
    let player = event.target.value;
    return player; 

}



let plr = document.querySelectorAll(".choice");
plr.forEach((cho) => {
    cho.addEventListener("click",event =>{
        //
        if (currentround != maxround){
            //
            currentround++;
            tally.textContent = currentround;
            //
            let humanChoice = getPlayerChoice(event);
            let computerChoice = getComputerChoice();
            playRound(computerChoice,humanChoice)
            //
            if (currentround == maxround){
                if (playerScore > computerScore){
                    currentPlay.textContent='Player won!';
                } else if (playerScore < computerScore) {
                    currentPlay.textContent='Computer won!';
                }else {
                    currentPlay.textContent= 'Tie';
                }
            }
        }
    })
});


function playRound(computerChoice,humanChoice) {
        if (computerChoice == humanChoice) {
            currentPlay.textContent= 'Its a Tie!';
        } else if (humanChoice == 'rock' && computerChoice == 'scissors' ) {
            playerScore++;
            currentPlay.textContent='Rock beats scissors!';
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            playerScore++;
            currentPlay.textContent= 'Paper beats rock!';
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            playerScore++;
            currentPlay.textContent= 'Scissors beat paper!';
        } else {
            computerScore++;
            currentPlay.textContent= 'You Lose! ' + computerChoice + ' beats ' + humanChoice; 
        }
    }


