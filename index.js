let playerOutput = document.querySelector('#player-output')
let ComputerOutput = document.querySelector('#computer-output')
let statusOutput = document.querySelector('#status')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')


//Array of Choices for the game
const choices = [rock, paper, scissors]


let computerScore = 0
let humanScore = 0


//get choice from computer
let userChoice = ''
//get choice from user
rock.addEventListener('click',(event)=>{
    userChoice = event.target.id
    startGame()
})
paper.addEventListener('click',(event)=>{
    userChoice = event.target.id
    startGame()
})
scissors.addEventListener('click',(event)=>{
    userChoice = event.target.id
    startGame()
})
//////////////////////////////


const startGame = () => {
    const computerChoice = () => {
        // getting random index by Math.random
        const randomIndex = Math.floor(Math.random() * choices.length)
        // returning random choice using the randomIndex
        return choices[randomIndex].id
        
    }


// function to play a round of the game
const playRound = (humanChoice, computerChoice) => {


    if (computerChoice === humanChoice) {
        statusOutput.textContent = `Play again! the match was a tie!`;
    } else if (computerChoice === "scissors" && humanChoice === "rock" ||
        computerChoice === "rock" && humanChoice === "paper" ||
        computerChoice === "paper" && humanChoice === "scissors"
    ) {
        statusOutput.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++
    } else {
        statusOutput.textContent =`You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++
    }

    playerOutput.textContent = `You choosed: ${humanChoice} || Score:${humanScore}`;
    ComputerOutput.textContent = `Computer choosed: ${computerChoice} || Score: ${computerScore}`;
}

let humanSelection = userChoice
let computerSelection = computerChoice()
playRound(humanSelection,computerSelection)
  
}

// startGame()

// function newGame() {
//     for(let i = 1;i<5;i++){
//         startGame()
//     }
//     if(humanScore > computerScore){
//         console.log("Congratulations! You Win :)");
//     }else if(humanScore === computerScore){
//     console.log("It was a tie!");
//     }else{
//         console.log("Ahhh! You lose this time!:(");
//     }
// //   let playAgain = prompt(`Do You want to play again!(y/n)`)
// //   if(playAgain.toLowerCase() === "y"){
// //     newGame()
// //   }
// }



// newGame()
