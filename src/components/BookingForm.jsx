import { useMemo, useState } from "react";
import rooms from "../data/rooms";

const today = new Date();
const localToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
const currency = (amount) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(amount || 0);

function getSavedBookings() {
  try {
    return JSON.parse(localStorage.getItem("hotelMappBookings") || "[]");
  } catch {
    return [];
  }
}

function datesOverlap(startA, endA, startB, endB) {
  return startA < endB && startB < endA;
}

function BookingForm({ initialRoomId }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    roomId: initialRoomId || "",
    checkIn: "",
    checkOut: "",
    adults: "1",
    children: "0"
  });
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const selectedRoom = rooms.find((room) => room.id === Number(form.roomId));
  const nights = useMemo(() => {
    if (!form.checkIn || !form.checkOut) return 0;
    const start = new Date(`${form.checkIn}T00:00:00`);
    const end = new Date(`${form.checkOut}T00:00:00`);
    const diff = end.getTime() - start.getTime();
    return diff > 0 ? Math.round(diff / 86400000) : 0;
  }, [form.checkIn, form.checkOut]);

  const guests = Number(form.adults) + Number(form.children);
  const total = selectedRoom && nights > 0 ? selectedRoom.price * nights : 0;

  const update = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setError("");
    setConfirmation(null);
  };

  const submit = (event) => {
    event.preventDefault();
    setError("");
    setConfirmation(null);

    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Completá tu nombre, correo electrónico y teléfono.");
      return;
    }
    if (!selectedRoom) {
      setError("Seleccioná una habitación.");
      return;
    }
    if (!form.checkIn || !form.checkOut) {
      setError("Seleccioná las fechas de entrada y salida.");
      return;
    }
    if (form.checkIn < localToday) {
      setError("La fecha de entrada no puede ser anterior a hoy.");
      return;
    }
    if (form.checkOut <= form.checkIn || nights < 1) {
      setError("La fecha de salida debe ser posterior a la fecha de entrada.");
      return;
    }
    if (Number(form.adults) < 1 || Number(form.children) < 0) {
      setError("Debe haber al menos un adulto. La cantidad de niños no puede ser negativa.");
      return;
    }
    if (guests > selectedRoom.capacity) {
      setError(`Esta habitación admite hasta ${selectedRoom.capacity} huéspedes.`);
      return;
    }

    const savedBookings = getSavedBookings();
    const conflict = savedBookings.some((booking) =>
      Number(booking.roomId) === selectedRoom.id &&
      datesOverlap(form.checkIn, form.checkOut, booking.checkIn, booking.checkOut)
    );

    if (conflict) {
      setError("Esa habitación ya tiene una reserva registrada para parte de esas fechas. Elegí otras fechas o una habitación diferente.");
      return;
    }

    const booking = {
      id: `${Date.now()}`,
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      roomId: selectedRoom.id,
      roomName: selectedRoom.name,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      adults: Number(form.adults),
      children: Number(form.children),
      nights,
      pricePerNight: selectedRoom.price,
      total,
      createdAt: new Date().toISOString()
    };

    try {
      localStorage.setItem("hotelMappBookings", JSON.stringify([...savedBookings, booking]));
      setConfirmation(booking);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        roomId: String(selectedRoom.id),
        checkIn: "",
        checkOut: "",
        adults: "1",
        children: "0"
      });
    } catch {
      setError("No se pudo guardar la reserva en este navegador. Revisá la configuración de almacenamiento.");
    }
  };

  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-section-title"><span>01</span><h2>Datos del huésped</h2></div>
      <div className="form-grid">
        <label className="field field-full">Nombre y apellido
          <input name="fullName" value={form.fullName} onChange={update} autoComplete="name" required placeholder="Tu nombre completo" />
        </label>
        <label className="field">Correo electrónico
          <input type="email" name="email" value={form.email} onChange={update} autoComplete="email" required placeholder="nombre@correo.com" />
        </label>
        <label className="field">Teléfono
          <input type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" required placeholder="+54 9 ..." />
        </label>
      </div>

      <div className="form-section-title"><span>02</span><h2>Detalles de la estadía</h2></div>
      <div className="form-grid">
        <label className="field field-full">Habitación
          <select name="roomId" value={form.roomId} onChange={update} required>
            <option value="">Seleccioná una habitación</option>
            {rooms.map((room) => <option key={room.id} value={room.id}>{room.name} — {currency(room.price)} por noche (máx. {room.capacity})</option>)}
          </select>
        </label>
        <label className="field">Fecha de entrada
          <input type="date" name="checkIn" min={localToday} value={form.checkIn} onChange={update} required />
        </label>
        <label className="field">Fecha de salida
          <input type="date" name="checkOut" min={form.checkIn || localToday} value={form.checkOut} onChange={update} required />
        </label>
        <label className="field">Adultos
          <select name="adults" value={form.adults} onChange={update}>
            {[1, 2, 3, 4].map((number) => <option key={number} value={number}>{number}</option>)}
          </select>
        </label>
        <label className="field">Niños
          <select name="children" value={form.children} onChange={update}>
            {[0, 1, 2, 3, 4].map((number) => <option key={number} value={number}>{number}</option>)}
          </select>
        </label>
      </div>

      {selectedRoom && (
        <div className="booking-calculation">
          <div><span>Huéspedes totales</span><strong>{guests}</strong></div>
          <div><span>Noches</span><strong>{nights}</strong></div>
          <div><span>Precio por noche</span><strong>{currency(selectedRoom.price)}</strong></div>
          <div className="calculation-total"><span>Importe estimado</span><strong>{currency(total)}</strong></div>
        </div>
      )}

      {error && <p className="form-message form-error" role="alert">{error}</p>}
      <button type="submit" className="button button-dark submit-button">Confirmar solicitud de reserva</button>
      <p className="form-note">Demostración académica: esta solicitud se guarda solamente en este navegador. No se procesa ningún pago.</p>

      {confirmation && (
        <div className="form-message form-success" role="status">
          <h3>¡Solicitud registrada!</h3>
          <p>Gracias, {confirmation.fullName}. Tu solicitud para {confirmation.roomName} quedó guardada en este navegador.</p>
          <p><strong>Fechas:</strong> {confirmation.checkIn} al {confirmation.checkOut} · <strong>Total estimado:</strong> {currency(confirmation.total)}</p>
          <p>Esto no representa una reserva confirmada por un hotel real.</p>
        </div>
      )}
    </form>
  );
}

export default BookingForm;
