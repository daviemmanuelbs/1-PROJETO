// --- 1. ALTERAR MODO ESCURO / MODO CLARO ---
const btnCor = document.getElementById('btn-cor');

btnCor.addEventListener('click', () => {
    document.body.classList.toggle('modo-claro');

    if (document.body.classList.contains('modo-claro')) {
        btnCor.textContent = 'Ativar Modo Escuro';
    } else {
        btnCor.textContent = 'Ativar Modo Claro';
    }
});

// --- 2. CALCULADORA DE SOMA SIMPLES ---
const btnSomar = document.getElementById('btn-somar');

btnSomar.addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const resultadoTexto = document.getElementById('resultado-soma');

    if (isNaN(n1) || isNaN(n2)) {
        resultadoTexto.textContent = 'Preencha os dois números!';
        return;
    }

    const soma = n1 + n2;
    resultadoTexto.textContent = `Resultado: ${soma}`;
});