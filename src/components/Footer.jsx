import { Link } from "react-router-dom";
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="footer-brand">HOTEL <strong>MAPP</strong></Link>
          <p>Un lugar para descansar, disfrutar y sentirse como en casa.</p>
        </div>
        <div>
          <h3>Explorá</h3>
          <Link to="/rooms">Habitaciones</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/booking">Reservas</Link>
        </div>
        <div>
          <h3>Contacto</h3>
          <p>Av. de los Aromos 125, Salta, Argentina</p>
          <a href="tel:+543874440000">+54 387 444-0000</a>
          <a href="mailto:reservas@hotelmapp.example">reservas@hotelmapp.example</a>
        </div>
        <div>
          <h3>Seguinos</h3>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Hotel Mapp. Todos los derechos reservados.</span>
          <span>Precios ilustrativos en pesos argentinos (ARS).</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
