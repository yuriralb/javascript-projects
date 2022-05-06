const layoutEl = document.getElementById('layout')
const excluirFuncionario = document.getElementById('excluir-funcionario')
let localStorageKeys = []
let count = 0
let elem = localStorage.key(count)
while (elem != null) {
    localStorageKeys.push(elem)
    count += 1
    elem = localStorage.key(count)
}
let localLen = localStorageKeys.length

showItem()

function showItem() {
    let funcionario = null
    let innerHtmlString = ` <div class="modelo" id="guia">
                                <p>Nome</p>
                                <p>Email</p>
                                <p>Função</p>
                                <p>Idade</p>
                                <p>X</p>
                            </div>
                            <div class="modelo">
                                <p>Yuri Rocha de Albuquerque</p>
                                <p>yuri.albuquerque96@gmail.com</p>
                                <p>Programador</p>
                                <p>19</p>
                                <a href="" id="excluir-funcionario">X</a>
                            </div>`
    for (let i = 0; i < localLen; i++) {
        if (localStorageKeys[i] != null) {
            funcionario = JSON.parse(localStorage.getItem(localStorageKeys[i]))
            innerHtmlString +=      
                    `<div class="modelo">
                        <p>${funcionario.nome}</p>
                        <p>${funcionario.email}</p>
                        <p>${funcionario.funcao}</p>
                        <p>${funcionario.idade}</p>
                        <a href="" id="excluir-funcionario" onclick="excluir(this, '${funcionario.nome}')">X</a>
                    </div>`
        }
    }
    console.log(innerHtmlString)
    layoutEl.innerHTML = innerHtmlString
}

function excluir(elem, nome) {
    localStorage.removeItem(nome)
    delete localStorageKeys[localStorageKeys.indexOf(nome)]
    showItem()
}