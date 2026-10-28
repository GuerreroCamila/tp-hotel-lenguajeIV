import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" role="img" aria-label="Habitación elegante de hotel" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">BIENVENIDO A HOTEL MAPP</p>
        <h1>Tu descanso,<br /><em>nuestro compromiso.</em></h1>
        <p className="hero-description">
          Descubrí un espacio donde la comodidad, la calidez y los pequeños detalles hacen la diferencia.
        </p>
        <div className="hero-actions">
          <Link to="/rooms" className="button button-gold">Explorar habitaciones</Link>
          <Link to="/booking" className="button button-outline-light">Reservar estadía</Link>
        </div>
      </div>
      <div className="hero-note"><span /> Hospitalidad pensada para vos</div>
    </section>
  );
}

export default Hero;
