document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    const headerActive = (scroll) => {
        scroll > 0 ? header.classList.add('active') : header.classList.remove('active');
    };

    headerActive(window.pageYOffset);

    document.addEventListener('scroll', () => {
        headerActive(window.pageYOffset);
    });
});
