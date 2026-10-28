import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/Footer.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Hotel Mapp, inicio">
          <span className="brand-mark">M</span>
          <span className="brand-name">HOTEL <strong>MAPP</strong></span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/rooms" activeClassName="active" onClick={closeMenu}>Habitaciones</NavLink>
          <NavLink to="/about" activeClassName="active" onClick={closeMenu}>Nosotros</NavLink>
          <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>Contacto</NavLink>
          <Link to="/booking" className="nav-booking" onClick={closeMenu}>Reservar</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
