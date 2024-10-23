// Animação dos numeros da home - sec-numeros

let contadoresAnimados = false; // Variável de controle

function animarContador(valorFinal, idElemento, duracaoTotal) {
    const elemento = document.getElementById(idElemento);

    // Verifica se o elemento está visível na tela antes de começar a animação
    if (!elementoVisivelNaTela(elemento) || contadoresAnimados) {
        return; // Se o elemento não estiver visível ou já foi animado, não faz nada
    }

    let valorAtual = 0;
    const tempoPasso = duracaoTotal / valorFinal;

    const temporizador = setInterval(() => {
        valorAtual++;
        elemento.textContent = valorAtual;
        if (valorAtual === valorFinal) {
            clearInterval(temporizador);
            contadoresAnimados = true;
        }
    }, tempoPasso);
}

function elementoVisivelNaTela(elemento) {
    const posicao = elemento.getBoundingClientRect();
    return posicao.top >= 0 && posicao.bottom <= window.innerHeight;
}

window.addEventListener('scroll', () => {
    if (!contadoresAnimados) {
        animarContador(2, 'setores', 5000);
        animarContador(21, 'atendentes', 5000);
        animarContador(49, 'servicos', 5000);
        animarContador(13, 'chamados-milhares', 5000);
        animarContador(981, 'chamados-centenas', 5000);
        animarContador(97 , 'porcentagem-dezena', 5000);
        animarContador(7 , 'porcentagem-unidade', 5000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (!contadoresAnimados) {
        animarContador(2, 'setores', 5000);
        animarContador(21, 'atendentes', 5000);
        animarContador(49, 'servicos', 5000);
        animarContador(13, 'chamados-milhares', 5000);
        animarContador(981, 'chamados-centenas', 5000);
        animarContador(97 , 'porcentagem-dezena', 5000);
        animarContador(7 , 'porcentagem-unidade', 5000);
    }
});
