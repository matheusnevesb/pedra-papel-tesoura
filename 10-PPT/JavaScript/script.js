let iniciarJogo = document.querySelector('#iniciarJogo')

iniciarJogo.onclick = function () {
    let TelaInicio = document.querySelector('.TelaInicio')
    TelaInicio.classList.add('antes')
    let titulo = document.querySelector('.titulo')
    titulo.classList.remove('antes')
    let acao = document.querySelector('.acao')
    acao.classList.remove('antes')
    let rounds = document.querySelector('.rounds')
    rounds.classList.remove('antes')
    let botoes = document.querySelector('.botoes')
    botoes.classList.remove('antes')

    let nomeJogador = document.querySelector('#nomeJogador')
    console.log(nomeJogador)
}






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
    
    let rounds = document.querySelector('rounds')
    rounds.innerHTML = `
    <div>
        Round 1:
        escolha do jogador 
        X
        escolha da Maquina
        quem ganhou 
    </div>
    `
}

