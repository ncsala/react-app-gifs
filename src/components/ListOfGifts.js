import { useEffect, useState } from "react";
import Gift from "./Gift.js";
import getGifts from '../services/getGifts.js';

export default function ListOfGifts({ keyword }) {
  // los diferentes estados
  const [gifts, setGifts] = useState([]);

  useEffect(function () {
    getGifts({ keyword }).then((gifts) => setGifts(gifts));
  }, [keyword]); 
  // Si hay un array vacio significa algo asi como q tiene q actualizar el estado solo la primera vez q renderiza
  // Luego al ponerle la palabra keyword que habia creado, significa q se va renderizar cada vez q reciba una keyword nueva

  return gifts.map(
    (singleGif) => (
      <Gift title={singleGif.title} url={singleGif.url} id={singleGif.id} />
    )
  );
}
