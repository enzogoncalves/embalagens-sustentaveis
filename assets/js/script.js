// Adicionar sombra no header quando abaixar um pouco a página
const header = document.querySelector('#header');
header.classList.add('background-blur');

const headerHeight = header.offsetHeight;
function headerShadow() {
    if(window.scrollY >= 10) {
        header.classList.add('header-box-shadow');
    } else {
        header.classList.remove('header-box-shadow');
    }
}

// mostrar botão de voltar ao topo da página ao descer a página
function showBtnToUpPage() {
    if (window.scrollY >= 300) {
        btnUpPage.classList.add('toUpPage-show');
    } else {
        btnUpPage.classList.remove('toUpPage-show');
    }
}

// faz o botão fazer a página voltar para o topo
const btnUpPage = document.querySelector('.toUpPage');

btnUpPage.addEventListener('click', function() {
    scrollTo(0, 0);
});


const btnOpenMenu = document.querySelector('.icon-menu');
const btnCloseMenu = document.querySelector('.icon-close');
const menu = document.querySelector('.menu');

// ao clicar no botão de menu, abir o menu e mostrar o botão de fechá-lo
btnOpenMenu.addEventListener('click', function() {
    menu.classList.add('show');
    btnCloseMenu.classList.add('btn-close-show');
    header.classList.remove('background-blur');
});

// ao clicar no botão de fechar menu, fechar o menu e desaparecer o botão de fechá-lo
btnCloseMenu.addEventListener('click', function() {
    menu.classList.remove('show');
    btnCloseMenu.classList.remove('btn-close-show');
    header.classList.add('background-blur');
});

const links = document.querySelectorAll('nav .menu ul li a');

// Ao clicar nos li, fechar o menu e fazer desaparecer o botão de fechar
for (const link of links) {
    link.addEventListener('click', function() {
        menu.classList.remove('show');
        btnCloseMenu.classList.remove('btn-close-show');
    });
}

window.addEventListener('scroll', function() {
    headerShadow();
    showBtnToUpPage();
});
