import { useState, useEffect } from "react";
import Film from "./film";
import axios from "axios"


export default function Home() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies"
    );

    promise.then((response) => {
      setTimeout(() => setFilms(response.data), 400);
    });
    promise.catch(() => alert("Erro!"));
  }, []);

  function FilmsMap() {
    return films.map((f) => (
      <Film poster={f.posterURL} title={f.title} id={f.id} key={f.id} />
    ));
  }

  return (
    <div className="container">
      <p className="page-title">Selecione o filme</p>
      <ul className="films-list">
        {<FilmsMap />}
      </ul>
    </div>
  );
}