//Array of Choices for the game
const choices = ["rock", "paper", "scissors"]
let computerScore = 0
let humanScore = 0
// function to get choice from computer


const startGame = () => {
    const computerChoice = () => {
        // getting random index by Math.random
        const randomIndex = Math.floor(Math.random() * choices.length)
        // returning random choice using the randomIndex
        return choices[randomIndex]
    }
    
    // function to get choice from user
    const humanChoice = () => {
        // prompt that will get choice from user
        let humanChosed = prompt("What's your choice? Rock, Paper or Scissors")
        // if the prompt is empty it will ask use again
        if (humanChosed === "") {
            humanChoice()
        }
        // let user write any case by converting the output to lowecase
        humanChosed = humanChosed.toLowerCase()
        //logic that will detenime that if the input is not from the choice list of game that ask for it again
        if (humanChosed === "rock" || humanChosed === "paper" || humanChosed === "scissors") {
            return humanChosed
        } else {
            humanChoice()
        }
    
    }

//function to play a round of the game
const playRound = (humanChoice, computerChoice) => {


    if (computerChoice === humanChoice) {
        console.log(`Play again! the match was a tie!`);
    } else if (computerChoice === "scissors" && humanChoice === "rock" ||
        computerChoice === "rock" && humanChoice === "paper" ||
        computerChoice === "paper" && humanChoice === "scissors"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }

    console.log(`You choosed: ${humanChoice.toUpperCase()} || Score:${humanScore}`);
    console.log(`Computer choosed: ${computerChoice.toUpperCase()} || Score: ${computerScore}`);
}

let humanSelection = humanChoice()
let computerSelection = computerChoice()
playRound(humanSelection,computerSelection)
// console.log(playRound()); error
    
}

function newGame() {
    for(let i = 0;i<5;i++){
        startGame()
    }
    if(humanScore > computerScore){
        console.log("Congratulations! You Win :)");
    }else{
        console.log("Ahhh! You lose this time!:(");
    }
  let playAgain = prompt(`Do You want to play again!(y/n)`)
  if(playAgain.toLowerCase() === "y"){
    newGame()
  }
}

newGame()
