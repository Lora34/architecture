/*Modal*///////////////////////////////////////////
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const closeModal = document.getElementsByClassName("modal__close")[0];

btn.addEventListener("click", function() {
    modal.style.display = "block";
})

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
})

window.addEventListener("click", function(e) {
    if(e.target === modal) {
        modal.style.display = "none";
    }
})

/*Modal*///////////////////////////////////////////

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}())