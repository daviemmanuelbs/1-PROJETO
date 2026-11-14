
const btnCor = document.getElementById('btn-cor');
const secoes = document.querySelectorAll('section');
const footer = document.querySelector('footer');

const temas = [
    { fundo: 'black', texto: 'white' },
    { fundo: '#0d1b2a', texto: '#e0e1dd' }, 
    { fundo: '#1b263b', texto: '#ffffff' },
    { fundo: '#2b1d1d', texto: '#ffedd8' }  
];

let temaAtual = 0;

btnCor.addEventListener('click', () => {
    temaAtual = (temaAtual + 1) % temas.length;
    const corEscolhida = temas[temaAtual];

    document.body.style.backgroundColor = corEscolhida.fundo;
    footer.style.backgroundColor = corEscolhida.fundo;

    secoes.forEach(secao => {
        secao.style.backgroundColor = corEscolhida.fundo;
    });
});


const display = document.getElementById('display');

function adicionarValor(valor) {
    if (display.value === 'Erro') {
        display.value = '';
    }
    display.value += valor;
}

function limparDisplay() {
    display.value = '';
}

function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        if (display.value.trim() === '') return;
        const resultado = Function('"use strict";return (' + display.value + ')')();
        
        if (!isFinite(resultado)) {
            display.value = 'Erro';
        } else {
            display.value = Number(resultado.toFixed(8));
        }
    } catch {
        display.value = 'Erro';
    }
}