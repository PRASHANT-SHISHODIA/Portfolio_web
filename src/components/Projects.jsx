import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import './Projects.css';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Web', value: 'web' },
  { label: 'Featured', value: 'featured' },
];

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="project-card card"
      style={{ '--card-accent': project.mockupColor }}
    >
      {/* Mockup Visual */}
      <div className="project-mockup">
        <div className="mockup-bg" style={{ background: project.mockupColor }} />
        <div className="mockup-icon">{project.mockupIcon}</div>
        {project.isFeatured && (
          <div className="featured-badge">⭐ Featured</div>
        )}
      </div>

      {/* Content */}
      <div className="project-content">
        <div className="project-meta">
          <span className="project-category tag">{project.subtitle}</span>
          <span className={`project-status ${project.status}`}>
            {project.status === 'completed' ? '✅ Completed' : '🚧 In Progress'}
          </span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {/* Tags */}
        <div className="project-tags">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div className="project-actions">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onClick(project)}
            id={`project-details-${project.id}`}
          >
            <Eye size={14} /> View Details
          </button>
          {project.github && !project.github.includes('[YOUR-GITHUB]') && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              id={`project-github-${project.id}`}
            >
              <GitBranch size={14} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              id={`project-demo-${project.id}`}
            >
              <ExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  const handleViewDetails = (project) => {
    navigate(`/project/${project.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">
            Projects I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            A selection of mobile apps and web applications developed in real-world environments
          </p>
        </div>

        {/* Filters */}
        <div className="projects-filters" role="group" aria-label="Project category filters">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
              id={`filter-${f.value}`}
            >
              {f.label}
              <span className="filter-count">
                {f.value === 'all'
                  ? projects.length
                  : projects.filter(p => p.category.includes(f.value)).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleViewDetails}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="projects-empty">
            <span>No projects found for this filter.</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
