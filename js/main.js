const slides = [
  document.getElementById('intro'),
  document.getElementById('aboutMe'),
  document.getElementById('resume'),
];

const homeLink = document.getElementById('homeLink');
const aboutMeLink = document.getElementById('aboutMeLink');
const resumeLink = document.getElementById('resumeLink');

const next = document.getElementById('next');
const previous = document.getElementById('previous');

let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));

  currentSlideIndex = (index + slides.length) % slides.length;

  slides[currentSlideIndex].classList.add('active');
}

next.addEventListener('click', () => showSlide(currentSlideIndex + 1));
previous.addEventListener('click', () => showSlide(currentSlideIndex - 1));

homeLink.addEventListener('click', () => showSlide(0));
aboutMeLink.addEventListener('click', () => showSlide(1));
resumeLink.addEventListener('click', () => showSlide(2));
