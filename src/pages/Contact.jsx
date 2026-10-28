import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <section className="page-banner contact-banner">
        <div className="container">
          <p className="eyebrow">ESTAMOS PARA AYUDARTE</p>
          <h1>Hablemos de<br /><em>tu próxima estadía.</em></h1>
          <p>Escribinos para resolver tus consultas.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-details">
            <p className="eyebrow">CONTACTO</p>
            <h2>Nos encanta<br /><em>escucharte.</em></h2>
            <p>Estos datos son ficticios y se utilizan únicamente como ejemplo del proyecto.</p>
            <div className="contact-detail"><span className="contact-detail-icon">⌖</span><div><h3>Dirección</h3><p>Av. de los Aromos 125<br />Salta, Argentina</p></div></div>
            <div className="contact-detail"><span className="contact-detail-icon">☎</span><div><h3>Teléfono</h3><a href="tel:+543874440000">+54 387 444-0000</a></div></div>
            <div className="contact-detail"><span className="contact-detail-icon">✉</span><div><h3>Correo electrónico</h3><a href="mailto:reservas@hotelmapp.example">reservas@hotelmapp.example</a></div></div>
            <div className="contact-detail"><span className="contact-detail-icon">◷</span><div><h3>Atención</h3><p>Todos los días, las 24 horas (dato ilustrativo).</p></div></div>
            <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Salta+Argentina" target="_blank" rel="noreferrer">Ver Salta en Google Maps ↗</a>
          </div>
          <div className="contact-form-panel">
            <h2>Envianos un mensaje</h2>
            <p>Completá el formulario y te mostraremos la confirmación de validación.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
