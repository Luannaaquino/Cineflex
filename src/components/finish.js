import { useHistory } from "react-router-dom";

export default function Finish(props) {
  const { setInputName, setCpf, setSuccessData } = props;
  const { name, cpf, title, date, hour, seats } = props.peopleData;
  let history = useHistory();
  const orderedSeats = seats
    .map((i) => parseInt(i))
    .sort(function (a, b) {
      return a - b;
    });

  function resetData() {
    setInputName("");
    setCpf("");
    setSuccessData({});
    history.push("/");
  }

  return (
    <div className="container success">
      <p className="page-title success">Pedido feito com sucesso!</p>
      <p className="success-title">Filme e sessão</p>
      <p className="success-data">{title}</p>
      <div>
        <span className="success-data">{date}</span>
        <span className="success-data">{hour}</span>
      </div>
      <p className="success-title">Ingressos</p>
      {orderedSeats.map((i) => (
        <p className="success-data" key={i}>
          Assento {i}
        </p>
      ))}
      <p className="success-title">Cliente</p>
      <p className="success-data">Nome: {name}</p>
      <p className="success-data">CPF: {cpf}</p>
      <div className="confirmation">
        <button onClick={() => resetData()} className="proceed">
          Voltar pra Home
        </button>
      </div>
    </div>
  );
}