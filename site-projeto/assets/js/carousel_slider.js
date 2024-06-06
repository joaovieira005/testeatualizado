let slideIndex = 0;
let slideInterval;
const slideDuration = 7000;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slideInterval = setTimeout(showSlides, slideDuration);
}

function plusSlides(n) {
    clearTimeout(slideInterval);
    let slides = document.getElementsByClassName("mySlides");
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    slideInterval = setTimeout(showSlides, slideDuration);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});