import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Link2, GitBranch, Send, CheckCircle, AlertCircle, MapPin, MessageSquare } from 'lucide-react';
import personal from '../data/personal';
import './Contact.css';

// ─────────────────────────────────────────────────────────
//  FORMSPREE SETUP — FREE, NO BACKEND NEEDED
//  Steps:
//  1. Go to https://formspree.io → Sign up free
//  2. Create new form → Copy the endpoint URL
//  3. Replace the URL below with your endpoint
//  Example: 'https://formspree.io/f/xyzabc12'
// ─────────────────────────────────────────────────────────
const FORMSPREE_URL = 'https://formspree.io/f/xeaepavy'; // ← REPLACE THIS

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      errs.name = 'Name must be at least 2 characters';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email address';
    if (!form.subject.trim() || form.subject.trim().length < 3)
      errs.subject = 'Subject is required';
    if (!form.message.trim() || form.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('sending');

    // Check if Formspree is configured
    if (FORMSPREE_URL.includes('YOUR_FORM_ID')) {
      // Fallback: open email client with pre-filled message
      const mailtoLink = `mailto:${personal.email}`
        + `?subject=${encodeURIComponent('[Portfolio Inquiry] ' + form.subject)}`
        + `&body=${encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
          )}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
      return;
    }

    // Send via Formspree
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `[Portfolio] ${form.subject} — from ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 6000);
  };

  const contactItems = [
    {
      id: 'contact-email',
      icon: <Mail size={20} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      id: 'contact-phone',
      icon: <Phone size={20} />,
      label: 'Phone / WhatsApp',
      value: personal.phone,
      href: personal.whatsapp,
    },
    {
      id: 'contact-linkedin',
      icon: <Link2 size={20} />,
      label: 'LinkedIn',
      value: 'prashant-shishodia-971224258',
      href: personal.linkedin,
    },
    {
      id: 'contact-github',
      icon: <GitBranch size={20} />,
      label: 'GitHub',
      value: personal.github.replace('https://github.com/', 'github.com/'),
      href: personal.github,
    },
    {
      id: 'contact-location',
      icon: <MapPin size={20} />,
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Open to full-time opportunities, freelance projects, and collaboration.
            Send a message and I'll reply within 24 hours!
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-intro">
              <h3>Open to Opportunities</h3>
              <p>
                Whether you're looking for a React Native developer for your team,
                need a mobile app built, or just want to connect — I'd love to hear
                from you. I respond to all genuine inquiries within 24 hours.
              </p>
            </div>

            <div className="contact-list">
              {contactItems.map(item => (
                <div key={item.id} className="contact-item card" id={item.id}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <div className="contact-item-label">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="contact-item-value"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-item-value static">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp quick link */}
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              id="contact-whatsapp"
            >
              <MessageSquare size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="contact-form card"
              noValidate
              id="contact-form"
            >
              <div className="form-title-row">
                <h3 className="form-title">Send a Message</h3>
                <span className="form-badge">📩 Replies within 24h</span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={errors.name ? 'error' : ''}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    disabled={status === 'sending'}
                  />
                  {errors.name && (
                    <span className="field-error" id="name-error" role="alert">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email-input">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email-input"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? 'error' : ''}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    disabled={status === 'sending'}
                  />
                  {errors.email && (
                    <span className="field-error" id="email-error" role="alert">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject *</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. React Native Developer Opportunity / Freelance Project"
                  className={errors.subject ? 'error' : ''}
                  disabled={status === 'sending'}
                />
                {errors.subject && (
                  <span className="field-error" role="alert">{errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or question..."
                  rows={5}
                  className={errors.message ? 'error' : ''}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  disabled={status === 'sending'}
                />
                {errors.message && (
                  <span className="field-error" id="message-error" role="alert">{errors.message}</span>
                )}
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="form-success" role="alert">
                  <CheckCircle size={18} />
                  <div>
                    <strong>Message sent successfully!</strong>
                    <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div className="form-error-msg" role="alert">
                  <AlertCircle size={18} />
                  <div>
                    <strong>Something went wrong.</strong>
                    <p>Please try emailing directly at <a href={`mailto:${personal.email}`}>{personal.email}</a></p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'sending' || status === 'success'}
                id="contact-submit"
              >
                {status === 'sending' ? (
                  <><span className="sending-spinner" /> Sending...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={18} /> Sent!</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>

              <p className="form-note">
                All inquiries are received directly in my inbox at{' '}
                <strong>{personal.email}</strong>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
