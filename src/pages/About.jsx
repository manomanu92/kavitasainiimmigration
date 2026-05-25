import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, Users, Award, CheckCircle, ArrowRight, MapPin, Phone } from 'lucide-react';
import imgUrl from '../utils/imgUrl';

/* ─── Inject responsive CSS once ─── */
const aboutCSS = `
  .about-hero-img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  @media (max-width: 1024px) {
    .about-hero-img { height: 340px; }
  }
  @media (max-width: 768px) {
    .about-hero-img { height: 260px; }
  }
  @media (max-width: 480px) {
    .about-hero-img { height: 200px; }
  }

  .about-intro-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 56px;
    align-items: center;
  }
  .about-founder-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 64px;
    align-items: center;
  }
  .about-why-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  @media (max-width: 1024px) {
    .about-intro-grid,
    .about-founder-grid {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    .about-why-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 600px) {
    .about-why-grid {
      grid-template-columns: 1fr !important;
    }
  }
  .why-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(103, 35, 154, 0.06);
    border: 1px solid rgba(103, 35, 154, 0.07);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .why-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(103, 35, 154, 0.13);
  }
  .why-icon-wrap {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(103,35,154,0.1), rgba(103,35,154,0.18));
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }
.cta-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #ffffff;
    color: var(--primary);
    font-weight: 700;
    font-family: var(--font-title);
    font-size: 1rem;
    padding: 14px 32px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
  .cta-btn-primary:hover {
    background: var(--accent);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
  .cta-btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #ffffff;
    font-weight: 600;
    font-family: var(--font-title);
    font-size: 1rem;
    padding: 14px 32px;
    border-radius: 50px;
    border: 2px solid rgba(255,255,255,0.55);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s ease;
  }
  .cta-btn-outline:hover {
    background: rgba(255,255,255,0.12);
    border-color: #ffffff;
    transform: translateY(-2px);
  }
  .founder-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 50px;
    margin-bottom: 16px;
  }
  .value-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(103,35,154,0.07);
    color: var(--primary-dark);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 50px;
    margin: 4px;
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('about-styles')) {
  const el = document.createElement('style');
  el.id = 'about-styles';
  el.textContent = aboutCSS;
  document.head.appendChild(el);
}

/* ─── Why-choose-us data ─── */
const whyCards = [
  {
    Icon: Shield,
    title: 'Licensed & Trusted',
    desc: 'Regulated Canadian Immigration Consultant (RCIC) — fully compliant with ICCRC standards and Canadian law.',
    color: '#67239a'
  },
  {
    Icon: Star,
    title: 'Proven Track Record',
    desc: 'Thousands of approved visas across study, work, PR, and family pathways over 15+ years of practice.',
    color: '#e2a228'
  },
  {
    Icon: Users,
    title: 'Personalized Guidance',
    desc: 'Every client gets a dedicated consultation — your profile, goals, and timeline shape our strategy.',
    color: '#4b1673'
  },
  {
    Icon: Award,
    title: 'End-to-End Support',
    desc: 'From eligibility assessment to post-landing settlement — we are with you through every stage.',
    color: '#8e3cd7'
  }
];

/* ─── Pillars stats ─── */
const pillarsStats = [
  { target: 11756, suffix: ' +', label: 'Admission Letters' },
  { target: 15608, suffix: ' +', label: 'Clients Counselled' },
  { target: 8970,  suffix: ' +', label: 'Successful Visas' }
];

/* ─── Core values ─── */
const values = ['Transparency', 'Integrity', 'Accuracy', 'Client First', 'Confidentiality'];

export default function About() {

  /* Count-up animation */
  const pillarsRef = useRef(null);
  const [counts, setCounts] = useState(pillarsStats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = pillarsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const steps = 60;
          const interval = 2000 / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const eased = 1 - Math.pow(1 - step / steps, 3);
            setCounts(pillarsStats.map(s => Math.round(s.target * eased)));
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

      {/* ── 1. Banner ── */}
      <div style={{ width: '100%', overflow: 'hidden', backgroundColor: '#f7f5fa' }}>
        <img
          src={imgUrl('/images/about-hero.png')}
          alt="Kavita Saini Immigration — About Us"
          className="about-hero-img"
        />
      </div>

      {/* ── 2. Our Story ── */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(103,35,154,0.08)', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '20px' }}>
            Our Story
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '20px', lineHeight: '1.25', fontFamily: 'var(--font-title)' }}>
            Making Canadian Immigration Clear, Structured &amp; Successful
          </h2>
          <p style={S.desc}>
            At Kavita Saini Immigration Inc., we believe immigration is not just a process — it is a life-changing journey that shapes your future, your career, and your family's opportunities. Our role is to make that journey clear, structured, and successful.
          </p>
          <p style={{ ...S.desc, marginTop: '16px' }}>
            We are a professional immigration consultancy dedicated to helping individuals, families, students, and skilled professionals navigate the complexities of Canadian immigration with confidence and clarity.
          </p>
          <p style={{ ...S.desc, marginTop: '16px' }}>
            With a strong commitment to ethical practice, transparency, and client success, we guide you at every step — from initial eligibility assessment to final visa approval and settlement support.
          </p>

          {/* Core values pills */}
          <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {values.map(v => (
              <span key={v} className="value-pill">
                <CheckCircle size={13} color="var(--primary)" />
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Why Choose Us ── */}
      <section className="section" style={{ backgroundColor: '#faf8fc', paddingTop: '72px', paddingBottom: '72px', borderTop: '1px solid rgba(103,35,154,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-dark)', fontFamily: 'var(--font-title)', marginBottom: '12px' }}>
              Why Choose Us
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
              Thousands of families have trusted us to navigate Canada's immigration system — here's what sets us apart.
            </p>
          </div>

          <div className="about-why-grid">
            {whyCards.map(({ Icon, title, desc, color }) => (
              <div key={title} className="why-card">
                <div className="why-icon-wrap">
                  <Icon size={28} color={color} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--primary-dark)', marginBottom: '10px', fontFamily: 'var(--font-title)' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.93rem', lineHeight: '1.65', color: 'var(--text-muted)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Meet the Founder ── */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="about-founder-grid">

            {/* Left — image */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(103,35,154,0.14)', border: '1px solid rgba(103,35,154,0.07)' }}>
              <img
                src={imgUrl('/images/kavita-saini-slide.png')}
                alt="Kavita Saini — Founder, Kavita Saini Immigration Inc."
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>

            {/* Right — bio */}
            <div>
              <div className="founder-badge">
                <Award size={13} />
                Meet the Founder
              </div>
              <h2 style={{ fontSize: '2.1rem', fontWeight: '800', color: 'var(--primary-dark)', fontFamily: 'var(--font-title)', marginBottom: '6px', lineHeight: '1.25' }}>
                Kavita Saini
              </h2>
              <p style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '20px' }}>
                Regulated Canadian Immigration Consultant (RCIC)
              </p>
              <p style={S.desc}>
                With over 15 years of experience in Canadian immigration and study-abroad counselling, Kavita Saini has helped thousands of individuals and families achieve their dreams of living, working, and studying in Canada.
              </p>
              <p style={{ ...S.desc, marginTop: '14px' }}>
                Kavita founded Kavita Saini Immigration Inc. with a single mission: to provide honest, transparent, and result-oriented immigration guidance. As a Regulated Canadian Immigration Consultant, she holds herself to the highest standards set by IRCC and ICCRC.
              </p>
              <p style={{ ...S.desc, marginTop: '14px' }}>
                Her approach is deeply personal — she understands that no two immigration cases are alike, and she takes the time to analyze each client's unique background, qualifications, and aspirations before recommending the most suitable pathway.
              </p>

              {/* Credentials */}
              <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  '15+ Years of Immigration Experience',
                  'Regulated Canadian Immigration Consultant (RCIC)',
                  'Offices in Canada & India (Punjab, HP)',
                  'Expertise across Study, Work, PR & Family Visas'
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Pillars of Success ── */}
      <section
        ref={pillarsRef}
        className="section"
        style={{ backgroundColor: '#faf8fc', paddingTop: '64px', paddingBottom: '64px', borderTop: '1px solid rgba(103,35,154,0.05)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#000000', fontFamily: 'var(--font-title)' }}>
              Pillars of Success
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '10px' }}>
              Numbers that reflect the trust our clients place in us.
            </p>
          </div>
          <div className="stats-grid-exact" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '900px', margin: '0 auto' }}>
            {pillarsStats.map((stat, idx) => (
              <div key={idx} className="card stat-card-exact">
                <h2 className="stat-card-value-exact">{counts[idx].toLocaleString('en-IN')}{stat.suffix}</h2>
                <p className="stat-card-label-exact">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 60%, var(--primary-light) 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-title)', marginBottom: '16px', lineHeight: '1.25' }}>
            Ready to Start Your Canadian Journey?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.82)', maxWidth: '520px', margin: '0 auto 36px', lineHeight: '1.7' }}>
            Book a free consultation with Kavita Saini today and get a clear roadmap tailored to your profile.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact-us" className="cta-btn-primary">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <a href="tel:+14372323647" className="cta-btn-outline">
              <Phone size={15} /> Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─── Shared style tokens ─── */
const S = {
  desc: {
    fontSize: '1.02rem',
    lineHeight: '1.75',
    color: 'var(--text-muted)',
    margin: 0
  }
};
