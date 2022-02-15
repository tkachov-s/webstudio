(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    if (refs.openModalBtn) {
        refs.openModalBtn.addEventListener('click', toggleModal);
    }

    if (refs.closeModalBtn) {
        refs.closeModalBtn.addEventListener('click', toggleModal);
    }


    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();