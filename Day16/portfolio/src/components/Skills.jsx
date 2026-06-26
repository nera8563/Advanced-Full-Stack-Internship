import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend Technologies',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3',  'Visual Branding & Asset Creation', 'Responsive Design'],
  },
  {
    category: 'Backend Technologies',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT / OAuth', 'Authentication & Authorization'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Mongoose', 'NoSQL Design'],
  },
  {
    category: 'DevOps & Cloud',
    skills: [ 'Git', 'GitHub', 'Cloudinary'],
  },
  {
    category: 'Tools & Soft Skills',
    skills: ['VS Code', 'Postman', 'npm', 'Teamwork'],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <span className="eyebrow">What I Know</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to build great products.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="tag skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
