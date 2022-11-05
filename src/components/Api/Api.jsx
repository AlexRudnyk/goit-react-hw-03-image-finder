async function fetchPhoto(query, page) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=30100750-b02cb32f61256b4afede3508c&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.ok) {
    return response.json();
  }
}

const api = { fetchPhoto };

export default api;
