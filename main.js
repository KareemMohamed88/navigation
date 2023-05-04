const toggle = document.querySelector('.toggle');
const mobileNav = document.querySelector('.mobileNav');

toggle.onclick = function () {
    mobileNav.classList.toggle('active')
}