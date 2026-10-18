import { motion } from 'framer-motion';
import skills from '../data/skills';
import './Skills.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">
            Tools I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-subtitle">
            A curated set of technologies I use to build mobile and web applications
          </p>
        </div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
        >
          {skills.map((group, gi) => (
            <motion.div
              key={gi}
              className="skill-group card"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              <div className="skill-group-header" style={{ '--group-color': group.color }}>
                <span className="skill-group-icon">{group.icon}</span>
                <h3 className="skill-group-title">{group.category}</h3>
              </div>
              <div className="skill-items">
                {group.items.map((skill, si) => (
                  <div
                    key={si}
                    className={`skill-item ${skill.level}`}
                  >
                    <span className="skill-dot" style={{ background: group.color }} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
