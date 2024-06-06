let totalSlides = document.querySelectorAll('.slider-img').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider-width').style.width =  `${sliderWidth * totalSlides}px`;
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;
document.querySelector('.slider-controls').style.width = `${sliderWidth}px`;
setInterval(goNext, 6000);
function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0
    }
    updateMargin();
}

function updateMargin() {
    let sliderImgWidth = document.querySelector('.slider-img').clientWidth;
    let newMargin = (currentSlide * sliderImgWidth);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}

let startX = 0;
let isDragging = false;

document.querySelector('.slider').addEventListener('mousedown', handleDragStart);
document.querySelector('.slider').addEventListener('touchstart', handleDragStart);
document.querySelector('.slider').addEventListener('mousemove', handleDragMove);
document.querySelector('.slider').addEventListener('touchmove', handleDragMove);
document.querySelector('.slider').addEventListener('mouseup', handleDragEnd);
document.querySelector('.slider').addEventListener('touchend', handleDragEnd);

function handleDragStart(event) {
    startX = event.clientX || event.touches[0].clientX;
    isDragging = true;
}

function handleDragMove(event) {
    if (!isDragging) return;
    const currentX = event.clientX || event.touches[0].clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            goNext(); // Passa para o próximo slide se arrastar para a esquerda
        } else {
            goPrev(); // Passa para o slide anterior se arrastar para a direita
        }
        isDragging = false;
    }
}

function handleDragEnd() {
    isDragging = false;
}
