import React from 'react';
import './About.css';

const stats = [
  { number: '3+', label: 'React Projects Built' },
  { number: '2',  label: 'Professional Trainings & Internships' },
  { number: 'C++ & JS',  label: 'Core Programming Languages' },
  { number: '2028',   label: ' Year of Graduation' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="eyebrow">Who I Am</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A brief introduction to my background and what drives me.
        </p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a passionate Front End Developer and a second-year B.Tech Computer Science and Engineering student at Geeta University. I specialize in building responsive web applications.
            </p>
            <p>
              My technical toolkit includes HTML, CSS, JavaScript, and React.js. I have hands-on experience developing dynamic user interfaces using component-based architecture and state management. Beyond writing code, I have gained valuable teamwork, visual design, and project-building experience by participating in hackathons.
            </p>
            <p>
              I am driven by a desire to continuously learn new technologies and am actively seeking opportunities to apply my frontend capabilities to impactful, real-world projects.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
