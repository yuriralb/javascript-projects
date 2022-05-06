let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let paragEl = document.getElementById("parag-el")
let startEl = document.getElementById('start-btn')
let newCardBtn = document.getElementById('newcard-btn')
let restart = false
let playerEl = document.getElementById("player-el")
let player = {
    name:'Yuri',
    chips: 189
}
function startGame() {
    if (restart) {
        cards = []
        sum = 0
        restart = false
        hasBlackJack = false
        newCardBtn.style.display = 'block'
        startEl.textContent = 'Start Game'
    }
    isAlive = true
    startEl.style.display = 'none'
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    sum += cards[0] + cards[1]
    playerEl.textContent = player['name'] + ': $' + player['chips']
    renderGame()
}
function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    }
    return randomNumber
}
function renderGame() {
    paragEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {
        paragEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = 'Sum: '
    sumEl.textContent += sum
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = 'BLACKJACK!'
        hasBlackJack = true
        restartGame()
    } else {
        message = 'You are out of the game!'
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
    restartGame()
}
function restartGame() {
    if (isAlive === false || hasBlackJack) {
        startEl.style.display = 'block'
        startEl.textContent = 'Restart Game'
        newCardBtn.style.display = 'none'
        restart = true
    }
}