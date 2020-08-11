// select elements

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".navlist")

navToggle.addEventListener('click', () => {
    links.classList.toggle("show-menu");
})