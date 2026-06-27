import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    period: 'June 2026 – Present',
    role: 'MERN Stack Trainee',
    company: 'Geeta Technical Hub | Geeta University , Panipat',
    type: 'work',
    points: [
      'Focusing on frontend web development, building dynamic and responsive single-page applications (SPAs) using React.js.',
      'Developing modular, component-based architectures and effectively managing application state using React Hooks.',
      'Enhancing JavaScript (ES6+) fundamentals and creating interactive user interfaces with clean, modern CSS styling.',
      'Designing frontend structures and preparing UI components to consume RESTful APIs for upcoming backend integration.',
    ],
  },
  {
    period: 'October 2025 – November 2025',
    role: 'Digital Marketing Intern',
    company: 'Ipsr Solutions Limited | Remote',
    type: 'work',
    points: [
      'Conducted research on target audiences and analyzed engagement trends across social media platforms.',
      'Created and optimized content (captions, posts, ideas) using AI tools to improve reach and engagement.',
      'Assisted in planning and executing basic digital marketing strategies for brand awareness.',
    ],
  },
  {
    period: 'June 2025 – August 2025',
    role: 'DSA Trainee (C++)',
    company: 'Geeta Technical Hub | Geeta University, Panipat',
    type: 'work',
    points: [
      'Built strong fundamentals in Data Structures and Algorithms using C++.',
      'Improved problem-solving skills by practicing basic DSA questions.',
      'Participated in hackathons, gaining teamwork and project-building experience.',
    ],
  },
];

const education = [
  {
    period: '2024 – 2028 (Current)',
    role: 'Bachelor of Technology in Computer Science and Engineering',
    company: 'Geeta University',
    type: 'education',
    points: [
      'Second-year B.Tech CSE student actively learning web development and problem-solving.',
    ],
  },
  {
    period: '2023 – 2024',
    role: 'Intermediate (CBSE)',
    company: 'Florence Dale Public School',
    type: 'education',
    points: [],
  },
  {
    period: '2021 – 2022',
    role: 'Matriculation (CBSE)',
    company: 'Florence Dale Public School',
    type: 'education',
    points: [],
  },
];

export default function Experience() {
  const [tab, setTab] = useState('work');
  const items = tab === 'work' ? experiences : education;

  return (
    <section className="section" id="experience">
      <div className="container">
        <span className="eyebrow">My Journey</span>
        <h2 className="section-title">Experience & Education</h2>
        

        <div className="exp-tabs">
          <button
            className={`exp-tab${tab === 'work' ? ' active' : ''}`}
            onClick={() => setTab('work')}
          >
            Work Experience
          </button>
          <button
            className={`exp-tab${tab === 'edu' ? ' active' : ''}`}
            onClick={() => setTab('edu')}
          >
            Education
          </button>
        </div>

        <div className="timeline">
          {items.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-company">{item.company}</span>
                <ul className="timeline-points">
                  {item.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
