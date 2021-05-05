const API_KEY = '21332395-4a2076910c778f7aa83614951';
let pageNumber = 1;

async function fetchImages(searchQuery) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`;

  
}

function pageReset() {
  pageNumber = 1;
}

export default { fetchImages, pageReset };



