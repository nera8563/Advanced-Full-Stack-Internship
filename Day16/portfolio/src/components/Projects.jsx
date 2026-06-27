import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'Job Board App',
    description:
      'Created a job listing platform using React with search and filter functionality.[cite: 1]',
    tags: ['React.js', 'Frontend', 'Search & Filter'],
    image: 'https://via.placeholder.com/400x220/1c1c28/7c3aed?text=Job+Board+App',
    live: null, 
    code: 'https://github.com/nera8563/react-projects/tree/main/job-board', // Update with the specific repository link later if needed
  },
  {
    title: 'To-Do List App',
    description:
      'Developed a task management app with add, edit, and delete features using React hooks.[cite: 1]',
    tags: ['React.js', 'React Hooks', 'State Management'],
    image: 'https://via.placeholder.com/400x220/1c1c28/a855f7?text=To-Do+List+App',
    live: null,
    code: 'https://github.com/nera8563/react-projects/tree/main/todo-app',
  },
  {
    title: 'User List App',
    description:
      'Built a dynamic user listing interface using React with component-based architecture and state management.[cite: 1]',
    tags: ['React.js', 'Components', 'Dynamic UI'],
    image: 'https://via.placeholder.com/400x220/1c1c28/7c3aed?text=User+List+App',
    live: null,
    code: 'https://github.com/nera8563/react-projects/tree/main/list',
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects I'm proud to have built.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="overlay-btn">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer" className="overlay-btn">
                      <FiGithub /> Code
                    </a>
                  )}
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="proj-link">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer" className="proj-link">
                      <FiGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}