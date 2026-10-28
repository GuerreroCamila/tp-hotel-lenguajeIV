import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";
import "../styles/Rooms.css";

function Rooms() {
  return (
    <>
      <section className="page-banner rooms-banner">
        <div className="container">
          <p className="eyebrow">NUESTROS ESPACIOS</p>
          <h1>Tu habitación,<br /><em>tu manera de descansar.</em></h1>
          <p>Elegí la opción que mejor se adapte a tu viaje.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">CUATRO OPCIONES</p>
            <h2>Encontrá tu lugar</h2>
            <p>Precios demostrativos por noche, expresados en pesos argentinos.</p>
          </div>
          <div className="rooms-grid rooms-page-grid">
            {rooms.map((room) => <RoomCard room={room} key={room.id} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Rooms;
