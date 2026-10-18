import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';
import personal from '../data/personal';
import profilePhoto from '../assets/prashant-photo.jpg';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            The Developer <span className="gradient-text">Behind the Code</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Photo side */}
          <motion.div
            className="about-photo-side"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="about-photo-wrapper">
              <img
                src={profilePhoto}
                alt="Prashant Shishodia"
                className="about-photo"
              />
              <div className="about-photo-decoration" />
            </div>

            {/* Stats cards */}
            <div className="about-stats">
              {personal.stats.map((stat, i) => (
                <div key={i} className="stat-card card">
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="about-text-side"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-meta">
              <div className="about-meta-item">
                <MapPin size={16} />
                <span>{personal.location}</span>
              </div>
              <div className="about-meta-item">
                <Briefcase size={16} />
                <span>React Native Developer at ArgosMob Pvt. Ltd.</span>
              </div>
              <div className="about-meta-item">
                <GraduationCap size={16} />
                <span>BCA — CCSU, 2024</span>
              </div>
            </div>

            <div className="about-bio">
              {personal.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Currently Learning */}
            <div className="about-learning">
              <div className="learning-header">
                <Heart size={16} className="learning-icon" />
                <span>Currently Learning</span>
              </div>
              <div className="learning-tags">
                {personal.currentlyLearning.map((item, i) => (
                  <span key={i} className="tag">{item}</span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="about-actions">
              <a
                href={personal.resumeFile}
                download
                className="btn btn-primary"
                id="about-download-resume"
              >
                Download Resume
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="about-linkedin"
              >
                View LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
