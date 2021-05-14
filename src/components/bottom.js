export default function Bottom(props) {
    const { title, posterURL, weekday, time } = props;
  
    return (
      <div className="bottom">
        <div className="bottom-poster">
          <img src={posterURL} alt={`${title} poster`} />
        </div>
        <div>
          <p>{title}</p>
          {time ? <p>{`${weekday} - ${time}`}</p> : ""}
        </div>
      </div>
    );
  }