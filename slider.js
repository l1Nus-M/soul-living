const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startSlider() {
  intervalId = setInterval(nextSlide, 4000);
}

function stopSlider() {
  clearInterval(intervalId);
}

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopSlider();
  startSlider();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  stopSlider();
  startSlider();
});

document.getElementById('slider').addEventListener('mouseenter', stopSlider);
document.getElementById('slider').addEventListener('mouseleave', startSlider);

showSlide(currentIndex);
startSlider(); 