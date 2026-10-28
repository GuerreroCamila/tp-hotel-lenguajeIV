import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Hero />
      <section className="section intro-section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">UN LUGAR PARA VOS</p>
            <h2>Sentite bien.<br /><em>Sentite en casa.</em></h2>
          </div>
          <div className="intro-copy">
            <p>En Hotel Mapp creemos que una buena estadía se construye con comodidad, atención cálida y espacios que invitan a bajar el ritmo.</p>
            <Link to="/about" className="text-link">Conocé nuestra historia <span>↗</span></Link>
          </div>
        </div>
      </section>
      <Services />
      <section className="section home-rooms-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">DESCANSO A TU MEDIDA</p>
            <h2>Encontrá tu <em>habitación ideal</em></h2>
            <p>Cuatro opciones diseñadas para distintas formas de viajar.</p>
          </div>
          <div className="rooms-grid">
            {rooms.slice(0, 3).map((room) => <RoomCard room={room} key={room.id} />)}
          </div>
          <div className="centered-action"><Link to="/rooms" className="button button-dark">Ver las cuatro habitaciones</Link></div>
        </div>
      </section>
      <section className="home-cta">
        <div className="container home-cta-inner">
          <div><p className="eyebrow">TU PRÓXIMA ESTADÍA EMPIEZA ACÁ</p><h2>Un descanso que<br /><em>vale la pena.</em></h2></div>
          <Link to="/booking" className="button button-gold">Consultar disponibilidad</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
