window.alert('Seja bem vindo ao site!')

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/index/PS5-vs-Xbox-Series-X.png') {
        minhaImagem.setAttribute ('src','imagens/index/jogosreunidos.png');
    }else{
        minhaImagem.setAttribute ('src','imagens/index/PS5-vs-Xbox-Series-X.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h4');

function defineNomeUsuario(){
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Seja bem vindo ' + meuNome;
}
if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Seja bem vindo ' + nomeGuardado;
}
meuBotao.onclick = function() { defineNomeUsuario();
}
