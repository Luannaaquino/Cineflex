import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Day from "./day";
import Bottom from "./bottom";

export default function MovieTime() {
  const [sessions, setSessions] = useState([]);
  const { filmId } = useParams();
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${filmId}/showtimes`
    );

    promise.then((response) => {
      setTimeout(() => setSessions(response.data), 400);
    });
    promise.catch(() => alert("Erro!"));
  }, [filmId]);

  return (
    <>
      <div className="container selection">
        <p className="page-title">Selecione o horário</p>
        {sessions.length === 0 ? (
          ""
        ) : (
          sessions.days.map((d) => <Day day={d} key={d.id} />)
        )}
      </div>
      {sessions.length === 0 ? (
        ""
      ) : (
        <Bottom
          title={sessions.title}
          posterURL={sessions.posterURL}
          weekday={null}
          time={null}
        />
      )}
    </>
  );
}