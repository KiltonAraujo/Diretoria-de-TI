const carousel = document.querySelector('.carousel');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentSlide * 100 + '%';
  sliderContainer.style.transform = `translateX(${offset})`;
}

setInterval(nextSlide, 5000);