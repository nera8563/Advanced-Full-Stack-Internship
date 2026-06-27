import React from 'react';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Ambient blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container hero-inner">
        <div className="hero-text fade-up">
          <span className="eyebrow">👋 Hello, I'm</span>
          <h1 className="hero-name">
            <span className="hero-accent">Nera </span>
          </h1>
          <h2 className="hero-role">Front End Developer</h2>
          <p className="hero-bio">
            Passionate Front End Developer and second-year B.Tech CSE student focused on building responsive, user-friendly web applications. Specialized in HTML, CSS, JavaScript, and React.js.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowDown />
            </a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>

        <div className="hero-image-wrap fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="hero-img-ring">
            <img
              src="/image.png"
              alt="Profile"
              className="hero-img"
            />
          </div>
         
        </div>
      </div>

      <a href="#about" className="scroll-hint">
        <FiArrowDown className="bounce" />
      </a>
    </section>
  );
}
