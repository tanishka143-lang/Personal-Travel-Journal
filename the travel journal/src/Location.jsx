import marker from "./images/marker.png";
function Location(props) {
  return (
    <article className="journal">
      <div className="main-image-container">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info-container">
        <div className="location">
          <img className="marker" src={marker} alt="map.marker icon" />
          <span className="State">{props.State}</span>
          <a href={props.MapLink} target="_blank" rel="noreferrer">
            View on map
          </a>
        </div>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates} </p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
export default Location;
