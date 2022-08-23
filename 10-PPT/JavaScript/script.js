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
    let connfirmar = document.querySelector('#confirmar')
    confirmar.classList.remove('antes')

    let nomeJogador = document.querySelector('#nomeJogador')
    let nomeDisplay = document.querySelector('#nomeDisplay')

    nomeDisplay.innerHTML = nomeJogador.value

}




let resultadoJogador = 0
let resultadoMaquina = 0

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
let rodada = 0
let confirmar = document.querySelector('#confirmar')
confirmar.onclick = function () {
    if (escolha.innerHTML === '...') {
        return
    }else {
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
        
        let linhasRounds = document.querySelector('#linhasRounds')
        rodada +=1

        placarJogadorf = placarJogador.innerHTML
        placarMaquinaf = placarMaquina.innerHTML
        
        let quemGanhou 
        
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

        placarJogadorf = placarJogador.innerHTML
        placarMaquinaf = placarMaquina.innerHTML

        if((placarJogadorf == 3) || (placarMaquinaf == 3)) {
            console.log('acabou')
            //let tirar = document.querySelector('.acao')
            //tirar.classList.add('antes')
            let caixa = document.querySelector('#caixa')
            caixa.classList.remove('antes')

            let jogarNovamente = document.querySelector('#jogarNovamente')
            jogarNovamente.classList.remove('antes')
            let novamente = document.querySelector('#novamente')
            connfirmar = document.querySelector('#confirmar')
            confirmar.classList.add('antes')
            novamente.onclick = function () {
                console.log('recarregar')
                window.location.reload()
            }
        }
        
    }
    
}
