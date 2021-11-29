// Adicionar sombra no header quando abaixar um pouco a página
const header = document.querySelector('#header');
const headerHeight = header.offsetHeight;
function headerShadow() {
    if(window.scrollY >= 10) {
        header.classList.add('header-box-shadow');
    } else {
        header.classList.remove('header-box-shadow');
    }
}

// botão de voltar para o topo da página
const btnUpPage = document.querySelector('.toUpPage');

btnUpPage.addEventListener('click', function() {
    scrollTo(0, 0);
});

window.addEventListener('scroll', function() {
    headerShadow();
});