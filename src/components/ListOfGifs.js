import { useEffect, useState } from "react";
import Gif from "./Gif.js";
import getGifs from '../services/getGifts.js';

export default function ListOfGifts({ params }) {
  const {keyword} = params;
  // los diferentes estados
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]); 
  // Si hay un array vacio significa algo asi como q tiene q actualizar el estado solo la primera vez q renderiza
  // Luego al ponerle la palabra keyword que habia creado, significa q se va renderizar cada vez q reciba una keyword nueva

  return <div>
  {
    gifs.map(
      (singleGif) => (
        <Gif title={singleGif.title} url={singleGif.url} id={singleGif.id} />
      )
    )
  }
  </div>
}
