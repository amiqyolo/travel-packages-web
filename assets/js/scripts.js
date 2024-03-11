let nav = document.querySelector('nav');
window.addEventListener('scroll', (even) => {
    if (document.documentElement.scrollTop > 30) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}