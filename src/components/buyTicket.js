import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

import Seat from "./seat";
import Status from "./status";
import Bottom from "./bottom";

export default function BuyTicket(props) {
  const { inputName, setInputName, cpf, setCpf, setSuccessData } = props;
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatsNames, setSeatsNames] = useState([]);
  const { sessionId } = useParams();
  let history = useHistory();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`
    );

    promise.then((response) => {
      setTimeout(() => {
        setSeats(response.data);
      }, 400);
    });
    promise.catch(() => alert("Erro!"));
  }, [sessionId]);

  function checkout() {
    if (selectedSeats.length > 0 && cpf.length === 11 && inputName.length > 0) {
      setSuccessData({
        title: seats.movie.title,
        date: seats.day.date,
        hour: seats.name,
        seats: seatsNames,
      });
      const checkoutObject = {
        ids: selectedSeats,
        name: inputName,
        cpf: cpf,
      };
      let promise = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",
        checkoutObject
      );
      promise.then(() => history.push("/success"));
      promise.catch(() => alert("Erro ao selecionar assentos!"));
    } else if (selectedSeats.length === 0) {
      alert("Selecione pelo menos um assento!");
    } else if (inputName.length === 0) {
      alert("Digite seu nome!");
    } else if (cpf.length !== 11) {
      alert("Insira um CPF válido!");
    }
  }

  return (
    <div className="container selection">
      <p className="page-title">Selecione o(s) assento(s)</p>
      {seats.length === 0 ? (
        ""
      ) : (
        <Seat
          selected={selectedSeats}
          setSelected={setSelectedSeats}
          seats={seats.seats}
          seatsNames={seatsNames}
          setSeatsNames={setSeatsNames}
        />
      )}

      {seats.length === 0 ? (
        ""
      ) : (
        <>
          <Status />
          <p className="input-title">Nome</p>
          <input
            onChange={(e) => setInputName(e.target.value)}
            className="input"
            type="text"
            placeholder="Digite seu nome..."
            value={inputName}
          />
          <p className="input-title">CPF</p>
          <input
            onChange={(e) => setCpf(e.target.value)}
            className="input"
            type="number"
            placeholder="Digite seu CPF..."
            value={cpf}
          />
          <div className="confirmation">
            <button onClick={() => checkout()} className="proceed">
              Reservar assento(s)
            </button>
          </div>
          <Bottom
            title={seats.movie.title}
            posterURL={seats.movie.posterURL}
            weekday={seats.day.weekday}
            time={seats.name}
          />
        </>
      )}
    </div>
  );
}