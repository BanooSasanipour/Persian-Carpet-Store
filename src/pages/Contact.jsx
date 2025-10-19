import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Nachricht!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <div className="contactPage">
      <h2>Kontakt</h2>

      <section className="contactInfo">
        <p className="contactInfoTitle"><strong>Persian Carpet Store GmbH</strong></p>
        <p>Waldstraße 12, 12345 Berlin</p>
        <p>E-Mail: info@campingshop.de</p>
        <p>Telefon: +49 30 12345678</p>
      </section>

      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ihr Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ihre E-Mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Ihre Nachricht"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Absenden</button>
      </form>
    </div>

    </div>
    
  );
}