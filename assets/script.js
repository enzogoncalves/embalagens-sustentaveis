const header = document.querySelector('#header');
const headerHeight = header.offsetHeight;
function headerShadow() {
    if(window.scrollY >= headerHeight) {
        header.classList.add('header-box-shadow');
    } else {
        header.classList.remove('header-box-shadow');
    }
}

window.addEventListener('scroll', function() {
    headerShadow();
});