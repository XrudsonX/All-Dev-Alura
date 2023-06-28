const btnMenu = document.querySelector('.icone__menu');
btnMenu.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    btnMenu.classList.toggle('menu__aberto')
    menu.classList.toggle('ativo')
})