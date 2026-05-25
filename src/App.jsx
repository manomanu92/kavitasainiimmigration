import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CallBackModal from './components/CallBackModal';
import Home from './pages/Home';
import Contact from './pages/Contact';
import GenericPage from './pages/GenericPage';
import About from './pages/About';
import Services from './pages/Services';

// Scroll to top on navigation route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout" style={styles.appLayout}>
        <Header onOpenCallback={openModal} />
        
        <div style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home onOpenCallback={openModal} />} />
            <Route path="/contact-us" element={<Contact />} />
            
            {/* Core Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ielts" element={<GenericPage pageKey="ielts" />} />
            <Route path="/spoken-english" element={<GenericPage pageKey="spoken_english" />} />
            <Route path="/career-counselling" element={<GenericPage pageKey="career_counselling" />} />
            <Route path="/corporate-soft-skills" element={<GenericPage pageKey="corporate_soft_skills" />} />
            
            {/* Study Visas */}
            <Route path="/study-visa" element={<GenericPage pageKey="study_visa" />} />
            <Route path="/study-visa/canada" element={<GenericPage pageKey="canada_study_visa" />} />
            <Route path="/study-visa/usa" element={<GenericPage pageKey="usa_study_visa" />} />
            <Route path="/study-visa/uk" element={<GenericPage pageKey="uk_study_visa" />} />
            <Route path="/study-visa/australia" element={<GenericPage pageKey="australia_study_visa" />} />
            <Route path="/study-visa/new-zealand" element={<GenericPage pageKey="new_zealand_study_visa" />} />
            
            {/* Tourist Visas */}
            <Route path="/tourist-visa" element={<GenericPage pageKey="tourist_visa" />} />
            <Route path="/tourist-visa/canada" element={<GenericPage pageKey="canada_tourist_visa" />} />
            <Route path="/tourist-visa/usa" element={<GenericPage pageKey="usa_tourist_visa" />} />
            <Route path="/tourist-visa/uk" element={<GenericPage pageKey="uk_tourist_visa" />} />
            <Route path="/tourist-visa/australia" element={<GenericPage pageKey="australia_tourist_visa" />} />
            
            {/* Spouse & Ventures */}
            <Route path="/spouse-visa" element={<GenericPage pageKey="spouse_visa" />} />
            <Route path="/ventures" element={<GenericPage pageKey="ventures" />} />
          </Routes>
        </div>

        <Footer />

        {/* Global Floating Disclaimer Banner */}
        {showDisclaimer && (
          <div className="disclaimer-floating">
            <div className="disclaimer-inner">
              <span style={{ marginRight: '8px', fontSize: '1.2rem', color: '#ffb400', flexShrink: 0 }}>⚠️</span>
              <span style={{ flexGrow: 1, textAlign: 'left', fontWeight: '550' }}>
                <strong>Disclaimer:</strong> The application approval for Study Permit, Post Graduation Work Permit, Permanent Residence or any kind of visa is the sole discretion of Immigration Refugees and Citizenship of Canada as per their rules and regulations.
              </span>
              <button 
                onClick={() => setShowDisclaimer(false)} 
                className="close-disclaimer-btn" 
                aria-label="Dismiss disclaimer"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/14372323647"
          target="_blank" 
          rel="noopener noreferrer" 
          style={styles.whatsappFloat}
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.29 1.966 13.82 1.01 11.993 1.01c-5.452 0-9.88 4.37-9.885 9.8.001 1.77.475 3.5 1.374 5l-.946 3.454 3.52-.91zm11.387-5.464c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.674.15-.199.299-.772.979-.946 1.179-.175.2-.35.225-.651.075-3.007-1.502-5.074-3.445-5.986-5.019-.24-.413.24-.383.687-1.274.075-.15.038-.282-.019-.382-.056-.1-.475-1.146-.651-1.569-.171-.413-.344-.356-.475-.362-.122-.006-.263-.008-.403-.008-.14 0-.368.052-.56.262-.193.21-.735.719-.735 1.753s.75 2.036.855 2.179c.104.14 1.477 2.254 3.578 3.161.5.215.89.344 1.194.44.502.16.958.137 1.32.083.403-.06 1.78-.727 2.031-1.43.25-.701.25-1.3.175-1.429-.075-.13-.275-.23-.576-.38z"/>
          </svg>
        </a>

        {/* Global Floating Right Sidebar Social Tabs */}
        <div style={styles.floatingSidebar}>
          <a 
            href="https://www.facebook.com/kavitasainiimmigration/"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ ...styles.sidebarTab, backgroundColor: '#3b5998' }} 
            className="sidebar-tab-link"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a 
            href="https://www.youtube.com/@hashtagEducationOverseas" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ ...styles.sidebarTab, backgroundColor: '#ff0000' }} 
            className="sidebar-tab-link"
            aria-label="YouTube"
          >
            <YoutubeIcon />
          </a>
          <a 
            href="https://www.instagram.com/kavitasainiimmigration/"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ ...styles.sidebarTab, backgroundColor: '#e1306c' }} 
            className="sidebar-tab-link"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <CallBackModal isOpen={isModalOpen} onClose={closeModal} />
    </Router>
  );
}

const styles = {
  appLayout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1 0 auto',
  },
  whatsappFloat: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    backgroundColor: '#25d366',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    zIndex: 9999,
    transition: 'transform 0.2s ease',
  },
  floatingSidebar: {
    position: 'fixed',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    zIndex: 9999
  },
  sidebarTab: {
    width: '40px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    transition: 'all 0.2s',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }
};

