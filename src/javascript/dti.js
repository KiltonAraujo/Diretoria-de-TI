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


/* menu hamburguer */



var hamburguer = false;
var botao_lateral = document.getElementById("botao-lateral")
var menu_hamburger = document.getElementById("menu-hamburguer")
var sombra_hamburguer = document.getElementById("sombra-menu-hamburguer")
var background_bolhas = document.getElementById("bolhas")

function menuHamburger(){
  hamburguer = !hamburguer;
  if (hamburguer) {
    menu_hamburger.style.transform = "translateX(0)";
    botao_lateral.style.transform = "rotateY(0)";
    botao_lateral.style.right = "0";
    sombra_hamburguer.style.right = "0";
    sombra_hamburguer.style.opacity = "1";
    background_bolhas.style.transform = "translateX(0)"
  } 
  else {
    menu_hamburger.style.transform = "translateX(-301px";
    botao_lateral.style.transform = "rotateY(180deg)";
    botao_lateral.style.right = "-26px";
    sombra_hamburguer.style.right = "100vw";
    sombra_hamburguer.style.opacity = "0";
    background_bolhas.style.transform = "translateX(-402px)"

  }
}

var deslizavel = false;

function listaDeslizavel(){
    deslizavel = !deslizavel;
    if(deslizavel){
      document.getElementById("lista-deslizavel").style.display = "block";
      document.getElementById("lista-deslizavel").style.transform = "translateY(0)";
      
    }
    else{
      document.getElementById("lista-deslizavel").style.display = "none";
      document.getElementById("lista-deslizavel").style.transform = "translateY(-10px)";
    }
  }

/* menu hamburguer - lista interior */