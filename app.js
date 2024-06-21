let listaNumerosSorteados = [];
let numeroMaximo = 30;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMesangemInicial() {
    exibirTextoTela("h1", "Jogo do Número Secreto");
    exibirTextoTela("p", "Escolha um número de 10 a 30.");

}

exibirMesangemInicial(  )

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTextoTela("h1", "Acertou!");

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabéns, número secreto descoberto com ${tentativas} ${palavraTentativa}!`;
        
        exibirTextoTela("p", mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");
    }

    else if (chute > numeroSecreto) {
        exibirTextoTela("p", "Opa, o número é menor do que o chute.");
    }

    else {
        exibirTextoTela("p", "Epa, o número é maior do que o chute.");
    }

    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeElementoLista = listaNumerosSorteados.length;

    if (quantidadeElementoLista == numeroMaximo){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }

    else{
        listaNumerosSorteados.push(numeroEscolhido);
        // console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMesangemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}