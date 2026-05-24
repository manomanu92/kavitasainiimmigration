import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { submitForm } from '../utils/submitForm';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject) return;

    setIsSubmitting(true);
    setError('');

    try {
      await submitForm({ formType: 'contact', ...formData });
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
      console.error('[Contact] submit error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={styles.page}>

      {/* Hero */}
      <div style={styles.hero}>
        <img src="/images/21.jpg" alt="Contact Kavita Saini Immigration" style={styles.heroImg} />
      </div>

      {/* Form Section */}
      <div style={styles.formSection}>
        <div className="container" style={styles.formInner}>
          <h2 style={styles.formHeading}>Drop a Message</h2>
          <p style={styles.formSubHeading}>GET IN TOUCH</p>

          {submitted ? (
            <div style={styles.successBox}>
              <CheckCircle2 size={48} color="var(--accent)" style={{ marginBottom: '16px' }} />
              <p style={styles.successText}>
                Thank you! We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.threeCol}>
                <div className="form-group">
                  <label className="form-label">Your name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Your email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your message (optional)</label>
                <textarea
                  name="message"
                  className="form-control"
                  style={styles.textarea}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              {error && <p style={styles.errorText}>{error}</p>}

              <button
                type="submit"
                className="btn"
                style={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Office Addresses */}
      <div style={styles.officesSection}>
        <div className="container">
          <div style={styles.officesGrid}>

            {/* Ropar */}
            <div style={styles.officeItem}>
              <p style={styles.officeText}>
                SCF 10, GIANI ZAIL SINGH NAGAR, ROPAR, Punjab
              </p>
              <div style={styles.officeContact}>
                <a href="tel:+919816221774" style={styles.contactLink}>+91 98162 21774</a>
              </div>
            </div>

            {/* Mississauga */}
            <div style={styles.officeItem}>
              <p style={styles.officeText}>
                Mississauga, Toronto
              </p>
              <div style={styles.officeContact}>
                <a href="tel:+14372323647" style={styles.contactLink}>+1 (437) 232 3647</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div style={styles.mapSection}>
        <iframe
          title="Mississauga, ON, Canada"
          src="https://maps.google.com/maps?q=43.5852972,-79.6449838&t=m&z=15&ie=UTF8&iwloc=near&output=embed"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#ffffff'
  },

  /* Hero */
  hero: {
    width: '100%',
    lineHeight: 0
  },
  heroImg: {
    width: '100%',
    display: 'block',
    height: 'auto'
  },

  /* Form */
  formSection: {
    backgroundColor: '#f7f7f7',
    padding: '70px 0 60px'
  },
  formInner: {
    maxWidth: '960px'
  },
  formHeading: {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '6px'
  },
  formSubHeading: {
    fontSize: '0.95rem',
    color: '#888888',
    textAlign: 'center',
    letterSpacing: '2px',
    marginBottom: '40px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  threeCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px'
  },
  textarea: {
    height: '150px',
    resize: 'vertical'
  },
  submitBtn: {
    width: '140px',
    padding: '12px 24px',
    marginTop: '8px',
    fontSize: '1rem',
    backgroundColor: '#1d6cf0',
    borderColor: '#1d6cf0',
    color: '#ffffff'
  },
  successBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0',
    textAlign: 'center'
  },
  successText: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)'
  },
  errorText: {
    color: '#d32f2f',
    fontSize: '0.875rem',
    marginBottom: '8px'
  },

  /* Offices */
  officesSection: {
    padding: '60px 0',
    backgroundColor: '#fafafa',
    backgroundImage: 'url(/images/bg-map.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  officesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '32px',
    marginBottom: '40px'
  },
  officeItem: {
    textAlign: 'center'
  },
  officeText: {
    fontSize: '0.95rem',
    color: '#444444',
    lineHeight: '1.7',
    marginBottom: '12px'
  },
  officeContact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px'
  },
  contactLink: {
    display: 'block',
    fontSize: '0.95rem',
    color: '#333333',
    textDecoration: 'none',
    lineHeight: '1.8'
  },
  emailLink: {
    display: 'block',
    fontSize: '0.95rem',
    color: 'var(--primary)',
    fontWeight: '500',
    textDecoration: 'none',
    lineHeight: '1.8'
  },

  /* Map */
  mapSection: {
    width: '100%'
  }
};

const responsiveCss = `
  @media (max-width: 768px) {
    div[style*="grid-template-columns: 1fr 1fr 1fr"] {
      grid-template-columns: 1fr !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const el = document.createElement('style');
  el.textContent = responsiveCss;
  document.head.appendChild(el);
}
