document.addEventListener('DOMContentLoaded', () => {
    const destroyModal = (modal) => {
        modal.classList.remove('active');
        modal.querySelectorAll('.input').forEach((item) => item.classList.remove('invalid'));
    };
    document.addEventListener('click', (event) => {
        const { target } = event;

        if (target.matches('.modal-close') || target.matches('.modal-overlay')) {
            destroyModal(target.closest('.modal-wrapper'));
        }

        if (target.dataset.modal === 'true') {
            event.preventDefault();
            document.querySelector(target.closest('a').getAttribute('href')).classList.add('active');
        }
    });

    let emailRegex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    const email = document.querySelector('input[name = "email"]');
    const name = document.querySelector('input[name = "name"]');
    const message = document.querySelector('.message');

    document.getElementById('modal').addEventListener('submit', (event) => {
        const { target } = event;
        event.preventDefault();
        if (emailRegex.test(email.value) && name.value.length >= 3) {
            destroyModal(target.closest('.modal-wrapper'));
            message.classList.add('active');
        } else {
            if (!emailRegex.test(email.value)) {
                email.classList.add('invalid');
            }
            if (name.value.length < 3) {
                name.classList.add('invalid');
            }
        }
    });
});
