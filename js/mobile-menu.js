(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");


    menuBtnRef.addEventListener('click', toggleMenu);
    mobileBtnClose.addEventListener('click', toggleMenu);

    function toggleMenu() {
        mobileMenuRef.classList.toggle("is-open");
        document.body.classList.toggle('no-scroll');
    }

})();