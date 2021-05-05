import searchForm from '../templates/search-form.hbs';
import gallery from '../templates/gallery.hbs';
import loadMore from '../templates/load-more.hbs';
document.body.insertAdjacentHTML('beforeend', searchForm());
document.body.insertAdjacentHTML('beforeend', gallery());
document.body.insertAdjacentHTML('beforeend', loadMore());
