// import fetchImages from '';
// import renderImages from '';

export default function searchImage(event) {
  const searchQuery = event.target.value.trim();
  try {
    searchQuery && fetchImages(searchQuery).then(data => renderImages(data));
  } catch (error) {
    console.log(error);
  }
}
