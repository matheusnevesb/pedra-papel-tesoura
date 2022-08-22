
let pedra = document.querySelector('#pedra')
let papel = document.querySelector('#papel')
let tesoura = document.querySelector('#tesoura')

let escolha = document.querySelector('#escolha')

let placarJogadorDisplay = 0
let placarMaquinaDisplay = 0

let placarJogador = document.querySelector('#placarJogador')
let placarMaquina = document.querySelector('#placarMaquina')

placarJogador.innerHTML = placarJogadorDisplay
placarMaquina.innerHTML = placarMaquinaDisplay

pedra.onclick = function () {
    escolha.innerHTML = 'Pedra'
}

papel.onclick = function () {
    escolha.innerHTML = 'Papel'
}

tesoura.onclick = function () {
    escolha.innerHTML = 'Tesoura'
}

let confirmar = document.querySelector('#confirmar')
confirmar.onclick = function () {
    let maquinaDisplay 
    let maquinaEscolha = Math.floor(Math.random() * 3);
    if (maquinaEscolha === 1) {
        maquinaDisplay = 'Pedra'
    } else if (maquinaEscolha === 2) {
        maquinaDisplay = 'Papel'
    }else if (maquinaEscolha === 0) {
        maquinaDisplay = 'Tesoura'
    }
    escolhaMaquina.innerHTML = maquinaDisplay    
}

