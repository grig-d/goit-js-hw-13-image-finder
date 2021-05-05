import countryTemplate from '../templates/card.hbs';
import refs from './refs';

export default function renderMarkup(response) {
    if (response.hits.length > 0) {
        const markup = countryTemplate(response.hits);
    //   refs.outputContainer.innerHTML = '';
      refs.gallery.insertAdjacentHTML('beforeend', markup);
    //   notify('success');
    //   refs.searchForm.value = '';
    //   return;
    }
  //   if (value.length > 10) {
  //     refs.outputContainer.innerHTML = '';
  //     notify('notice');
  //     return;
  //   }
  //   refs.outputContainer.innerHTML = '';
  //   notify('error');
}
