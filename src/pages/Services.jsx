import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import imgUrl from '../utils/imgUrl';

/* ─── Inject responsive CSS once ─── */
const servicesCSS = `
  .services-approach-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .services-why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 768px) {
    .services-approach-grid {
      grid-template-columns: 1fr !important;
    }
    .services-why-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 480px) {
    .services-why-grid {
      grid-template-columns: 1fr !important;
    }
  }
  .approach-card {
    background: #ffffff;
    border-radius: 14px;
    padding: 28px 24px;
    box-shadow: 0 4px 18px rgba(103, 35, 154, 0.07);
    border: 1px solid rgba(103, 35, 154, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .approach-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(103, 35, 154, 0.13);
  }
  .why-chip {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px 18px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    box-shadow: 0 3px 14px rgba(103, 35, 154, 0.06);
    border: 1px solid rgba(103, 35, 154, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .why-chip:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(103, 35, 154, 0.12);
  }
`;

if (typeof document !== 'undefined') {
  const el = document.createElement('style');
  el.textContent = servicesCSS;
  document.head.appendChild(el);
}

const servicesList = [
  'Permanent Residency (Express Entry & PNP programs)',
  'Study Permits for international students',
  'Work Permits (LMIA and non-LMIA pathways)',
  'Visitor Visas',
  'Family Sponsorship Programs',
  'Business Immigration Solutions',
];

const approachSteps = [
  {
    num: '01',
    title: 'Profile Evaluation',
    desc: 'We begin by understanding your education, experience, financial background, and goals.',
  },
  {
    num: '02',
    title: 'Strategy Planning',
    desc: 'We identify the most suitable immigration pathway based on eligibility and long-term success potential.',
  },
  {
    num: '03',
    title: 'Documentation Support',
    desc: 'We assist you in preparing accurate and complete documentation to avoid delays or rejections.',
  },
  {
    num: '04',
    title: 'Application Submission',
    desc: 'We ensure timely and compliant submission of your application to the relevant authorities.',
  },
  {
    num: '05',
    title: 'Continuous Support',
    desc: 'We provide updates, guidance, and assistance until your visa process is successfully completed.',
  },
];

const whyList = [
  'Honest and transparent guidance',
  'Personalized immigration strategies',
  'Strong attention to detail',
  'High ethical standards',
  'Dedicated client support',
  'End-to-end case handling',
];

export default function Services() {
  return (
    <>
      {/* Page Banner */}
      <section style={{
        ...styles.banner,
        backgroundImage: `linear-gradient(135deg, rgba(103,35,154,0.45) 0%, rgba(74,24,112,0.40) 100%), url(${imgUrl('/images/services-in-Canada.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="container" style={styles.bannerContent}>
          <h1 style={styles.bannerTitle}>Our Services</h1>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={styles.sectionLabel}>What We Do</div>
          <h2 style={styles.sectionTitle}>Expert Canadian Immigration Services</h2>
          <p style={styles.bodyText}>
            We specialize in a wide range of Canadian immigration services, including:
          </p>

          <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 32px' }} className="services-list-grid">
            {servicesList.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <span style={styles.listText}>{item}</span>
              </div>
            ))}
          </div>

          <p style={{ ...styles.bodyText, marginTop: '28px' }}>
            Our team stays updated with the latest immigration policies and changes to ensure that every application is prepared according to current guidelines and best practices.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section" style={{ backgroundColor: '#f9f4fd', paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={styles.sectionLabel}>Our Approach</div>
          <h2 style={styles.sectionTitle}>A Structured, Client-Focused Process</h2>
          <p style={{ ...styles.bodyText, marginBottom: '40px' }}>
            We follow a structured and client-focused approach:
          </p>

          <div className="services-approach-grid">
            {approachSteps.map((step, i) => (
              <div key={i} className="approach-card">
                <div style={styles.stepNum}>{step.num}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={styles.sectionLabel}>Why Choose Us</div>
          <h2 style={styles.sectionTitle}>Why Clients Trust Us</h2>
          <p style={{ ...styles.bodyText, marginBottom: '36px' }}>
            Choosing the right immigration consultant can make a significant difference in your outcome. Clients trust us because we offer:
          </p>

          <div className="services-why-grid">
            {whyList.map((item, i) => (
              <div key={i} className="why-chip">
                <CheckCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '1px' }} />
                <span style={styles.whyText}>{item}</span>
              </div>
            ))}
          </div>

          <p style={{ ...styles.bodyText, marginTop: '32px', fontStyle: 'italic', color: '#555' }}>
            We do not believe in false promises — we believe in realistic pathways and strong preparation.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section" style={{ backgroundColor: '#f9f4fd', paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={styles.sectionLabel}>Our Commitment</div>
          <h2 style={styles.sectionTitle}>Our Commitment to You</h2>
          <p style={styles.bodyText}>
            At Kavita Saini Immigration Inc., every client matters. Whether you are a student planning your future, a skilled professional seeking PR, or a family hoping to reunite, we treat your case with the attention and seriousness it deserves.
          </p>
          <p style={{ ...styles.bodyText, marginTop: '20px' }}>
            Your goals become our responsibility, and your success becomes our motivation.
          </p>
          <p style={{ ...styles.bodyText, marginTop: '20px', fontWeight: '600', color: 'var(--primary)' }}>
            We are here not just to process applications, but to build futures.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={styles.ctaBanner}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <h2 style={styles.ctaTitle}>Let's Build Your Canadian Dream Together</h2>
          <p style={styles.ctaText}>
            If you are ready to take the next step toward Canada, our team is here to guide you with clarity and confidence.
            <br />
            <strong>Your journey begins with the right guidance — and we are here to provide it.</strong>
          </p>
          <Link to="/contact-us" className="btn btn-primary" style={styles.ctaBtn}>
            Get In Touch <ArrowRight size={16} style={{ marginLeft: '6px' }} />
          </Link>
        </div>
      </section>
    </>
  );
}

const styles = {
  banner: {
    padding: '100px 0 80px',
    color: '#ffffff',
  },
  bannerContent: {
    textAlign: 'center',
  },
  bannerTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    margin: '0 0 12px',
    fontFamily: 'var(--font-title)',
    color: '#ffffff',
  },
  bannerCrumb: {
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.8)',
    margin: 0,
  },
  crumbLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
  },
  sectionLabel: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--primary)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  sectionTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '800',
    color: '#1a1a2e',
    margin: '0 0 16px',
    fontFamily: 'var(--font-title)',
    lineHeight: '1.25',
  },
  bodyText: {
    fontSize: '1.05rem',
    color: '#444',
    lineHeight: '1.8',
    margin: 0,
  },
  listText: {
    fontSize: '1rem',
    color: '#333',
    fontWeight: '500',
    lineHeight: '1.5',
  },
  stepNum: {
    fontSize: '2rem',
    fontWeight: '900',
    color: 'rgba(103,35,154,0.15)',
    lineHeight: 1,
    marginBottom: '10px',
    fontFamily: 'var(--font-title)',
  },
  stepTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#1a1a2e',
    margin: '0 0 8px',
    fontFamily: 'var(--font-title)',
  },
  stepDesc: {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.65',
    margin: 0,
  },
  whyText: {
    fontSize: '0.95rem',
    color: '#333',
    fontWeight: '500',
    lineHeight: '1.4',
  },
  ctaBanner: {
    background: 'linear-gradient(135deg, #67239a 0%, #4a1870 100%)',
    padding: '72px 0',
    color: '#ffffff',
  },
  ctaTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '800',
    color: '#ffffff',
    margin: '0 0 16px',
    fontFamily: 'var(--font-title)',
  },
  ctaText: {
    fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.88)',
    lineHeight: '1.75',
    marginBottom: '32px',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color: 'var(--primary)',
    borderColor: '#ffffff',
    fontWeight: '700',
    padding: '13px 32px',
    fontSize: '0.95rem',
  },
};
