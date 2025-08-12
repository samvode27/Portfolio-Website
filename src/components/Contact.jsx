import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Sun,
  Moon,
} from "lucide-react";
import "./Contact.css";

const SOCIALS = [
  {
    icon: <Twitter size={20} />,
    url: "https://twitter.com/yourhandle",
    label: "Twitter",
  },
  {
    icon: <Linkedin size={20} />,
    url: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
  },
  {
    icon: <Github size={20} />,
    url: "https://github.com/yourhandle",
    label: "GitHub",
  },
  {
    icon: <Instagram size={20} />,
    url: "https://instagram.com/yourhandle",
    label: "Instagram",
  },
];

export default function Contact() {
  // Dark mode state (auto detect)
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Listen for system theme changes
  useEffect(() => {
    const listener = (e) => setDarkMode(e.matches);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
    return () =>
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
  }, []);

  // Form state & validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Validation rules
  const validate = (fieldValues = formData) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Name is required.";
    if ("email" in fieldValues) {
      temp.email = fieldValues.email
        ? /\S+@\S+\.\S+/.test(fieldValues.email)
          ? ""
          : "Email is not valid."
        : "Email is required.";
    }
    if ("subject" in fieldValues)
      temp.subject = fieldValues.subject ? "" : "Subject is required.";
    if ("message" in fieldValues)
      temp.message = fieldValues.message ? "" : "Message is required.";

    setErrors({ ...temp });
    // Return true if all errors are empty strings
    return Object.values(temp).every((x) => x === "");
  };

  // Handle input changes and validate on the fly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validate({ [name]: value });
  };

  // Submit handler with fake async & feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setStatus(null);
      try {
        await new Promise((res) => setTimeout(res, 1500));
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } catch {
        setStatus("error");
      } finally {
        setLoading(false);
      }
    } else {
      setStatus("error");
    }
  };

  return (
    <section className={`contact-section ${darkMode ? "dark" : "light"}`} id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        {/* Dark Mode Toggle */}
        <button
          aria-label="Toggle dark mode"
          className="dark-mode-toggle"
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="contact-grid">
          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            noValidate
          >
            {["name", "email", "subject"].map((field) => (
              <div key={field} className="input-group">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  aria-describedby={`${field}-error`}
                  aria-invalid={errors[field] ? "true" : "false"}
                  disabled={loading}
                />
                <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                {errors[field] && (
                  <span className="error-text" id={`${field}-error`} role="alert">
                    {errors[field]}
                  </span>
                )}
              </div>
            ))}

            <div className="input-group textarea-group">
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
                aria-describedby="message-error"
                aria-invalid={errors.message ? "true" : "false"}
                disabled={loading}
              />
              <label htmlFor="message">Message</label>
              {errors.message && (
                <span className="error-text" id="message-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <motion.p
                className="form-feedback success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                role="alert"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                className="form-feedback error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                role="alert"
              >
                Please fix the errors above and try again.
              </motion.p>
            )}
          </motion.form>

          {/* Contact Info + Map */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="info-cards">
              <div className="info-card">
                <MapPin size={24} className="info-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <a href="tel:+251912345678" className="info-card" aria-label="Phone number">
                <Phone size={24} className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+251 944867635</p>
                </div>
              </a>

              <a href="mailto:youremail@example.com" className="info-card" aria-label="Email address">
                <Mail size={24} className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>setarigesamuel@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="social-icons" role="list" aria-label="Social media links">
              {SOCIALS.map(({ icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={label}
                  role="listitem"
                  tabIndex={0}
                  title={label}
                >
                  {icon}
                </a>
              ))}
            </div>

            <div className="map-container" aria-label="Google map showing location">
              <iframe
                title="Location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.9425115924835!2d38.75970961510934!3d9.023831792750848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8544f4b1b8ef%3A0xf2b4c7ae78a44a3d!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1689000000000!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
