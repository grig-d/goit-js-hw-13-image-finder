export default function loadMore(searchQuery) {
  pageNumber += 1;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}
