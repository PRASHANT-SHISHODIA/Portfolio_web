import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Link2, Mail, Phone, Download, ArrowDown, ChevronRight } from 'lucide-react';
import personal from '../data/personal';
import profilePhoto from '../assets/prashant-photo.jpg';
import './Hero.css';

const codeSnippet = `// Prashant Shishodia
const developer = {
  name: "Prashant Shishodia",
  role: "React Native Dev",
  skills: [
    "React Native",
    "JavaScript",
    "REST APIs",
    "Mobile UI/UX",
  ],
  status: "Available 🟢",
  passion: "Building apps",
};

export default developer;`;

function Hero() {
  const [typedText, setTypedText] = useState('');
  const [lineIdx, setLineIdx] = useState(0);
  const roles = [
    'React Native Developer',
    'Mobile App Developer',
    'Android App Builder',
    'JavaScript Engineer',
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < current.length) {
          setTypedText(current.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(current.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, roleIdx, isDeleting]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">
        {/* Left: Text Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Status Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot" />
            Available for opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Prashant<br />
            <span className="gradient-text">Shishodia</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="role-prefix">{'<'}</span>
            <span className="role-text">{typedText}</span>
            <span className="cursor" />
            <span className="role-suffix">{'/>'}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building <strong>useful</strong>, <strong>scalable</strong>, and{' '}
            <strong>user-friendly</strong> mobile applications with React Native.
            <br />
            1+ year of experience crafting cross-platform apps for Android.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button className="btn btn-primary" onClick={scrollToProjects} id="hero-view-projects">
              View My Projects <ChevronRight size={16} />
            </button>
            <a
              href={personal.resumeFile}
              download
              className="btn btn-outline"
              id="hero-download-resume"
            >
              <Download size={16} /> Download Resume
            </a>
            <button className="btn btn-ghost" onClick={scrollToContact} id="hero-contact">
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
              id="hero-github"
            >
              <GitBranch size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
              id="hero-linkedin"
            >
              <Link2 size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="social-link"
              aria-label="Send Email"
              id="hero-email"
            >
              <Mail size={20} />
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, '')}`}
              className="social-link"
              aria-label="Call Phone"
              id="hero-phone"
            >
              <Phone size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Photo + Code Card */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Profile Photo */}
          <div className="hero-photo-wrapper animate-float">
            <div className="photo-ring" />
            <div className="photo-ring photo-ring-2" />
            <img
              src={profilePhoto}
              alt="Prashant Shishodia — React Native Developer"
              className="hero-photo"
            />
            <div className="photo-badge photo-badge-1">
              <span>📱</span> React Native
            </div>
            <div className="photo-badge photo-badge-2">
              <span>⚡</span> 1+ Year Exp
            </div>
          </div>

          {/* Code Card */}
          <motion.div
            className="code-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="code-header">
              <div className="code-dot code-dot-red" />
              <div className="code-dot code-dot-yellow" />
              <div className="code-dot code-dot-green" />
              <span className="code-filename">developer.js</span>
            </div>
            <pre className="code-body">
              <code>{codeSnippet}</code>
            </pre>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <ArrowDown size={16} />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
