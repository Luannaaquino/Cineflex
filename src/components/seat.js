export default function Seat(props) {
  const { selected, setSelected, seats, seatsNames, setSeatsNames } = props;

  function selectSeat(s) {
    if (!s.isAvailable) {
      alert("Esse assento não está disponível!");
    } else {
      let newSeat;
      if (selected.find((i) => i === s.id) === undefined) {
        newSeat = [...selected, s.id];
        setSelected(newSeat);
        setSeatsNames([...seatsNames, s.name]);
      } else {
        newSeat = selected.filter((i) => i !== s.id);
        setSelected(newSeat);
        setSeatsNames(() => selected.filter((i) => i !== s.name));
      }
    }
  }

  return (
    <ul className="seats-list">
      {seats.map((s) => (
        <li
          key={s.id}
          onClick={() => selectSeat(s)}
          className={
            s.isAvailable
              ? selected.find((i) => i === s.id) === undefined
                ? "seat available"
                : "seat available selected"
              : "seat unavailable"
          }
        >
          <p>{s.name}</p>
        </li>
      ))}
    </ul>
  );
}
