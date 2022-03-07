const hamburger = document.querySelector('.nav-toggle');
const navsub = document.querySelector('.menu-left');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    navsub.classList.toggle('collapse')
})