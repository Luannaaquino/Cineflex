import { Link } from "react-router-dom";

export default function Day({ day }) {
  const { weekday, date, showtimes } = day;

  function TimeButton({ hour, id }) {
    return (
      <Link
        to={{
          pathname: `/session/${id}`,
          hour,
        }}
      >
        <li className="weekday-time">
          <p>{hour}</p>
        </li>
      </Link>
    );
  }
  return (
    <div>
      <p className="session-day">{`${weekday} - ${date}`}</p>
      <ul className="times-list">
        {showtimes.map((t) => (
          <TimeButton hour={t.name} id={t.id} key={t.id} />
        ))}
      </ul>
    </div>
  );
}