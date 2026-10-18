import { Link } from 'react-router-dom';
import { GitBranch, Link2, Mail, Phone, Code2, Heart } from 'lucide-react';
import personal from '../data/personal';
import './Footer.css';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  const scrollTo = (href) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon"><Code2 size={18} /></div>
              <span>Prashant<span className="logo-dot">.</span></span>
            </div>
            <p className="footer-tagline">
              React Native Developer building cross-platform mobile applications.
              Open to opportunities and collaboration.
            </p>
            <div className="footer-socials">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub" id="footer-github">
                <GitBranch size={18} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn" id="footer-linkedin">
                <Link2 size={18} />
              </a>
              <a href={`mailto:${personal.email}`} className="footer-social" aria-label="Email" id="footer-email">
                <Mail size={18} />
              </a>
              <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp" id="footer-whatsapp">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <button
                    className="footer-link"
                    onClick={() => scrollTo(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${personal.email}`} className="footer-link">
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="footer-link">
                  {personal.phone}
                </a>
              </li>
              <li>
                <span className="footer-link-plain">{personal.location}</span>
              </li>
              <li>
                <a
                  href={personal.resumeFile}
                  download
                  className="footer-link"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Prashant Shishodia. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <Heart size={13} className="heart-icon" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
