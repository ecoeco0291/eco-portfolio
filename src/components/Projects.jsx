import React from 'react';
import PropTypes from 'prop-types';

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio made using React.',
    },
    {
      name: 'URBANHIVE',
      description: 'A landlord and tenand management system.',
    },
    
  ];

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default Projects;
