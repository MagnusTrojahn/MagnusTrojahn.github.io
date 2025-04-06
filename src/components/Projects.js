import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <img src="your-project-image.jpg" alt="Project" />
        <h3>Project Title</h3>
        <p>A brief description of the project.</p>
        <a href="https://link-to-project.com" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </section>
  );
}

export default Projects;
