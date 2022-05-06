const nameEl = document.getElementById('nome')
const emailEl = document.getElementById('email')
const idadeEl = document.getElementById('idade')
const funcaoEl = document.getElementById('funcao')
let funcionarioArray = []
let funcionario = {}

function checkFormu() {
    document.getElementById('form-completed').style.display = 'none'
    collectName()
    collectEmail()
    collectIdade()
    collectFuncao()
    if (funcionarioArray.length === 4) {
        document.getElementById('form-completed').style.display = 'block'
        localStorage.setItem(nameEl.value, JSON.stringify(funcionario))
        funcionarioArray = []
        funcionario = {}
        email.value = ''
        idadeEl.value = ''
        funcaoEl.value = ''
        nameEl.value = ''
    } else {
        funcionarioArray = []
    }
}
function collectName() {
    if (/[a-zA-Z]{3}\s[a-zA-Z]{3}/.test(nameEl.value) && /[0-9%*)(!@#-+¨/.]+/.test(nameEl.value) === false ) {
        if (/name/.test(funcionarioArray.join('')) === false) {
            funcionarioArray.push('name')
        }
        funcionario.nome = nameEl.value
        document.getElementById('invalid-lastname').style.display = 'none'
        document.getElementById('invalid-name').style.display = 'none'
    } else if (/[a-zA-Z]{3}/.test(nameEl.value)) {
        document.getElementById('invalid-name').style.display = 'none'
        document.getElementById('invalid-lastname').style.display = 'block'
    } else {
        document.getElementById('invalid-lastname').style.display = 'none'
        document.getElementById('invalid-name').style.display = 'block'
    }
}

function collectEmail() {
    if (/^[a-z0-9._]+@[a-z0-9]+[.][a-z]{3}([.][a-z]+)?$/i.test(emailEl.value)) {
        funcionario.email = emailEl.value
        document.getElementById('invalid-email').style.display = 'none'
        if (/email/.test(funcionarioArray.join('')) === false) {
            funcionarioArray.push('email')
        }
    } else {
        document.getElementById('invalid-email').style.display = 'block'
    }
}

function collectIdade () {
    const thisYear = new Date().getFullYear()
    if (/19[0-9][0-9]|20[0-1][0-9]/.test(idadeEl.value)) {
        funcionario.idade = thisYear - idadeEl.value
        document.getElementById('invalid-age').style.display = 'none'
        if (/idade/.test(funcionarioArray.join('')) === false) {
            funcionarioArray.push('idade')
        }
    } else {
        document.getElementById('invalid-age').style.display = 'block'
    }
}

function collectFuncao() {
    if (funcaoEl.value != '' && /[0-9]/.test(funcaoEl.value) === false) {
        funcionario.funcao = funcaoEl.value
        document.getElementById('invalid-function').style.display = 'none'
        if (/funcao/.test(funcionarioArray.join('')) === false) {
            funcionarioArray.push('funcao')
        }
    } else {
        document.getElementById('invalid-function').style.display = 'block'
    }
}