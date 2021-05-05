import fetchCountries from './fetchCountries';
import renderMarkup from './render-markup';

export default function searchCountry(event) {
  event.preventDefault();
  const searchQuery = event.target.query.value.trim();
  if (searchQuery) {
    return fetchCountries(searchQuery).then(data => renderMarkup(data));
  }
  return;
}