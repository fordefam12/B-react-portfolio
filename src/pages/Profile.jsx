import React from 'react';

export default function Profile() {
  const projects = [
    {
      id: 0,
      title: "Unknown",
      languages: "Unknown",
      packages: "Unknown",
      image: "screenshot", // use an actual image URL here
      description: "Description",
      repo: "Repository Link",
      live: "Deployment Link"
    },
    {
      id: 1,
      title: "Unknown",
      languages: "Unknown",
      packages: "Unknown",
      image: "screenshot", // use an actual image URL here
      description: "Description",
      repo: "Repository Link",
      live: "Deployment Link"
    },
    {
      id: 2,
      title: "Unknown",
      languages: "Unknown",
      packages: "Unknown",
      image: "screenshot", // use an actual image URL here
      description: "Description",
      repo: "Repository Link",
      live: "Deployment Link"
    },
    {
      id: 3,
      title: "Unknown",
      languages: "Unknown",
      packages: "Unknown",
      image: "screenshot", // use an actual image URL here
      description: "Description",
      repo: "Repository Link",
      live: "Deployment Link"
    },
    {
      id: 4,
      title: "Unknown",
      languages: "Unknown",
      packages: "Unknown",
      image: "screenshot", // use an actual image URL here
      description: "Description",
      repo: "Repository Link",
      live: "Deployment Link"
    },

    
  ];

  return (
    <div>
      <section id="work" className="jobs" >
        <h2 className="section-title secondary-border">Projects</h2>
        <div className="flex-row" >
          {projects.map(project => (
            <div key={project.id} className="project-card  e">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
                
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </section>
    </div>
  );
}
