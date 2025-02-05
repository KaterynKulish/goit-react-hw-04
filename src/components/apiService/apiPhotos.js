import axios from 'axios';

const fetchPhotos = async (query, page, perPage) => {
  const res = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_API_KEY
    }&orientation=landscape&query=${query}&page=${page}&per_page=${perPage}`
  );
  console.log(res);
  console.log(res.data);

  return res.data;
};
export default fetchPhotos;
