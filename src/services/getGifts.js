const apiKey = 'poZnRpI5Rg1etqI57Z5DjO405iQ55H6d'



export default function getGifts({keyword = 'cars'} = {}) {
  const apiURL =
  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifts = data.map((image) => {
        const {images, title, id} = image;
        const url = images.downsized_medium.url;
        return {title, id, url}; 
      });
      return gifts;
    });
}
