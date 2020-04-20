
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let previous = document.querySelector(".left-slider-nav");
let next = document.querySelector(".right-slider-nav");

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

next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);

/* Testimonials Slider */


let testimonialSliders = document.querySelectorAll(".mySlides");
let showingSlide = 0;
let prevTest = document.querySelector(".prev");
let nextTest = document.querySelector(".next");


function nextTestimonial() {
    goToTestimonial(showingSlide+1);
}

function prevTestimonial() {
    goToTestimonial(showingSlide-1);
}

function goToTestimonial(n) {
    testimonialSliders[showingSlide].className = "mySlides";
    showingSlide = (n+testimonialSliders.length) % testimonialSliders.length;
    testimonialSliders[showingSlide].className = "mySlides activeSlide";
}

nextTest.addEventListener("click", nextTestimonial);
prevTest.addEventListener("click", prevTestimonial);