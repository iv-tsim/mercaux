document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    header.addEventListener('click', (event) => {
        const { target } = event;
        if (target.dataset.scroll === 'true') {
            event.preventDefault();
            document.querySelector(target.closest('a').getAttribute('href')).scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    });
});
