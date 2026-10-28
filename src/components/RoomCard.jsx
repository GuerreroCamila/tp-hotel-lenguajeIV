import { Link } from "react-router-dom";

const currency = (amount) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(amount);

function RoomCard({ room }) {
  return (
    <article className="room-card">
      <div className="room-image-wrap">
        <img src={room.image} alt={room.name} className="room-image"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "https://placehold.co/900x600/ece5d9/343a32?text=Hotel+Mapp";
          }}
        />
        <span className="room-capacity">Hasta {room.capacity} huéspedes</span>
      </div>
      <div className="room-card-content">
        <div className="room-card-title-row">
          <h3>{room.name}</h3>
          <span className="room-price">{currency(room.price)}<small> / noche</small></span>
        </div>
        <p>{room.description}</p>
        <div className="room-meta"><span>♧ {room.bed}</span></div>
        <ul className="room-service-list">
          {room.services.map((service) => <li key={service}>{service}</li>)}
        </ul>
        <Link to={`/booking?room=${room.id}`} className="button button-dark room-button">Reservar habitación</Link>
      </div>
    </article>
  );
}

export default RoomCard;
