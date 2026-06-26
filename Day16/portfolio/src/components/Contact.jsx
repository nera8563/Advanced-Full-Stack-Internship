import React, { useState } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up your backend / EmailJS / Formspree here
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <span className="eyebrow">Get In Touch</span>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Looking for a dedicated Front End Developer or a passionate intern to join your team? Let's discuss how I can contribute to your next project.
        </p>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <a href="mailto:your@email.com" className="contact-item">
              <div className="contact-icon"><FiMail /></div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">nera8563@email.com</p>
              </div>
            </a>
            <a href="tel:+919999999999" className="contact-item">
              <div className="contact-icon"><FiPhone /></div>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">+91-XXXXXXXXXX</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon"><FiLinkedin /></div>
              <div>
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">linkedin.com/in/nera123</p>
              </div>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="contact-item">
              <div className="contact-icon"><FiGithub /></div>
              <div>
                <p className="contact-label">GitHub</p>
                <p className="contact-value">github.com/nera8563</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary send-btn">
              {sent ? '✓ Sent!' : <><FiSend /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
