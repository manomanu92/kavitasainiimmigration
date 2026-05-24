import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldAlert, Send } from 'lucide-react';
import imgUrl from '../utils/imgUrl';

const Facebook = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* Upper Footer Columns */}
      <div className="container" style={styles.footerTop}>
        <div style={styles.brandCol}>
          <div style={styles.logoWrap}>
            <img
              src={imgUrl("/images/kavita-saini-logo.jpeg")}
              alt="Kavita Saini Immigration"
              style={{ height: '60px', width: 'auto', objectFit: 'contain', background: 'white', borderRadius: '6px', padding: '4px 8px' }}
            />
          </div>
          <p style={styles.brandText}>
             Kavita Saini Immigration Inc. is a Canada-based immigration consulting firm operating in the Greater Toronto area (Mississauga, Ontario), led by Kavita Saini.          </p>
          <div style={styles.socials} className="social-icons">
            <a href="https://www.facebook.com/kavitasainiimmigration/" target="_blank" rel="noopener noreferrer" style={styles.socialLink} aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/kavitasainiimmigration/" target="_blank" rel="noopener noreferrer" style={styles.socialLink} aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/@hashtagEducationOverseas" target="_blank" rel="noopener noreferrer" style={styles.socialLink} aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div style={styles.linksCol}>
          <h4 style={styles.colTitle}>Useful links</h4>
          <ul style={styles.linksList}>
            <li><Link to="/about" style={styles.link}>About</Link></li>
            <li><Link to="/study-visa" style={styles.link}>Services</Link></li>
            <li><Link to="/about" style={styles.link}>Faq</Link></li>
            <li><Link to="/contact-us" style={styles.link}>Contact Us</Link></li>
          </ul>
        </div>

        <div style={styles.linksCol}>
          <h4 style={styles.colTitle}>Our Services</h4>
          <ul style={styles.linksList}>
            <li><Link to="/ielts" style={styles.link}>IELTS</Link></li>
            <li><Link to="/spoken-english" style={styles.link}>Spoken english</Link></li>
            <li><Link to="/spouse-visa" style={styles.link}>Spouse Visa</Link></li>
            <li><Link to="/study-visa" style={styles.link}>Study Visa</Link></li>
            <li><Link to="/tourist-visa" style={styles.link}>Tourist Visa</Link></li>
          </ul>
        </div>

        <div style={styles.contactCol}>
          <h4 style={styles.colTitle}>Contact Us</h4>
          <div style={styles.contactItems}>
            <p style={styles.contactText}>SCF 10, GIANI ZAIL SINGH NAGAR, ROPAR, Punjab</p>
            <p style={styles.contactText}>Mississauga, Toronto</p>
            <p style={{ ...styles.contactText, marginTop: '8px' }}>+1 (437) 232 3647</p>
          </div>

          {/* Email Subscription Box */}
          <div style={styles.subscribeBox}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              style={styles.subscribeInput} 
            />
            <button style={styles.subscribeBtn} aria-label="Subscribe">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Legal & Disclaimer Section */}
      <div style={styles.footerDisclaimerBg}>
        <div className="container" style={styles.disclaimerContainer}>
          <div style={styles.disclaimerIconWrap}>
            <ShieldAlert size={20} color="#ffffff" />
          </div>
          <p style={styles.disclaimerText}>
            <strong>Disclaimer:</strong> The application approval for Study Permit, Post Graduation Work Permit, Permanent Residence or any kind of visa is the sole discretion of Immigration Refugees and Citizenship of Canada (IRCC) or respective sovereign governments as per their rules and regulations.
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div style={styles.footerBottom}>
        <div className="container" style={styles.footerBottomContent}>
          <p>Copyright &copy; 2026 Kavita Saini Immigration Inc.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#67239a',
    color: '#ffffff',
    paddingTop: '80px',
    fontSize: '0.9rem',
    borderTop: 'none',
    position: 'relative'
  },
  footerTop: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1.5fr',
    gap: '40px',
    paddingBottom: '56px',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  brandText: {
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: '0.9rem'
  },
  socials: {
    display: 'flex',
    gap: '12px'
  },
  socialLink: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    transition: '0.2s',
  },
  linksCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  colTitle: {
    color: '#e2a228',
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '8px',
    fontFamily: 'var(--font-title)'
  },
  linksList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  link: {
    color: 'rgba(255, 255, 255, 0.85)',
    transition: '0.2s',
  },
  contactCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  contactItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  contactText: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.5',
    margin: 0
  },
  subscribeBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#321a4f',
    borderRadius: '4px',
    width: '100%',
    maxWidth: '320px',
    marginTop: '16px',
    overflow: 'hidden',
    height: '42px',
    border: 'none'
  },
  subscribeInput: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    outline: 'none',
    fontSize: '0.85rem',
    width: '100%',
    padding: '0 14px',
    height: '100%',
  },
  subscribeBtn: {
    backgroundColor: '#ffffff',
    border: 'none',
    color: '#67239a',
    cursor: 'pointer',
    width: '42px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  footerDisclaimerBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '24px 0'
  },
  disclaimerContainer: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start'
  },
  disclaimerIconWrap: {
    flexShrink: 0,
    marginTop: '2px'
  },
  disclaimerText: {
    fontSize: '0.8rem',
    lineHeight: '1.5',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  footerBottom: {
    padding: '24px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.6)'
  },
  footerBottomContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px'
  },
  footerBottomLinks: {
    display: 'flex',
    gap: '20px'
  },
  bottomLink: {
    color: 'rgba(255, 255, 255, 0.6)',
    '&:hover': {
      color: '#ffffff'
    }
  }
};

// Inject responsive grid stylesheet styles into header context dynamically
const footerCssText = `
  footer a:hover {
    color: var(--accent) !important;
  }
  footer .social-icons a:hover {
    background-color: var(--primary) !important;
  }
  
  @media (max-width: 1024px) {
    footer div.container {
      grid-template-columns: 1fr 1fr !important;
      gap: 32px !important;
    }
  }
  @media (max-width: 768px) {
    footer div.container {
      grid-template-columns: 1fr !important;
      gap: 28px !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const footerStyleEl = document.createElement('style');
  footerStyleEl.textContent = footerCssText;
  document.head.appendChild(footerStyleEl);
}
