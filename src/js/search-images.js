import fetchImages from './fetch-images';
import renderMarkup from './render-markup';

export default function searchImages(event) {
  event.preventDefault();
  const searchQuery = event.target.query.value.trim();
  if (searchQuery) {
    return fetchImages(searchQuery).then(data => renderMarkup(data));
  }
  return;
}