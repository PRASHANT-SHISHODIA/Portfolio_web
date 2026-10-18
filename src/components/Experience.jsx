import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import personal from '../data/personal';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience & Education</span>
          <h2 className="section-title">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Building real-world applications and sharpening skills through hands-on experience
          </p>
        </div>

        <div className="experience-layout">
          {/* Work Experience */}
          <div className="exp-column">
            <div className="exp-column-header">
              <Briefcase size={20} className="col-icon" />
              <h3>Work Experience</h3>
            </div>

            <div className="timeline">
              {personal.experience.map((job, i) => (
                <motion.div
                  key={job.id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content card">
                    <div className="job-header">
                      <div>
                        <h4 className="job-role">{job.role}</h4>
                        <div className="job-company">{job.company}</div>
                      </div>
                      <span className="job-type-badge">{job.type}</span>
                    </div>

                    <div className="job-meta">
                      <div className="job-meta-item">
                        <Calendar size={13} />
                        <span>{job.period}</span>
                      </div>
                      <div className="job-meta-item">
                        <MapPin size={13} />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <ul className="job-responsibilities">
                      {job.responsibilities.map((resp, ri) => (
                        <li key={ri}>{resp}</li>
                      ))}
                    </ul>

                    <div className="job-tech-tags">
                      {job.technologies.map((tech, ti) => (
                        <span key={ti} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="exp-column">
            <div className="exp-column-header">
              <GraduationCap size={20} className="col-icon" />
              <h3>Education</h3>
            </div>

            <div className="timeline">
              {personal.education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content card">
                    <h4 className="job-role">{edu.degree}</h4>
                    <div className="job-company">{edu.institution}</div>
                    <div className="job-meta">
                      <div className="job-meta-item">
                        <Calendar size={13} />
                        <span>Graduated {edu.year}</span>
                      </div>
                      <div className="job-meta-item">
                        <MapPin size={13} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <p className="edu-university">{edu.university}</p>
                  </div>
                </motion.div>
              ))}

              {/* Currently Learning card */}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="timeline-dot timeline-dot-pulse" />
                <div className="timeline-content card currently-learning-card">
                  <h4 className="job-role">Self-Learning & Upskilling</h4>
                  <div className="job-company">Ongoing — 2024 to Present</div>
                  <ul className="learning-list">
                    {personal.currentlyLearning.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
