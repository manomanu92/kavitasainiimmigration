import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { submitForm } from '../utils/submitForm';

export default function CallBackModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: 'Study Visa'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
      setServerError('');
      setFormData({ name: '', email: '', phone: '', visaType: 'Study Visa' });
      setErrors({});
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError('');

    try {
      await submitForm({ formType: 'callback', ...formData });
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2500);
    } catch (err) {
      setServerError('Something went wrong. Please try again or call us directly.');
      console.error('[CallBackModal] submit error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.backdrop} onClick={onClose}>
      <div
        className="glass"
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button style={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {isSuccess ? (
          <div style={styles.successContainer}>
            <CheckCircle2 size={56} color="var(--accent)" style={styles.successIcon} />
            <h3 style={styles.successTitle}>Request Submitted!</h3>
            <p style={styles.successMessage}>
              We have received your callback request. Our immigration counselors will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <h3 style={styles.title}>Arrange a Call Back</h3>
            <p style={styles.subtitle}>
              Fill in your details below and we will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <div className="form-group">
                <label className="form-label" htmlFor="callback-name">Name</label>
                <input
                  id="callback-name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.name && <span style={styles.errorText}>{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="callback-email">Email Address</label>
                <input
                  id="callback-email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="username@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.email && <span style={styles.errorText}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="callback-phone">Phone Number</label>
                <input
                  id="callback-phone"
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="callback-visa">Interested Visa / Service</label>
                <select
                  id="callback-visa"
                  name="visaType"
                  className="form-control"
                  value={formData.visaType}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value="Study Visa">Study Visa</option>
                  <option value="Tourist Visa">Tourist Visa</option>
                  <option value="Employment Visa">Employment Visa</option>
                  <option value="Spouse Visa">Spouse Visa</option>
                  <option value="Language Classes">IELTS / Spoken English</option>
                </select>
              </div>

              {serverError && <p style={styles.serverError}>{serverError}</p>}

              <button
                type="submit"
                className="btn btn-primary"
                style={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'SEND'}
                {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(12, 4, 20, 0.45)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    animation: 'fadeIn 0.2s ease-out'
  },
  modal: {
    width: '100%',
    maxWidth: '480px',
    borderRadius: 'var(--radius-lg)',
    padding: '36px',
    position: 'relative',
    boxShadow: '0 24px 60px rgba(103, 35, 154, 0.25)',
    animation: 'slideUp 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    border: '1px solid rgba(255, 255, 255, 0.5)'
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-muted)',
    padding: '4px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.2s'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--primary-dark)',
    marginBottom: '8px',
    fontFamily: 'var(--font-title)'
  },
  subtitle: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    marginBottom: '28px',
    lineHeight: '1.4'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  submitBtn: {
    width: '100%',
    marginTop: '12px',
    padding: '14px',
    fontSize: '1rem',
    letterSpacing: '1px'
  },
  errorText: {
    color: '#d32f2f',
    fontSize: '0.75rem',
    marginTop: '4px',
    display: 'block',
    fontFamily: 'var(--font-body)'
  },
  serverError: {
    color: '#d32f2f',
    fontSize: '0.85rem',
    marginBottom: '8px',
    textAlign: 'center'
  },
  successContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '24px 0'
  },
  successIcon: {
    marginBottom: '20px',
    animation: 'scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  successTitle: {
    fontSize: '1.35rem',
    fontWeight: '700',
    color: 'var(--primary-dark)',
    marginBottom: '8px'
  },
  successMessage: {
    fontSize: '0.925rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5'
  }
};
