import { motion } from 'framer-motion';
import { Download, FileText, Briefcase, GraduationCap, Code, Star } from 'lucide-react';
import personal from '../data/personal';
import skills from '../data/skills';
import './Resume.css';

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Resume</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Download my full resume or view the highlights below
          </p>
        </div>

        {/* Download CTA */}
        <motion.div
          className="resume-download-card glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="resume-download-left">
            <div className="resume-icon-wrapper">
              <FileText size={32} />
            </div>
            <div>
              <h3>Prashant_Shishodia_Resume.pdf</h3>
              <p>React Native Developer Resume — Updated Oct 2026</p>
            </div>
          </div>
          <a
            href={personal.resumeFile}
            download="Prashant_Shishodia_Resume.pdf"
            className="btn btn-primary"
            id="resume-download-btn"
          >
            <Download size={18} /> Download Resume
          </a>
        </motion.div>

        {/* Resume Highlights */}
        <div className="resume-highlights">
          {/* Summary */}
          <motion.div
            className="resume-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="resume-card-header">
              <Star size={18} />
              <h3>Professional Summary</h3>
            </div>
            <p>
              Results-driven React Native Developer with 1+ year of professional experience
              designing and delivering high-performance, cross-platform mobile applications
              for Android. Proficient in JavaScript (ES6+), React Native, Node.js, and
              Express.js. Skilled in RESTful API integration, state management (Redux,
              Context API), UI/UX implementation, and performance optimization. Adept at
              translating Figma designs into production-ready code and collaborating in
              Agile/hybrid team environments.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="resume-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="resume-card-header">
              <Briefcase size={18} />
              <h3>Experience</h3>
            </div>
            {personal.experience.map(job => (
              <div key={job.id} className="resume-job">
                <div className="resume-job-top">
                  <div>
                    <h4>{job.role}</h4>
                    <span className="resume-company">{job.company}</span>
                  </div>
                  <span className="resume-period">{job.period}</span>
                </div>
                <ul className="resume-responsibilities">
                  {job.responsibilities.slice(0, 5).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            className="resume-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="resume-card-header">
              <GraduationCap size={18} />
              <h3>Education</h3>
            </div>
            {personal.education.map((edu, i) => (
              <div key={i} className="resume-edu">
                <div className="resume-job-top">
                  <div>
                    <h4>{edu.degree}</h4>
                    <span className="resume-company">{edu.institution}</span>
                    <p className="resume-university">{edu.university}</p>
                  </div>
                  <span className="resume-period">Class of {edu.year}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Key Skills */}
          <motion.div
            className="resume-card card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="resume-card-header">
              <Code size={18} />
              <h3>Core Skills</h3>
            </div>
            <div className="resume-skills-grid">
              {skills.map((group, i) => (
                <div key={i} className="resume-skill-group">
                  <span className="resume-skill-label" style={{ color: group.color }}>
                    {group.icon} {group.category}
                  </span>
                  <div className="resume-skill-tags">
                    {group.items.filter(s => s.level === 'primary').map((s, si) => (
                      <span key={si} className="tag">{s.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
