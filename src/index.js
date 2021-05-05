import './styles.css';
import './js/render-components';
import refs from './js/refs';
import apiService from './js/apiService';
import cardTemplate from './templates/card.hbs';

const imageApiService = new apiService();

refs.searchForm.addEventListener('submit', searchImages);
refs.loadMoreBtn.addEventListener('click', loadMore);

function searchImages(event) {
  event.preventDefault();
  imageApiService.query = event.target.query.value.trim();

  if (imageApiService.query === '') {
    console.log(123);
    return;
  }
  refs.loadMoreBtn.classList.remove('is-hidden');
  imageApiService.resetPage();
  imageApiService.fetchImages().then(data => {
    clearGallery();
    imagesMarkup(data);
  });
}

function loadMore() {
  imageApiService.fetchImages().then(data => {
    imagesMarkup(data);
  });
}

function imagesMarkup(data) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTemplate(data));
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

// Есть файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API
// Напиши небольшое приложение поиска и просмотра изображений по ключевому слову
// Для HTTP-запросов используй публичный Pixabay API. Зарегистрируйся и получи ключ.
// Pixabay API поддерживает пагинацию, пусть в ответе приходит по 12 объектов, установлено в параметре per_page.
// По умолчанию параметр page равен 1.
// При каждом последующем запросе page увеличивается на 1, а при поиске по новому ключевому слову необходимо сбрасывать его значение в 1.

// Тебе интересны следующие свойства:
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок

// Можно использовать шаблонизацию:
// Форма поиска
// Галерея изображений
// Карточка изображения

// Для иконок используются Material icons. Для их корректной работы достаточно в HTML-файле добавить ссылку на веб-шрифт.

// Кнопка 'Load more'
// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими.
// Страница должна автоматически плавно проскроливаться после рендера изображений ровно на один экран, чтобы перевести пользователя на начало загруженных изображений.
// Используй window.scrollTo().
// window.scrollTo({
//   top: document.documentElement.offsetHeight,
//   behavior: 'smooth',
// });

////
// Дополнительно;
// Можно добавить плагин нотификаций, например pnotify, и показывать нотификации на результат HTTP-запросов
// Можно добавить функционал отображения большой версии изображения через плагин модального окна, например basicLightbox, при клике на изображение галереи
// Вместо кнопки Load more можно сделать бесконечную загрузку при скроле используя Intersection Observer.
