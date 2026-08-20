import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mwleajvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.052940985752!2d38.74684515!3d9.005401249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8461b5c4b687b206!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="400"
            height="300"
            loading="lazy"
            title="Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={status === "sending"}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
          </button>
        </form>

        {status === "success" && (
          <p className="form-success">Thank you — your message has been sent!</p>
        )}
        {status === "error" && (
          <p className="form-error">
            There was an error sending your message. Please try again later.
          </p>
        )}
      </section>
    </article>
  );
}
