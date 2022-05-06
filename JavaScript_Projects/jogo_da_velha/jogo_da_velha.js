
let player1 = true;
let player2 = false;
let drawCounter = 0
let countX = 0, countO = 0;
let s1 = true, s2 = true, s3 = true, s4 = true, s5 = true, s6 = true, s7 = true, s8 = true, s9 = true;
let squarePositions = [["", "", ""],["", "", ""],["", "", ""],["", "", ""],
["", "", ""],["", "", ""],["", "", ""],["", "", ""]]; //linha1, linha2, linha3, coluna1, coluna2, coluna3, diagonal1, diangonal2
let x = [], y = [] //posições dos quadrados, array[x][y]
let controlVariable = "";
let controlBoolean = false;
let winnerParag = document.getElementById('winner')
let player1Won = false, player2Won = false;

function playersTurns() {
    if (player1 && controlBoolean) {
        controlVariable.style.backgroundImage = "url('150px-x.png')"
        for (let i = 0; i < x.length; i++){
            squarePositions[x[i]][y[i]] = 'X'
        }
        player1 = false
        player2 = true
        playerWon()
    } else if (player2 && controlBoolean) {
        controlVariable.style.backgroundImage = "url('150px-O.png')"
        for (let i = 0; i < x.length; i++){
            squarePositions[x[i]][y[i]] = 'O'
        }
        player2 = false
        player1 = true
        playerWon()
    }
}
function playerWon() {
    drawCounter += 1
    for (let i = 0; i < squarePositions.length; i++) {
        for (let a = 0; a < squarePositions[i].length; a++) {
            if (squarePositions[i][a] === 'X') {
                countX += 1
            } else if (squarePositions[i][a] === 'O') {
                countO += 1
            }
        }
        if (countX === 3) {
            player2 = false
            winnerParag.textContent = 'JOGADOR 1 VENCEU!'
            player1Won = true
        } else if (countO === 3) {
            player1 = false
            winnerParag.textContent = 'JOGADOR 2 VENCEU!'
            player2Won = true
        }
        countX = 0
        countO = 0
    }
    if (drawCounter === 9 && player2Won === false && player1Won === false) {
        winnerParag.textContent = 'EMPATE!'
    }
}
function square1() {
    x = [0,3,6]
    y = [0,0,0]
    controlBoolean = s1
    controlVariable = document.getElementById('square-1')
    playersTurns()
    s1 = false
}
function square2() {
    x = [0,4]
    y = [1,0]
    controlBoolean = s2
    controlVariable = document.getElementById('square-2')
    playersTurns()
    s2 = false
}
function square3() {
    x = [0,5,7]
    y = [2,0,0]
    controlBoolean = s3
    controlVariable = document.getElementById('square-3')
    playersTurns()
    s3 = false
}
function square4() {
    x = [1,3]
    y = [0,1]
    controlBoolean = s4
    controlVariable = document.getElementById('square-4')
    playersTurns()
    s4 = false
}
function square5() {
    x = [1,4,6,7]
    y = [1,1,1,1]
    controlBoolean = s5
    controlVariable = document.getElementById('square-5')
    playersTurns()
    s5 = false
}
function square6() {
    x = [1,5]
    y = [2,1]
    controlBoolean = s6
    controlVariable = document.getElementById('square-6')
    playersTurns()
    s6 = false
}
function square7() {
    x = [2,3,7]
    y = [0,2,2]
    controlBoolean = s7
    controlVariable = document.getElementById('square-7')
    playersTurns()
    s7 = false
}
function square8() {
    x = [2,4]
    y = [1,2]
    controlBoolean = s8
    controlVariable = document.getElementById('square-8')
    playersTurns()
    s8 = false
}
function square9() {
    x = [2,5,6]
    y = [2,2,2]
    controlBoolean = s9
    controlVariable = document.getElementById('square-9')
    playersTurns()
    s9 = false
}