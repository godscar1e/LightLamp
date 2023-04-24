const sliderMain = document.querySelector('.slider-main');
const sliderThumbs = document.querySelector('.slider-thumbs');
const thumbs = sliderThumbs.querySelectorAll('.thumb');

let currentSlide = 0;

// Показать текущий слайд
function showSlide(slideIndex) {
  // Скрыть все изображения
  const slides = sliderMain.querySelectorAll('img');
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  
  // Показать нужный слайд
  slides[slideIndex].style.display = 'block';
  
  // Обновить класс активной миниатюры
  thumbs.forEach((thumb) => {
    thumb.classList.remove('active');
  });
  thumbs[slideIndex].classList.add('active');
  
  currentSlide = slideIndex;
}

// Обработчики кликов на миниатюрах
thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    showSlide(index);
  });
});

// Показать первый слайд при загрузке страницы
showSlide(0);
