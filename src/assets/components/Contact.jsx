import { useRef } from "react";
import emailjs from "emailjs-com";
import '../styles/Contact.css'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5v9qi6g", 
        "template_lpyy7zk", 
        form.current,
        "9eKTmDsu6d4_uEA0A" // Ej: public_xyz789
      )
      .then(
        () => {
          alert("Mensaje enviado con éxito ✅");
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar el mensaje ❌");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h3 className="contact-title">Contact Me</h3>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}



