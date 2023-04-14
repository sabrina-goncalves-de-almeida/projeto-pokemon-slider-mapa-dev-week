const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartao(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
};

function mostrarCartao(indiceDoCartao){
    cartoes[indiceDoCartao].classList.add('selecionado');
};

btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length - 1){ 
        esconderCartao();

        cartaoAtual=0;
        mostrarCartao(cartaoAtual);
    }else{
        esconderCartao();
        
        cartaoAtual++;
        mostrarCartao(cartaoAtual);
    };
        
});

btnVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0){
        esconderCartao();

        cartaoAtual=cartoes.length - 1;
        mostrarCartao(cartaoAtual);
    }else{
        esconderCartao();

        cartaoAtual--;
        mostrarCartao(cartaoAtual);
    }
    

});