import cardTemplate from '../templates/card.hbs';
import loadMore from './load-more';
import refs from './refs';

export default function renderMarkup(response) {
  if (response.hits.length > 0) {
    const markup = cardTemplate(response.hits);
    refs.gallery.innerHTML = '';
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.loadMoreBtn.addEventListener('click', loadMore);
  }
  //   if (value.length > 10) {
  //     refs.outputContainer.innerHTML = '';
  //     notify('notice');
  //     return;
  //   }
  //   refs.outputContainer.innerHTML = '';
  //   notify('error');
}
