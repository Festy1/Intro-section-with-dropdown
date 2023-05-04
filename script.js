const menu = document.getElementById('menu');
const closeMenu = document.querySelector('.menu-main');
const showMenu = () => {
    menu.style.display = 'none';
    closeMenu.style.display = 'block';
};
menu.addEventListener('click',showMenu);
// const menu = document.getElementById("menu");
// const closeMenu = document.querySelector(".close-menu");

// menu.addEventListener("click", () => {
//   closeMenu.classList.toggle("hidden");
// });

const close = document.getElementById('close');
const hideMenu = () => {
    menu.style.display = 'block';
    closeMenu.style.display = 'none';
}
close.addEventListener('click', hideMenu);
