let playerScore = 0
let computerScore = 0
const playerScoreDisplay_span = document.getElementById('player-score')
const compScoreDisplay_span = document.getElementById('comp-score')
const resultDisply_p = document.querySelector('.result > p')
const rock_img = document.getElementById('r')
const paper_img = document.getElementById('p')
const scissors_img = document.getElementById('s')
const scoreSeprator = document.getElementById('seprator')

const getComputerChoice = () => {
    const choices = ['r', 'p', 's']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

const reShape = (toReshape) => {
 if(toReshape === 'r') return 'Rock'
 if(toReshape === 'p') return 'Paper'
 return 'Scissors'
}


const win = (playerChoice, computerChoice) => {
    playerScore++
    playerScoreDisplay_span.innerHTML = playerScore
    const smallPlayerWord = 'YOU'.fontsize(2).sub()
    const smallCompWord = 'COMP'.fontsize(2).sub()
    let currentDiv = document.getElementById(playerChoice)
    resultDisply_p.innerHTML = 
    `${reShape(playerChoice)} ${smallPlayerWord} beats ${reShape(computerChoice)} ${smallCompWord} ${'You Win'.fontcolor('#00fa00')} 🔥`
    currentDiv.classList.add('green')
    setTimeout(()=>currentDiv.classList.remove('green'),300)
    playerScoreDisplay_span.classList.add('score-green')
    setTimeout(()=>playerScoreDisplay_span.classList.remove('score-green'),300)
}

const lose = (playerChoice, computerChoice) => {
    computerScore++
    compScoreDisplay_span.innerHTML = computerScore
    const smallPlayerWord = "YOU".fontsize(2).sub()
    const smallCompWord = 'COMP'.fontsize(2).sub()
    let currentDiv = document.getElementById(playerChoice)
    resultDisply_p.innerHTML = 
    `${reShape(playerChoice)} ${smallPlayerWord} loses by ${reShape(computerChoice)} ${smallCompWord} ${'You lost'.fontcolor('red')} 💩`
    currentDiv.classList.add('red')
    setTimeout(()=>currentDiv.classList.remove('red'),300)
    compScoreDisplay_span.classList.add('score-red')
    setTimeout(()=>compScoreDisplay_span.classList.remove('score-red'),300)
}

const draw = (playerChoice, computerChoice) => {
    const smallPlayerWord = 'YOU'.fontsize(2).sub()
    const smallCompWord = 'COMP'.fontsize(2).sub()
    let currentDiv = document.getElementById(playerChoice)
    resultDisply_p.innerHTML = 
    `${reShape(playerChoice)} ${smallPlayerWord} equals ${reShape(computerChoice)} ${smallCompWord} ${'That\'s draw'.fontcolor('yellow')} 😃`
    currentDiv.classList.add('yellow')
    setTimeout(()=>currentDiv.classList.remove('yellow'),300)
    scoreSeprator.classList.add('score-yellow')
    setTimeout(()=>scoreSeprator.classList.remove('score-yellow'),300)
}

const game = (playerChoice) => {
    const computerChoice = getComputerChoice()
    switch (playerChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(playerChoice, computerChoice)
            break
        case 'sr':
        case 'rp':
        case 'ps':
            lose(playerChoice, computerChoice)
            break
        case 'ss':
        case 'rr':
        case 'pp':
            draw(playerChoice, computerChoice)

    }
}

const main = () => {

    rock_img.addEventListener('click', () => game('r'))
    paper_img.addEventListener('click', () => game('p'))
    scissors_img.addEventListener('click', () => game('s'))

}

main()
