import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  return (
    <>
      <section className="page-banner about-banner">
        <div className="container">
          <p className="eyebrow">CONOCÉ HOTEL MAPP</p>
          <h1>Hospitalidad con<br /><em>calidez y propósito.</em></h1>
          <p>Un espacio pensado para hacer de cada estadía un buen recuerdo.</p>
        </div>
      </section>
      <section className="section">
        <div className="container about-grid">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85" alt="Exterior de un hotel rodeado de vegetación"
              onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://placehold.co/900x1100/ece5d9/343a32?text=Hotel+Mapp"; }}
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">NUESTRA HISTORIA</p>
            <h2>Los detalles hacen<br /><em>la experiencia.</em></h2>
            <p>Hotel Mapp es un hotel ficticio creado para este proyecto académico. Su propuesta combina una estética contemporánea con una atención cercana y espacios cómodos para distintos tipos de viajeros.</p>
            <p>Desde una escapada de descanso hasta un viaje de trabajo, buscamos representar una experiencia sencilla: llegar, sentirse bien recibido y disfrutar cada momento.</p>
            <div className="values-list">
              <div><span>01</span><div><h3>Nuestra misión</h3><p>Ofrecer una estadía cómoda, clara y agradable.</p></div></div>
              <div><span>02</span><div><h3>Nuestros valores</h3><p>Calidez, respeto, calidad y atención a los detalles.</p></div></div>
              <div><span>03</span><div><h3>Nuestra visión</h3><p>Ser una propuesta de hospitalidad que inspire confianza.</p></div></div>
            </div>
            <Link to="/rooms" className="button button-dark">Descubrir habitaciones</Link>
          </div>
        </div>
      </section>
      <section className="about-stats">
        <div className="container stats-grid">
          <div><strong>4</strong><span>tipos de habitación</span></div>
          <div><strong>24/7</strong><span>concepto de atención</span></div>
          <div><strong>100%</strong><span>enfoque en tu comodidad</span></div>
        </div>
      </section>
    </>
  );
}

export default About;
