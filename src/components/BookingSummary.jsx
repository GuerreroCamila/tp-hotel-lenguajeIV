const currency = (amount) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(amount || 0);

function BookingSummary({ room, checkIn, checkOut, adults, children, nights, total }) {
  return (
    <aside className="booking-summary">
      <p className="eyebrow">RESUMEN</p>
      <h2>Tu estadía</h2>
      {room ? (
        <>
          <img className="summary-image" src={room.image} alt={room.name}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "https://placehold.co/700x400/ece5d9/343a32?text=Hotel+Mapp";
            }}
          />
          <h3>{room.name}</h3>
          <p className="summary-detail">{room.bed}</p>
          <div className="summary-line"><span>Entrada</span><strong>{checkIn || "A seleccionar"}</strong></div>
          <div className="summary-line"><span>Salida</span><strong>{checkOut || "A seleccionar"}</strong></div>
          <div className="summary-line"><span>Noches</span><strong>{nights}</strong></div>
          <div className="summary-line"><span>Huéspedes</span><strong>{Number(adults || 0) + Number(children || 0)}</strong></div>
          <div className="summary-line"><span>Precio por noche</span><strong>{currency(room.price)}</strong></div>
          <div className="summary-total"><span>Total estimado</span><strong>{currency(total)}</strong></div>
        </>
      ) : <p>Seleccioná una habitación para ver el resumen.</p>}
      <p className="summary-disclaimer">La solicitud es demostrativa. No se realiza ningún cobro.</p>
    </aside>
  );
}

export default BookingSummary;
