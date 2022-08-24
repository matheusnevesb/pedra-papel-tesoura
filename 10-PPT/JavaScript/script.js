let iniciarJogo = document.querySelector('#iniciarJogo')
let TelaInicio = document.querySelector('.TelaInicio')
let titulo = document.querySelector('.titulo')
let acao = document.querySelector('.acao')
let rounds = document.querySelector('.rounds')
let botoes = document.querySelector('.botoes')
let confirmar = document.querySelector('#confirmar')
let nomeJogador = document.querySelector('#nomeJogador')
let nomeDisplay = document.querySelector('#nomeDisplay')
let pedra = document.querySelector('#pedra')
let papel = document.querySelector('#papel')
let tesoura = document.querySelector('#tesoura')
let escolha = document.querySelector('#escolha')
let placarJogador = document.querySelector('#placarJogador')
let placarMaquina = document.querySelector('#placarMaquina')
let linhasRounds = document.querySelector('#linhasRounds')
let caixa = document.querySelector('#caixa')
let jogarNovamente = document.querySelector('#jogarNovamente')
let novamente = document.querySelector('#novamente')

let resultadoJogador = 0
let resultadoMaquina = 0

let placarJogadorDisplay = 0
let placarMaquinaDisplay = 0

let rodada = 0

let quemGanhou

placarJogador.innerHTML = placarJogadorDisplay
placarMaquina.innerHTML = placarMaquinaDisplay

function iniciarOJogo(){
    TelaInicio.classList.add('antes')
    titulo.classList.remove('antes')
    acao.classList.remove('antes')
    rounds.classList.remove('antes')
    botoes.classList.remove('antes')
    confirmar.classList.remove('antes')

    nomeDisplay.innerHTML = nomeJogador.value
} 

function escolhaPedra() {
    escolha.innerHTML = 'Pedra'
}

function escolhaPapel() {
    escolha.innerHTML = 'Papel'
}

function escolhaTesoura () {
    escolha.innerHTML = 'Tesoura'
}

function gerarEscolhaMaquina(){
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

function inserirRounds() {
    linhasRounds.innerHTML += `
        <div>
            Round ${rodada}:
            ${escolha.innerHTML} 
            X
            ${escolhaMaquina.innerHTML}
            ----------
            ${quemGanhou}
        </div>
        `
}

function jogoNoLoop() {
    if ((placarJogadorf < 3) && (placarMaquinaf < 3)) {
        if ((escolha.innerHTML === 'Pedra') && (escolhaMaquina.innerHTML === 'Pedra')) {
            resultadoJogador += 0
            resultadoMaquina += 0
            quemGanhou = 'Empate!'
        }else if ((escolha.innerHTML === 'Pedra') && (escolhaMaquina.innerHTML === 'Papel')){
            resultadoJogador += 0
            resultadoMaquina += 1
            quemGanhou = 'Maquina Ganhou!'
        }else if ((escolha.innerHTML === 'Pedra') && (escolhaMaquina.innerHTML === 'Tesoura')){
            resultadoJogador += 1
            resultadoMaquina += 0
            quemGanhou = 'Jogador ganhou!'
        }else if ((escolha.innerHTML === 'Papel') && (escolhaMaquina.innerHTML === 'Pedra')) {
            resultadoJogador += 1
            resultadoMaquina += 0
            quemGanhou = 'Jogador ganhou!'
        }else if ((escolha.innerHTML === 'Papel') && (escolhaMaquina.innerHTML === 'Papel')){
            resultadoJogador += 0
            resultadoMaquina += 0
            quemGanhou = 'Empate!'
        }else if ((escolha.innerHTML === 'Papel') && (escolhaMaquina.innerHTML === 'Tesoura')){
            resultadoJogador += 0
            resultadoMaquina += 1
            quemGanhou = 'Maquina ganhou!'
        }else if ((escolha.innerHTML === 'Tesoura') && (escolhaMaquina.innerHTML === 'Tesoura')){
            resultadoJogador += 0
            resultadoMaquina += 0
            quemGanhou = 'Empate!'
        }else if ((escolha.innerHTML === 'Tesoura') && (escolhaMaquina.innerHTML === 'Pedra')) {
            resultadoJogador += 0
            resultadoMaquina += 1
            quemGanhou = 'Maquina ganhou!'
        }else if ((escolha.innerHTML === 'Tesoura') && (escolhaMaquina.innerHTML === 'Papel')){
            resultadoJogador += 1
            resultadoMaquina += 0
            quemGanhou = 'Jogador ganhou!'
        }
        placarJogador.innerHTML = resultadoJogador
        placarMaquina.innerHTML = resultadoMaquina

        inserirRounds()
        
    }
}

function recomecarJogo() {
    if((placarJogadorf == 3) || (placarMaquinaf == 3)) {
        caixa.classList.remove('antes')
        jogarNovamente.classList.remove('antes')
        confirmar.classList.add('antes')
        novamente.onclick = function () {
            window.location.reload()
        }
    }
}

function escolheuOpcao() {
    gerarEscolhaMaquina()
    
    rodada +=1

    placarJogadorf = placarJogador.innerHTML
    placarMaquinaf = placarMaquina.innerHTML
    
    
    jogoNoLoop()

    placarJogadorf = placarJogador.innerHTML
    placarMaquinaf = placarMaquina.innerHTML

    recomecarJogo()
    
}


function botaoConfirmar() {
    if (escolha.innerHTML === '...') {
        return
    }else {
        escolheuOpcao()
    }
        
    
}

iniciarJogo.onclick = iniciarOJogo
pedra.onclick = escolhaPedra
papel.onclick = escolhaPapel
tesoura.onclick = escolhaTesoura
confirmar.onclick = botaoConfirmar