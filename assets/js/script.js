// Adicionar sombra no header quando abaixar um pouco a página
const header = document.querySelector('#header');
header.classList.add('background-blur');
const headerHeight = header.offsetHeight;
function headerShadow() {
    if(window.scrollY >= 4) {
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


// ao clicar no botão de menu, abir o menu e mostrar o botão de fechá-lo
const btnOpenMenu = document.querySelector('.icon-menu');
const btnCloseMenu = document.querySelector('.icon-close');
const menu = document.querySelector('.menu');

btnOpenMenu.addEventListener('click', function() {
    menu.classList.add('show');
    btnCloseMenu.classList.add('btn-close-show');
    header.classList.add('header-disappear');
    header.classList.remove('background-blur');
});

// ao clicar no botão de fechar menu, fechar o menu e desaparecer o botão de fechá-lo
btnCloseMenu.addEventListener('click', function() {
    menu.classList.remove('show');
    btnCloseMenu.classList.remove('btn-close-show');
    header.classList.remove('header-disappear');
    header.classList.add('background-blur');
});

// Ao clicar nos li, fechar o menu e fazer desaparecer o botão de fechar
const links = document.querySelectorAll('nav .menu ul li a');

for (const link of links) {
    link.addEventListener('click', function() {
        menu.classList.remove('show');
        btnCloseMenu.classList.remove('btn-close-show');
        header.classList.remove('header-disappear');
        header.classList.add('background-blur');
    });
}

window.addEventListener('scroll', function() {
    headerShadow();
    showBtnToUpPage();
});


// alternative images text
const projects = document.querySelectorAll('.front-project');

for(const project of projects) {
    const projectName = project.querySelector('.project-front-name').innerHTML.toLowerCase();
    project.getElementsByTagName('img')[0].alt = "Projeto sobre " + projectName;
}