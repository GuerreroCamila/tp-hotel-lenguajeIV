import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingForm from "../components/BookingForm";
import BookingSummary from "../components/BookingSummary";
import rooms from "../data/rooms";
import "../styles/Booking.css";

function Booking() {
  const location = useLocation();
  const queryRoom = new URLSearchParams(location.search).get("room");
  const [selectedRoomId, setSelectedRoomId] = useState(queryRoom || "");

  useEffect(() => {
    setSelectedRoomId(queryRoom || "");
  }, [queryRoom]);

  const room = rooms.find((item) => item.id === Number(selectedRoomId));

  // El resumen interactivo de fechas se muestra en el formulario.
  // Este panel introductorio mantiene la página clara antes de completar los datos.
  return (
    <>
      <section className="page-banner booking-banner">
        <div className="container">
          <p className="eyebrow">RESERVÁ TU ESTADÍA</p>
          <h1>Tu próxima pausa<br /><em>comienza acá.</em></h1>
          <p>Completá tus datos y revisá el importe estimado antes de enviar la solicitud.</p>
        </div>
      </section>
      <section className="section booking-page">
        <div className="container booking-layout">
          <div className="booking-main">
            <div className="booking-intro">
              <p className="eyebrow">SOLICITUD DE RESERVA</p>
              <h2>Planificá tu estadía</h2>
              <p>Los campos marcados son obligatorios. Podés revisar los datos antes de enviar el formulario.</p>
            </div>
            <BookingForm key={selectedRoomId} initialRoomId={selectedRoomId} />
          </div>
          <div className="booking-aside">
            <BookingSummary
              room={room}
              checkIn=""
              checkOut=""
              adults="1"
              children="0"
              nights={0}
              total={0}
            />
            <div className="booking-help">
              <h3>¿Necesitás ayuda?</h3>
              <p>Podés escribirnos si tenés dudas sobre las habitaciones o las condiciones de la estadía.</p>
              <a href="mailto:reservas@hotelmapp.example">reservas@hotelmapp.example</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;
