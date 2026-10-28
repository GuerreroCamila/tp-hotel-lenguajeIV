const services = [
  { icon: "✧", title: "Desayuno incluido", text: "Comenzá el día con opciones frescas y deliciosas." },
  { icon: "⌁", title: "Wi-Fi gratuito", text: "Conectividad para trabajar, planificar o relajarte." },
  { icon: "◇", title: "Atención cercana", text: "Un equipo preparado para acompañarte durante tu estadía." },
  { icon: "☼", title: "Espacios de descanso", text: "Ambientes cómodos para desconectar de la rutina." }
];

function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">PARA QUE DISFRUTES</p>
          <h2>Detalles que hacen <em>la diferencia</em></h2>
          <p>Todo lo necesario para que tu visita sea cómoda desde el primer momento.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-item" key={service.title}>
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
