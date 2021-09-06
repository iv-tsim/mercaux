document.addEventListener('DOMContentLoaded', () => {
    let timer;
    const makeTimer = () => {
        clearInterval(timer);
        timer = setInterval(function () {
            showSlides(++slideIndex);
        }, 2000);
    }
    makeTimer();

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider-item');

    const showSlides = (n) => {
        if (n === slides.length) {
            slideIndex = 0;
        }
        slides.forEach((item) => item.classList.remove('active'));
        slides[slideIndex].classList.add('active');
    };

    let slideIndex = 0;

    slider.addEventListener('click', function () {
        showSlides(++slideIndex);
        makeTimer();
    });
});