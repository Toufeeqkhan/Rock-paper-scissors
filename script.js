const choices = ["Rock", "Paper", "Scissors"]
let humanScore = 0
let computerScore = 0

//Starting the game Rock Paper Scissors
//function that take random choice for computer
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    // console.log("Computer Selected " + `'${choices[randomIndex]}'`);
    return choices[randomIndex].toLocaleLowerCase()
}

//Get humanChoice
const getHumanChoice = () => {
    let humanChoice = prompt("Select to continue the game.Rock, Paper or Scissors!")

    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice
    } else {
        getHumanChoice()
    }
}
// console.log(getHumanChoice(), getComputerChoice());

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


let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()
playRound(humanChoice, computerChoice)