
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

let previous = document.querySelector(".left-slider-nav");
let next = document.querySelector(".right-slider-nav");

next.onclick = function() {
    nextSlide();
};

previous.onclick = function() {
    previousSlide();
};