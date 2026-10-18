import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, GitBranch, ExternalLink, CheckCircle, Lightbulb, Code2, User, AlertTriangle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import Footer from '../components/Footer';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    );
  }

  const otherProjects = projects.filter(p => p.id !== id).slice(0, 3);

  return (
    <>
      <div className="project-detail-page">
        {/* Hero Banner */}
        <div
          className="detail-hero"
          style={{ '--accent-color': project.mockupColor }}
        >
          <div className="detail-hero-bg" />
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="back-btn"
                onClick={() => navigate(-1)}
                id="detail-back"
              >
                <ArrowLeft size={16} /> Back to Projects
              </button>

              <div className="detail-hero-content">
                <div className="detail-mockup-icon">{project.mockupIcon}</div>
                <div>
                  <div className="detail-meta">
                    <span className="section-label">{project.subtitle}</span>
                    <span className={`project-status ${project.status}`}>
                      {project.status === 'completed' ? '✅ Completed' : '🚧 In Progress'}
                    </span>
                  </div>
                  <h1 className="detail-title">{project.title}</h1>
                  <p className="detail-subtitle">{project.description}</p>

                  <div className="detail-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="detail-actions">
                    {project.GitBranch && !project.github.includes('[YOUR-GITHUB]') && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        id="detail-github"
                      >
                        <GitBranch size={16} /> View on GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        id="detail-demo"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container detail-body">
          <div className="detail-grid">
            {/* Main Content */}
            <motion.div
              className="detail-main"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Overview */}
              <section className="detail-section">
                <div className="detail-section-header">
                  <BookOpen size={20} />
                  <h2>Project Overview</h2>
                </div>
                {project.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </section>

              {/* Features */}
              <section className="detail-section">
                <div className="detail-section-header">
                  <CheckCircle size={20} />
                  <h2>Key Features</h2>
                </div>
                <ul className="feature-list">
                  {project.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <CheckCircle size={14} className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Challenges */}
              <section className="detail-section">
                <div className="detail-section-header">
                  <AlertTriangle size={20} />
                  <h2>Implementation Challenges</h2>
                </div>
                <ul className="challenge-list">
                  {project.challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </section>

              {/* What I Learned */}
              <section className="detail-section">
                <div className="detail-section-header">
                  <Lightbulb size={20} />
                  <h2>What I Learned</h2>
                </div>
                <div className="learnings-grid">
                  {project.whatILearned.map((item, i) => (
                    <div key={i} className="learning-card card">
                      <span className="learning-num">0{i + 1}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="detail-sidebar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Role */}
              <div className="sidebar-card card">
                <div className="sidebar-card-header">
                  <User size={16} />
                  <h3>My Role</h3>
                </div>
                <p>{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div className="sidebar-card card">
                <div className="sidebar-card-header">
                  <Code2 size={16} />
                  <h3>Tech Stack</h3>
                </div>
                <div className="tech-stack-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="sidebar-card card">
                <div className="sidebar-card-header">
                  <ExternalLink size={16} />
                  <h3>Links</h3>
                </div>
                <div className="sidebar-links">
                  {project.GitBranch && !project.github.includes('[YOUR-GITHUB]') ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sidebar-link"
                      id="detail-sidebar-github"
                    >
                      <GitBranch size={14} /> GitBranch Repository
                    </a>
                  ) : (
                    <span className="sidebar-link-placeholder">
                      GitBranch link — add your username
                    </span>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sidebar-link"
                      id="detail-sidebar-demo"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="sidebar-link-placeholder">No live demo available</span>
                  )}
                </div>
              </div>
            </motion.aside>
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="other-projects">
              <h2 className="other-projects-title">Other Projects</h2>
              <div className="other-projects-grid">
                {otherProjects.map(p => (
                  <Link
                    key={p.id}
                    to={`/project/${p.id}`}
                    className="other-project-card card"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <div className="other-mockup" style={{ background: p.mockupColor }}>
                      {p.mockupIcon}
                    </div>
                    <div className="other-info">
                      <h4>{p.title}</h4>
                      <p>{p.subtitle}</p>
                    </div>
                    <ArrowLeft size={16} className="other-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetail;
