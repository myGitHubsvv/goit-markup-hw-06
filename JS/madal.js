(() => {
    const refs = {
        openModdalBtn: document.querySelector ('[data-modal-open]'),
        closeModalBtn: document.querySelector ('[data-modal-close]'),
        modal: document.quesySelector ('[data-modal]'),
    };

    refs.openModdalBtn.addEventListener ('click', toggleModal);
    refs.openModdalBtn.addEventListener ('click', toggleModal);

    function toggleModal() {
        refs.modal.classlist.toggle('is-openeded');
    }

})()