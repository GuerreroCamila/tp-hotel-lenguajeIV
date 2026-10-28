import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSent(false);
  };

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label className="field">Nombre
          <input name="name" value={form.name} onChange={update} required placeholder="Tu nombre" />
        </label>
        <label className="field">Correo electrónico
          <input type="email" name="email" value={form.email} onChange={update} required placeholder="nombre@correo.com" />
        </label>
        <label className="field field-full">Asunto
          <input name="subject" value={form.subject} onChange={update} required placeholder="¿En qué podemos ayudarte?" />
        </label>
        <label className="field field-full">Mensaje
          <textarea name="message" value={form.message} onChange={update} required rows="5" placeholder="Escribí tu consulta..." />
        </label>
      </div>
      <button type="submit" className="button button-dark">Enviar mensaje</button>
      {sent && <p className="form-message form-success" role="status">¡Gracias! El formulario se validó correctamente. Para enviar mensajes reales hace falta conectar un backend o servicio externo.</p>}
      <p className="form-note">Este formulario es una demostración y no envía correos electrónicos reales.</p>
    </form>
  );
}

export default ContactForm;
