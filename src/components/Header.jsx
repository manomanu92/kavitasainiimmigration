import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';
import imgUrl from '../utils/imgUrl';

const Facebook = ({ size = 16, ...props }) => (
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

const Instagram = ({ size = 16, ...props }) => (
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

const Youtube = ({ size = 16, ...props }) => (
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

export default function Header({ onOpenCallback }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesSub, setMobileServicesSub] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileServicesSub(null);
  }, [location]);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div style={styles.topBar}>
        <div className="container" style={styles.topBarContent}>
          <div style={styles.contactGroup}>
            <a href="mailto:kavitasainiimmigration@gmail.com" style={styles.topLink}>
              <Mail size={14} style={{ marginRight: '6px' }} />
              <span style={styles.topText}>kavitasainiimmigration@gmail.com</span>
            </a>
            <a href="tel:+14372323647" style={styles.topLink}>
              <Phone size={14} style={{ marginRight: '6px' }} />
              <span style={styles.topText}>+1 (437) 232 3647</span>
            </a>
          </div>
          <div style={styles.topBarRight}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <a href="https://www.facebook.com/kavitasainiimmigration/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', display: 'flex', alignItems: 'center' }} aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://www.instagram.com/kavitasainiimmigration/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', display: 'flex', alignItems: 'center' }} aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://www.youtube.com/@hashtagEducationOverseas" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', display: 'flex', alignItems: 'center' }} aria-label="YouTube">
                <Youtube size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={scrolled ? 'glass' : ''} 
        style={{
          ...styles.navbar,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.98)',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(103, 35, 154, 0.08)' : '1px solid rgba(103, 35, 154, 0.04)',
          position: scrolled ? 'fixed' : 'sticky'
        }}
      >
        <div className="container" style={styles.navContainer}>
          {/* Logo */}
          <Link to="/" style={styles.logoWrap}>
            <img
              src={imgUrl("/images/kavita-saini-logo.jpeg")}
              alt="Kavita Saini Immigration"
              style={{ height: 'auto', width: '200px', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={styles.desktopNav}>
            <NavLink to="/" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.navLinkActive } : styles.navLink}>Home</NavLink>
            <NavLink to="/about" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.navLinkActive } : styles.navLink}>About Us</NavLink>
            
            {/* Services Dropdown */}
            <div style={styles.navDropdownItem}>
              <button style={styles.navLinkBtn}>
                Services <ChevronDown size={14} style={styles.chevron} />
              </button>
              <div style={styles.dropdownMenu}>
                {/* Language (Sub-menu) */}
                <div style={styles.dropdownItemContainer} className="dropdown-item-container">
                  <span style={styles.dropdownLink} className="dropdown-link-item">
                    Language
                  </span>
                  <div style={styles.subMenu} className="sub-menu">
                    <Link to="/ielts" style={styles.subDropdownLink}>IELTS</Link>
                    <Link to="/spoken-english" style={styles.subDropdownLink}>Spoken English</Link>
                  </div>
                </div>

                {/* Study Visa (Sub-menu) */}
                <div style={styles.dropdownItemContainer} className="dropdown-item-container">
                  <Link to="/study-visa" style={styles.dropdownLink} className="dropdown-link-item">
                    Study Visa
                  </Link>
                  <div style={styles.subMenu} className="sub-menu">
                    <Link to="/study-visa/canada" style={styles.subDropdownLink}>Canada Study Visa</Link>
                    <Link to="/study-visa/usa" style={styles.subDropdownLink}>USA Study Visa</Link>
                    <Link to="/study-visa/uk" style={styles.subDropdownLink}>UK Study Visa</Link>
                    <Link to="/study-visa/australia" style={styles.subDropdownLink}>Australia Study Visa</Link>
                    <Link to="/study-visa/new-zealand" style={styles.subDropdownLink}>New Zealand Study Visa</Link>
                  </div>
                </div>

                {/* Tourist Visa (Sub-menu) */}
                <div style={styles.dropdownItemContainer} className="dropdown-item-container">
                  <Link to="/tourist-visa" style={styles.dropdownLink} className="dropdown-link-item">
                    Tourist Visa
                  </Link>
                  <div style={styles.subMenu} className="sub-menu">
                    <Link to="/tourist-visa/uk" style={styles.subDropdownLink}>UK Tourist Visa</Link>
                    <Link to="/tourist-visa/australia" style={styles.subDropdownLink}>Australia Tourist Visa</Link>
                    <Link to="/tourist-visa/usa" style={styles.subDropdownLink}>USA Tourist Visa</Link>
                    <Link to="/tourist-visa/canada" style={styles.subDropdownLink}>Canada Tourist Visa</Link>
                  </div>
                </div>

                {/* Spouse Visa (Direct link) */}
                <div style={styles.dropdownItemContainer} className="dropdown-item-container">
                  <Link to="/spouse-visa" style={styles.dropdownLink} className="dropdown-link-item">
                    Spouse Visa
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/ventures" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.navLinkActive } : styles.navLink}>Ventures</NavLink>
            <NavLink to="/contact-us" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.navLinkActive } : styles.navLink}>Contact Us</NavLink>
          </nav>

          {/* Right Group (Desktop) */}
          <div className="header-right-desktop" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={onOpenCallback} className="btn btn-primary" style={styles.ctaBtn}>
              ARRANGE A CALL BACK
            </button>
            <a 
              href="https://www.icef.com/agency/0010J0000203FPuQAM" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img 
                src={imgUrl("/images/a3f4057ea4700428c68e982053d61e0fa105e8b758fa700b7bac47e31fac957a-qoat7s92awoujz19jrgu24noor8s3fvujaf6wmwwxs.png")} 
                alt="ICEF Trained Agent Badge" 
                className="icef-badge-img"
                style={{ height: '65px', width: 'auto', transition: 'transform 0.2s' }}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button style={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div style={styles.mobileDrawer} className="glass">
            <div style={styles.mobileNavLinks}>
              <Link to="/" style={styles.mobileLink}>Home</Link>
              <Link to="/about" style={styles.mobileLink}>About Us</Link>
              
              {/* Mobile Accordion: Services */}
              <div style={styles.mobileAccordion}>
                <button onClick={() => toggleDropdown(1)} style={styles.mobileAccordionBtn}>
                  Services <ChevronDown size={16} style={{
                    transform: activeDropdown === 1 ? 'rotate(180deg)' : 'none',
                    transition: '0.2s'
                  }} />
                </button>
                {activeDropdown === 1 && (
                  <div style={styles.mobileSubLinks}>
                    
                    {/* Mobile Sub-Accordion: Language */}
                    <div style={styles.mobileAccordion}>
                      <button 
                        onClick={() => setMobileServicesSub(mobileServicesSub === 'language' ? null : 'language')}
                        style={styles.mobileSubAccordionBtn}
                      >
                        Language <ChevronDown size={14} style={{
                          transform: mobileServicesSub === 'language' ? 'rotate(180deg)' : 'none',
                          transition: '0.2s'
                        }} />
                      </button>
                      {mobileServicesSub === 'language' && (
                        <div style={styles.mobileSubSubLinks}>
                          <Link to="/ielts" style={styles.mobileSubLink}>IELTS</Link>
                          <Link to="/spoken-english" style={styles.mobileSubLink}>Spoken English</Link>
                        </div>
                      )}
                    </div>

                    {/* Mobile Sub-Accordion: Study Visa */}
                    <div style={styles.mobileAccordion}>
                      <button 
                        onClick={() => setMobileServicesSub(mobileServicesSub === 'study' ? null : 'study')}
                        style={styles.mobileSubAccordionBtn}
                      >
                        Study Visa <ChevronDown size={14} style={{
                          transform: mobileServicesSub === 'study' ? 'rotate(180deg)' : 'none',
                          transition: '0.2s'
                        }} />
                      </button>
                      {mobileServicesSub === 'study' && (
                        <div style={styles.mobileSubSubLinks}>
                          <Link to="/study-visa" style={styles.mobileSubLink}>All Study Visas</Link>
                          <Link to="/study-visa/canada" style={styles.mobileSubLink}>Canada Study Visa</Link>
                          <Link to="/study-visa/usa" style={styles.mobileSubLink}>USA Study Visa</Link>
                          <Link to="/study-visa/uk" style={styles.mobileSubLink}>UK Study Visa</Link>
                          <Link to="/study-visa/australia" style={styles.mobileSubLink}>Australia Study Visa</Link>
                          <Link to="/study-visa/new-zealand" style={styles.mobileSubLink}>New Zealand Study Visa</Link>
                        </div>
                      )}
                    </div>

                    {/* Mobile Sub-Accordion: Tourist Visa */}
                    <div style={styles.mobileAccordion}>
                      <button 
                        onClick={() => setMobileServicesSub(mobileServicesSub === 'tourist' ? null : 'tourist')}
                        style={styles.mobileSubAccordionBtn}
                      >
                        Tourist Visa <ChevronDown size={14} style={{
                          transform: mobileServicesSub === 'tourist' ? 'rotate(180deg)' : 'none',
                          transition: '0.2s'
                        }} />
                      </button>
                      {mobileServicesSub === 'tourist' && (
                        <div style={styles.mobileSubSubLinks}>
                          <Link to="/tourist-visa" style={styles.mobileSubLink}>All Tourist Visas</Link>
                          <Link to="/tourist-visa/uk" style={styles.mobileSubLink}>UK Tourist Visa</Link>
                          <Link to="/tourist-visa/australia" style={styles.mobileSubLink}>Australia Tourist Visa</Link>
                          <Link to="/tourist-visa/usa" style={styles.mobileSubLink}>USA Tourist Visa</Link>
                          <Link to="/tourist-visa/canada" style={styles.mobileSubLink}>Canada Tourist Visa</Link>
                        </div>
                      )}
                    </div>

                    {/* Spouse Visa (Direct Link) */}
                    <Link to="/spouse-visa" style={styles.mobileSubLinkDirect}>Spouse Visa</Link>
                  </div>
                )}
              </div>

              <Link to="/ventures" style={styles.mobileLink}>Ventures</Link>
              <Link to="/contact-us" style={styles.mobileLink}>Contact Us</Link>
              
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenCallback();
                }} 
                className="btn btn-primary" 
                style={styles.mobileCtaBtn}
              >
                ARRANGE A CALL BACK
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

const styles = {
  topBar: {
    backgroundColor: '#67239a',
    color: '#ffffff',
    padding: '8px 0',
    fontSize: '0.8rem',
    borderBottom: 'none',
    zIndex: 1000,
    position: 'relative'
  },
  topBarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px'
  },
  contactGroup: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  },
  topLink: {
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff',
    transition: '0.2s',
    '&:hover': {
      color: '#ffffff'
    }
  },
  topText: {
    fontFamily: 'var(--font-body)',
    fontWeight: '400'
  },
  topBarRight: {
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff',
    fontWeight: '500'
  },
  navbar: {
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logoTag: {
    backgroundColor: 'var(--primary)',
    color: '#ffffff',
    fontFamily: 'var(--font-title)',
    fontWeight: '800',
    fontSize: '1.8rem',
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(103, 35, 154, 0.2)'
  },
  logoTextGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logoName: {
    fontFamily: 'var(--font-title)',
    fontWeight: '800',
    fontSize: '1.25rem',
    color: 'var(--primary-dark)',
    letterSpacing: '0.5px',
    lineHeight: '1.1'
  },
  logoSub: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.625rem',
    letterSpacing: '1.5px',
    color: 'var(--accent-dark)',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    height: '100%'
  },
  navLink: {
    fontFamily: 'var(--font-title)',
    fontWeight: '550',
    fontSize: '0.925rem',
    padding: '8px 16px',
    color: 'var(--text-main)',
    borderRadius: '4px',
    transition: '0.2s',
    '&:hover': {
      color: 'var(--primary)',
      backgroundColor: 'rgba(103, 35, 154, 0.04)'
    }
  },
  navLinkActive: {
    color: 'var(--primary)',
    fontWeight: '600'
  },
  navLinkBtn: {
    fontFamily: 'var(--font-title)',
    fontWeight: '550',
    fontSize: '0.925rem',
    padding: '8px 16px',
    color: 'var(--text-main)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    borderRadius: '4px',
    transition: '0.2s'
  },
  chevron: {
    transition: 'transform 0.2s ease',
    opacity: 0.7
  },
  navDropdownItem: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover > div': {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)'
    },
    '&:hover button': {
      color: 'var(--primary)',
      backgroundColor: 'rgba(103, 35, 154, 0.04)'
    },
    '&:hover svg': {
      transform: 'rotate(180deg)',
      color: 'var(--primary)'
    }
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '240px',
    padding: '6px 0',
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)',
    zIndex: 1010,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(103, 35, 154, 0.15)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
    overflow: 'visible'
  },
  dropdownItemContainer: {
    position: 'relative',
    width: '100%',
    display: 'block'
  },
  dropdownLink: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    padding: '10px 20px',
    color: 'var(--primary)',
    fontWeight: '600',
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    textDecoration: 'none',
    transition: 'all 0.2s',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    textAlign: 'left'
  },
  subMenu: {
    position: 'absolute',
    top: 0,
    left: '100%',
    width: '220px',
    padding: '6px 0',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(103, 35, 154, 0.08)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    borderRadius: '6px',
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateY(5px)',
    transition: 'all 0.2s ease',
    zIndex: 1020,
    display: 'flex',
    flexDirection: 'column'
  },
  subDropdownLink: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    padding: '10px 20px',
    color: 'var(--primary)',
    fontWeight: '600',
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    textDecoration: 'none',
    transition: 'all 0.2s'
  },
  mobileSubAccordionBtn: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.95rem',
    fontWeight: '600',
    padding: '8px 12px',
    background: 'none',
    border: 'none',
    color: 'var(--primary-dark)',
    cursor: 'pointer',
    borderRadius: '6px'
  },
  mobileSubSubLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    paddingLeft: '16px',
    marginTop: '4px',
    borderLeft: '1.5px solid rgba(103, 35, 154, 0.08)'
  },
  mobileSubLinkDirect: {
    fontSize: '0.95rem',
    padding: '8px 12px',
    color: 'var(--primary-dark)',
    fontWeight: '600',
    display: 'block',
    textDecoration: 'none'
  },
  ctaBtn: {
    fontSize: '0.825rem',
    padding: '10px 20px',
    letterSpacing: '0.5px'
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'var(--primary-dark)',
    cursor: 'pointer'
  },
  mobileDrawer: {
    position: 'absolute',
    top: '80px',
    left: 0,
    width: '100%',
    maxHeight: 'calc(100vh - 80px)',
    overflowY: 'auto',
    borderBottom: '1px solid rgba(103, 35, 154, 0.08)',
    boxShadow: '0 20px 40px rgba(12, 4, 20, 0.1)',
    padding: '24px 16px 36px',
    zIndex: 998,
    display: 'flex',
    flexDirection: 'column'
  },
  mobileNavLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  mobileLink: {
    fontSize: '1.05rem',
    fontWeight: '600',
    padding: '8px 12px',
    borderRadius: '6px',
    color: 'var(--primary-dark)',
    '&:hover': {
      backgroundColor: 'rgba(103, 35, 154, 0.04)'
    }
  },
  mobileAccordion: {
    display: 'flex',
    flexDirection: 'column'
  },
  mobileAccordionBtn: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.05rem',
    fontWeight: '600',
    padding: '8px 12px',
    background: 'none',
    border: 'none',
    color: 'var(--primary-dark)',
    cursor: 'pointer',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: 'rgba(103, 35, 154, 0.04)'
    }
  },
  mobileSubLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    paddingLeft: '24px',
    marginTop: '4px',
    borderLeft: '2px solid rgba(103, 35, 154, 0.08)'
  },
  mobileSubLink: {
    fontSize: '0.925rem',
    padding: '8px 12px',
    color: 'var(--text-muted)',
    fontWeight: '500',
    '&:hover': {
      color: 'var(--primary)'
    }
  },
  mobileCtaBtn: {
    width: '100%',
    marginTop: '16px',
    padding: '12px'
  }
};

// Inject CSS styles for hover dropdowns
const cssText = `
  nav div:hover > div {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateY(0) !important;
  }
  nav div:hover button {
    color: var(--primary) !important;
    background-color: rgba(103, 35, 154, 0.04) !important;
  }
  nav div:hover svg {
    transform: rotate(180deg) !important;
    color: var(--primary) !important;
  }

  /* Show sub-menus on hover */
  .dropdown-item-container:hover > .sub-menu {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateY(0) !important;
  }
  
  /* Highlight active item */
  .dropdown-item-container:hover > .dropdown-link-item {
    background-color: var(--primary) !important;
    color: #ffffff !important;
  }

  /* Sub-menu item hover style */
  .sub-menu a:hover {
    background-color: rgba(103, 35, 154, 0.04) !important;
    color: var(--primary) !important;
    padding-left: 24px !important;
  }
  
  @media (max-width: 1024px) {
    header nav, .header-right-desktop {
      display: none !important;
    }
    header button[aria-label="Toggle menu"] {
      display: block !important;
    }
  }
  .icef-badge-img:hover {
    transform: scale(1.05);
  }
`;

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.textContent = cssText;
  document.head.appendChild(styleEl);
}
