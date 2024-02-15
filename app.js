//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Adivinhas';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Insira um numero de 1 a 10:';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatroio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.4});
}
exibirTextoNaTela('h1', 'Jogo do Adivinhas');
exibirTextoNaTela('p', 'Insira um numero de 1 a 10:');

mensagemInicial()
function verificarChute(){
    let chute = document.querySelector('input').value;

    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'ACERTOU!!!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            if(chute > numeroSecreto){
                exibirTextoNaTela('p', 'o numero secreto é menor');
            }else{
                exibirTextoNaTela('p', 'o numero secreto é maior');
            } 
            tentativas++;
            limparCampo()
        }
}

function gerarNumeroAleatroio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatroio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function novoJogo(){
    numeroSecreto = gerarNumeroAleatroio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    

}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Adivinhas');
    exibirTextoNaTela('p', 'Insira um numero de 1 a 10:');
}