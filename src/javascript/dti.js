
// animação de aparecer e sumir com scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const listaveis = document.querySelectorAll("li");
    const divs = document.querySelectorAll("div");
    let lastScrollTop = 0;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = currentScrollTop > lastScrollTop;
  
        if (entry.isIntersecting) {
          if (isScrollingDown) {
            entry.target.classList.add("visible-down");
            entry.target.classList.remove("visible-up");
          } else {
            entry.target.classList.add("visible-up");
            entry.target.classList.remove("visible-down");
          }
        } else {
          entry.target.classList.remove("visible-up", "visible-down");
        }
  
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
      });
    }, { threshold: 0.29});
  
    sections.forEach(section => {
      observer.observe(section);
    });
    listaveis.forEach(li => {
        observer.observe(li);
      });
    divs.forEach(div => {
      observer.observe(div);
    });
  });
  


// Animação dos numeros da home - sec-numeros
let contadoresAnimados = false;

function animarContador(valorFinal, idElemento, duracaoTotal) {
    const elemento = document.getElementById(idElemento);

    if (!elementoVisivelNaTela(elemento) || contadoresAnimados) {
        return;
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
        animarContador(21, 'atendentes', 3000);
        animarContador(107, 'servicos', 3000);
        animarContador(23, 'chamados-milhares', 3000);
        animarContador(73, 'chamados-centenas', 3000);
        animarContador(97 , 'porcentagem-dezena', 3000);
        animarContador(7 , 'porcentagem-unidade', 3000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (!contadoresAnimados) {
        animarContador(21, 'atendentes', 3000);
        animarContador(107, 'servicos', 3000);
        animarContador(23, 'chamados-milhares', 3000);
        animarContador(73, 'chamados-centenas', 3000);
        animarContador(97 , 'porcentagem-dezena', 3000);
        animarContador(7 , 'porcentagem-unidade', 3000);
    }
});


/* menu hamburguer */

    var hamburguer = false;
    

function menuHamburger(){
    var botao_lateral = document.getElementById("botao-lateral")
    var menu_hamburger = document.getElementById("menu-hamburguer")
    var sombra_hamburguer = document.getElementById("sombra-menu-hamburguer")
    var background_bolhas = document.getElementById("bolhas")
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

// pesquisa de tutoriais

const searchInput = document.getElementById('pesq_input');
const divs = document.querySelectorAll('.card');
const noResultsMessage = document.getElementById('mensagem-erro');

const listaTutoriais = document.querySelector('.lista-tutoriais');
searchInput.addEventListener('input', (event) => {
    const searchTerms = event.target.value.toLowerCase().split(' ').filter(Boolean);
    let anyFound = false;

    divs.forEach(div => {

        const divClasses = Array.from(div.classList) .map(className => className.toLowerCase()) .filter(className => !["card", "hidden", "visible-up", "visible-down"].includes(className));
        const found = searchTerms.every(term => divClasses.some(className => className.includes(term)));

        div.style.display = found ? 'block' : 'none';
        if (found) {
            anyFound = true;
        }
    });

    noResultsMessage.style.display = anyFound ? 'none' : 'flex';

    // Adicionar ou remover a classe filtered
    if (anyFound) {
        listaTutoriais.classList.add('filtered');
    } else {
        listaTutoriais.classList.remove('filtered');
    }
});


