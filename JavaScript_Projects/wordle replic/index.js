let guess = ''
let count = 0
let countInput = 0
let hasWon = false
const playerWon = document.getElementById('player-won')
const playerLost = document.getElementById('player-lost')
const showAnswer = document.getElementById('show-answer')
const layoutEl = document.getElementById('layout')
const answers = ['ábaco', 'abadá', 'abrir', 'ácaro', 'achar', 'ácido', 'açude', 'adaga', 'adega', 'adiar', 'adubo', 'afiar', 'agogo', 'aguar', 'águia', 'aipim', 'alado', 'álbum', 'amigo', 'amora', 'andar', 'anzol', 'apito', 'araça', 'arara', 'aratu', 'arder', 'areia', 'arpão', 'arroz', 'assar', 'atobá', 'átomo', 'atrás', 'aveia', 'avelã', 'avião', 'axila', 'azedo', 'babar', 'bacia', 'bacon', 'bagre', 'balão', 'balde', 'balsa', 'bambu', 'banco', 'banda', 'bando', 'banho', 'banjo', 'barba', 'barco', 'barro', 'bater', 'batom', 'bauru', 'beber', 'berço', 'betta', 'bicar', 'bisão', 'bloco', 'blusa', 'boate', 'bocal', 'bócio', 'boiar', 'boina', 'bolha', 'bolsa', 'bolso', 'bomba', 'bonde', 'bongô', 'botão', 'braço', 'bravo', 'brega', 'broca', 'bruxa', 'bucha', 'buquê', 'burca', 'cabra', 'cação', 'caçar', 'cacau', 'cacho', 'cacto', 'caído', 'caixa', 'calar', 'calau', 'calça', 'calmo', 'calor', 'canga', 'canil', 'canoa', 'canto', 'capim', 'capuz', 'caqui', 'carga', 'carne', 'carpa', 'carro', 'carta', 'casar', 'casca', 'caspa', 'caule', 'cavar', 'cerca', 'cervo', 'cesta', 'cetro', 'chalé', 'chato', 'chave', 'chefe', 'cheio', 'chopp', 'chulé', 'chuva', 'cidra', 'cinto', 'circo', 'cisco', 'cisne', 'clara', 'claro', 'clava', 'clube', 'coala', 'cobra', 'cocar', 'coçar', 'cofre', 'coifa', 'colar', 'comer', 'conga', 'cópia', 'corda', 'coroa', 'corvo', 'couve', 'craca', 'cravo', 'crepe', 'crina', 'cueca', 'cuíca', 'cupim', 'curar', 'curau', 'curió', 'curry', 'curto', 'curva', 'cutia', 'damas', 'dardo', 'dedal', 'dente', 'dingo', 'disco', 'dócil', 'doido', 'domar', 'draga', 'ducha', 'ebola', 'esqui', 'facão', 'fácil', 'faixa', 'falar', 'falir', 'faraó', 'farda', 'farol', 'farto', 'fatal', 'fatia', 'fauna', 'febre', 'feliz', 'fêmur', 'fênix', 'ferir', 'feroz', 'festa', 'filha', 'filho', 'fogão', 'foice', 'folha', 'forma', 'forno', 'forte', 'fraco', 'frear', 'frito', 'frota', 'fugir', 'fundo', 'funil', 'furão', 'furar', 'fuzil', 'gaita', 'galho', 'gamão', 'gambá', 'ganso', 'ganzá', 'garça', 'garfo', 'garoa', 'garra', 'gênio', 'gesso', 'gibão', 'glacê', 'globo', 'gloss', 'gnomo', 'golfe', 'gongo', 'gorro', 'grade', 'grilo', 'gripe', 'guará', 'guiar', 'harpa', 'herói', 'hiena', 'horta', 'hotel', 'iaque', 'índio', 'irara', 'vidro']
const answer = answers[getRandomNumber()].toLocaleUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
const boxl1_0 = document.getElementById('box-l1-0'), boxl2_0 = document.getElementById('box-l2-0'), boxl3_0 = document.getElementById('box-l3-0'), boxl4_0 = document.getElementById('box-l4-0'), boxl5_0 = document.getElementById('box-l5-0'), boxl6_0 = document.getElementById('box-l6-0')
const boxl1_1 = document.getElementById('box-l1-1'), boxl2_1 = document.getElementById('box-l2-1'), boxl3_1 = document.getElementById('box-l3-1'), boxl4_1 = document.getElementById('box-l4-1'), boxl5_1 = document.getElementById('box-l5-1'), boxl6_1 = document.getElementById('box-l6-1')
const boxl1_2 = document.getElementById('box-l1-2'), boxl2_2 = document.getElementById('box-l2-2'), boxl3_2 = document.getElementById('box-l3-2'), boxl4_2 = document.getElementById('box-l4-2'), boxl5_2 = document.getElementById('box-l5-2'), boxl6_2 = document.getElementById('box-l6-2')
const boxl1_3 = document.getElementById('box-l1-3'), boxl2_3 = document.getElementById('box-l2-3'), boxl3_3 = document.getElementById('box-l3-3'), boxl4_3 = document.getElementById('box-l4-3'), boxl5_3 = document.getElementById('box-l5-3'), boxl6_3 = document.getElementById('box-l6-3')
const boxl1_4 = document.getElementById('box-l1-4'), boxl2_4 = document.getElementById('box-l2-4'), boxl3_4 = document.getElementById('box-l3-4'), boxl4_4 = document.getElementById('box-l4-4'), boxl5_4 = document.getElementById('box-l5-4'), boxl6_4 = document.getElementById('box-l6-4')
const boxesArray = [
[boxl1_0, boxl1_1, boxl1_2, boxl1_3, boxl1_4],
[boxl2_0, boxl2_1, boxl2_2, boxl2_3, boxl2_4],
[boxl3_0, boxl3_1, boxl3_2, boxl3_3, boxl3_4],
[boxl4_0, boxl4_1, boxl4_2, boxl4_3, boxl4_4],
[boxl5_0, boxl5_1, boxl5_2, boxl5_3, boxl5_4],
[boxl6_0, boxl6_1, boxl6_2, boxl6_3, boxl6_4]
]

//game starts
function renderGame() { //setting boxes styles
    for (let i = 0; i < 5; i++) {
        boxesArray[count][i].setAttribute('maxlength', '1')
        boxesArray[count][i].style.backgroundColor = 'inherit'
        boxesArray[count][i].style.border = 'solid 2px #272727e8'
        boxesArray[count][i].setAttribute('onclick', `modifyBox(this, ${i})`)
    }
}

renderGame()

document.addEventListener('keydown', (event) => { //collect letters typed
    let keyPressed = event.key;
    if (keyPressed != 'Enter' && keyPressed != 'Backspace' && keyPressed.length > 1) {
        keyPressed = ''
    } else if (keyPressed === 'Enter') {
        guess = (boxesArray[count][0].value + boxesArray[count][1].value + boxesArray[count][2].value + boxesArray[count][3].value + boxesArray[count][4].value).toLocaleUpperCase()
        if (guess.length = 5) {
            isTheAnswer(guess)
            countInput = 0
            if (hasWon === false) {
                renderGame()
            }
        }
    } else if (keyPressed === 'Backspace' && hasWon === false) {
        if (boxesArray[count][countInput].value != '') {
            boxesArray[count][countInput].value = ''
        } else {
            if (countInput > 0) {
                countInput -= 1
            }
            boxesArray[count][countInput].value = ''
        }
    } else if (/[a-z]/i.test(keyPressed) && hasWon === false) { //letters become input values
        if (boxesArray[count][countInput].value === '') {
            boxesArray[count][countInput].value = keyPressed.toUpperCase()
            animation(boxesArray[count][countInput])
            countInput = nextBox(countInput)
        }
    }
}, false);

function isTheAnswer(word) { //cheking guess
    let lettersArray = []
    let filteredWord = ''
    let wordArray = word.split('')
    let answerArray = answer.split('')
    if (word === answer) {
        hasWon = true
    }
    for (c = 0; c < 5; c++) { // 1: finding green ones
        if (word[c] === answer[c]) {
            lettersArray.push({
                letter:word[c],
                backColor:'#3aa394', //green
                index:c
            })
            answerArray[c] = '$' // making the remaining letters have the same index as before
            wordArray[c] = '%' // making the remaining letters have the same index as before
        }
    }
    filteredWord = wordArray.join('')
    for (i = 0; i < answerArray.length; i++) { //finding black and yellow ones
        if (answerArray.indexOf(filteredWord[i]) != -1 && filteredWord[i] != '%') {
            for (let j = 0; j < answerArray.length; j++) {
                if (filteredWord[i] === answerArray[j]) {
                    lettersArray.push({
                        letter:filteredWord[i],
                        backColor:'#d3ad69', //yellow
                        index:i
                    })
                    answerArray[j] = '$'
                    break
                }
            }
        } else if (answerArray.indexOf(filteredWord[i]) === -1 && filteredWord[i] != '%'){
            lettersArray.push({
                letter:filteredWord[i],
                backColor:'#312a2c', //black
                index:i
            })
        }
    }
    changeBackground(lettersArray)
}

function changeBackground(arr) { //set box backgroundColor (yellow/green/black)
    colorsArray = ['','','','','']
    for (let i = 0; i < arr.length; i++) {
        if (colorsArray[arr[i].index] === '' || colorsArray[arr[i].index] === '#d3ad69') {
            colorsArray[arr[i].index] = arr[i].backColor
        }
    }
    for (let j = 0; j < 5; j++) {
        boxesArray[count][j].style.backgroundColor = colorsArray[j]
        boxesArray[count][j].style.border = colorsArray[j]
        boxesArray[count][j].setAttribute('readonly', 'readonly')
        boxesArray[count][j].removeAttribute('onclick')
    }
    if (hasWon) {
        playerWon.style.display = 'block'
    }
    count += 1
    if (count === 6 && hasWon === false) {
        playerLost.style.display = 'block'
        showAnswer.style.display = 'block'
        showAnswer.textContent = `A palavra secreta era: ${answer}`
    }
}
function getRandomNumber() {
   return Math.floor(Math.random()*answers.length + 1)
}

function modifyBox(element, num) {
    countInput = num
    document.getElementById("inv-box").focus()
}

function nextBox(actualBox) { //get the next index
    if (actualBox === 4) {
        for (let i = 0; i < 5; i++) {
            if (boxesArray[count][i].value === '') {
                return i
            }
        }
    } else {
        for (let i = actualBox; i < 5; i++) {
            if (boxesArray[count][i].value === '') {
                return i
            }
        }
    }
    return countInput
} 

function sleep(ms) { //animation stuff
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animation(element) { //box animation
    element.style.transform = 'scale(1.3)'
    await sleep(0.1 * 1000)
    element.style.transform = 'scale(1)'
}