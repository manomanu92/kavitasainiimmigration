import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, CheckCircle, Shield, Heart, GraduationCap, MapPin, 
  Users, Landmark, ChevronRight, ChevronLeft, Video, Calendar, ArrowRight 
} from 'lucide-react';

export default function Home({ onOpenCallback }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Count-up animation for Pillars of Success
  const pillarsRef = useRef(null);
  const pillarsStats = [
    { target: 11756, suffix: " +", label: "Admission Letters" },
    { target: 15608, suffix: " +", label: "Client Counselled" },
    { target: 8970,  suffix: " +", label: "Successfull Visas" }
  ];
  const [counts, setCounts] = useState(pillarsStats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = pillarsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000; // ms
          const steps = 60;
          const interval = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const googleReviews = [
    {
      name: "Noorul Fusra",
      date: "March 2026",
      avatarColor: "#4285F4",
      avatarText: "N",
      rating: 5,
      text: "We have had excellent experience working with Kavita on multiple IRCC applications including our PR application. Each time no matter how big or small the application is she takes good care throughout and makes sure all the requirements are met through appropriate documentation submission. We highly recommend working with her."
    },
    {
      name: "Manjinder Singh",
      date: "March 2026",
      avatarColor: "#34A853",
      avatarText: "M",
      rating: 5,
      text: "I had a great experience with Kavita mam and Heena mam applying for my parents' Super Visa. They were super helpful with the documentation and made the whole process easy. I was thrilled it got approved so quickly. Highly recommend their services."
    },
    {
      name: "Gurjot Rai",
      date: "February 2026",
      avatarColor: "#f5b943",
      avatarText: "G",
      rating: 5,
      text: "I sincerely want to thank you for your outstanding work and support throughout my work permit process. Getting my approval within just two weeks was amazing, and I truly appreciate your dedication, professionalism, and guidance. Thank you again for making this process smooth and stress-free."
    },
    {
      name: "Parneet Kaur",
      date: "December 2025",
      avatarColor: "#67239a",
      avatarText: "P",
      rating: 5,
      text: "I had a great experience with Kavita Saini Immigration! They helped me get my Canadian study visa extension in less than 2 months. The process was smooth and stress-free because of their guidance. A special thanks to Kavita ma'am for her support, very professional and always available to answer my questions."
    },
    {
      name: "Jasper Timoty",
      date: "December 2025",
      avatarColor: "#8b5cf6",
      avatarText: "J",
      rating: 5,
      text: "Very much satisfied with Kavita Saini Immigration services, despite some hurdles in my study extension process, they helped me get the extension on time without any problem. Owe them big time, Thank you!"
    },
    {
      name: "Jolly George",
      date: "September 2025",
      avatarColor: "#00a896",
      avatarText: "J",
      rating: 5,
      text: "I had a wonderful experience with Kavita Saini Immigration Inc. I received my visa in just one week, thanks to their efficient and professional services. Special thanks to Kavita, Heena, and Kajal for their constant support — they guided me patiently through every step of the process. Highly recommend their services to anyone looking for smooth and reliable immigration support. Just go for it!!!!"
    },
    {
      name: "Ranjit Kaur",
      date: "September 2025",
      avatarColor: "#1d4ed8",
      avatarText: "R",
      rating: 5,
      text: "Kavita Saini Immigration is very good — they are very friendly with their clients as well as students. I got my UK visa within 5 days. Thank you Kavita mam for treating us well and helping prepare my interview. I recommend that if you want to apply for any visa, please contact Kavita Saini Immigration."
    },
    {
      name: "Benny Isaac",
      date: "September 2025",
      avatarColor: "#e0115f",
      avatarText: "B",
      rating: 5,
      text: "I approached Kavita Saini Immigration for my plans to study in Canada, and honestly, it was the best decision. The team is really professional, friendly, and always available to clear even the smallest doubts. Special thanks to Heena ma'am, Kavita ma'am and Kajal ma'am — they were so patient, supportive, and made sure everything was done smoothly. Highly recommend for anyone planning to study abroad!"
    }
  ];

  const getVisibleCount = () => {
    if (windowWidth <= 768) return 1;
    if (windowWidth <= 1024) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, googleReviews.length - visibleCount);

  const prevReview = () => {
    setReviewIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextReview = () => {
    setReviewIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const slides = [
    {
      title: "15 Years of Global Expertise",
      desc: "Trust your career with pioneers of study visa counseling and language instruction in North India.",
      image: "/images/Artboard-5.jpg",
      accent: "Highest Success Rate"
    },
    {
      title: "Services in Canada",
      desc: "Comprehensive post-arrival transition support including housing, registration, and social networking.",
      image: "/images/services-in-Canada.jpg",
      accent: "Seamless Integration"
    },
    {
      title: "Services in India",
      desc: "Premium classroom coaching and expert visa guidance available across our locations in India.",
      image: "/images/services-in-india.jpg",
      accent: "In-Country Counselors"
    }
  ];

  // Rotate slides automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const branches = [
    {
      city: "Chandigarh",
      desc: "Office is located in center of Chandigarh Tricity. This office is a full service Study Visa and Work Permit office which also provides facilities of Tourist Visa.",
      address: "Sector 34A, Chandigarh",
      tag: "Tricity Hub",
      image: "/images/bg2-650x650-2.jpg"
    },
    {
      city: "Ropar",
      desc: "Looking at the extensive requirements from IELTS aspiring students, we started IELTS and Spoken English Training institute in Ropar. This office also provides facilities of Study Visa, Tourist Visa and Work Permit.",
      address: "Giani Zail Singh Nagar, Ropar, Punjab",
      tag: "Training Center",
      image: "/images/bg2-650x650-1.jpg"
    },
    {
      city: "New Nalagarh",
      desc: "This Office cum training institute provides facilities of Study Visa, Tourist Visa, Work Permit, IELTS and Spoken English.",
      address: "Phase 1, New Nalagarh, HP",
      tag: "Counseling Terminal",
      image: "/images/nalagra.jpg"
    }
  ];

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={styles.page}>
      {/* Slider Section */}
      <section style={styles.heroSection}>
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].title} 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          style={styles.arrowLeft} 
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={44} strokeWidth={1.5} />
        </button>
        <button 
          onClick={nextSlide} 
          style={styles.arrowRight} 
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
          aria-label="Next Slide"
        >
          <ChevronRight size={44} strokeWidth={1.5} />
        </button>

        {/* Bullets Overlay */}
        <div style={styles.heroContainer}>
          <div style={styles.bullets}>
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                style={{
                  ...styles.bullet,
                  backgroundColor: idx === currentSlide ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                  width: idx === currentSlide ? '24px' : '8px'
                }}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Overlapping USP Section */}
      <div style={styles.uspContainer} className="container">
        <div className="usp-grid">
          {[
            { title: <>Confirmed<br />admission</>, link: "/study-visa" },
            { title: "15 Years of expertise", link: "/about" },
            { title: "Your Local Guardian in Canada", link: "/study-visa/canada" },
            { title: "Transparency Process", link: "/about" },
            { title: <>Work Permit<br />& PR Support</>, link: "/work-permit" }
          ].map((card, idx) => (
            <Link key={idx} to={card.link} className="usp-card-exact">
              <div style={styles.uspIconWrap}>
                <img 
                  src="/images/funfacts-icon-2.png" 
                  alt="" 
                  style={{ width: '54px', height: '50px', objectFit: 'contain' }} 
                />
              </div>
              <h3 style={styles.uspCardTitle}>{card.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Intro Section */}
      <section className="section section-bg-alt" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container" style={styles.introGrid}>
          <div style={styles.introLeft}>
            <h2 style={styles.title}>Your Trusted Partner for Canadian Immigration Success</h2>
            <p style={styles.desc}>
              Kavita Saini Immigration Inc. is a Canada-based immigration consulting firm operating in the Greater Toronto area (Mississauga, Ontario), led by <strong>Kavita Saini</strong>. We guide clients through every step of the Canadian immigration journey with expertise, transparency, and care.
            </p>

            {/* Services List */}
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 24px' }}>
              {[
                "Canadian PR / Express Entry",
                "Study Permits & Student Visas",
                "Work Permits",
                "Visitor Visas",
                "Spousal / Family Sponsorship",
                "Immigration Consultation & Case Support"
              ].map((service, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    backgroundColor: 'var(--primary)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '2px'
                  }}>✓</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '500', lineHeight: '1.4' }}>{service}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn btn-primary" style={{ marginTop: '32px', backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', padding: '12px 30px' }}>
              LEARN MORE
            </Link>
          </div>
          <div style={styles.introRightVideo}>
            <div style={styles.videoLinkWrapper}>
              {isVideoPlaying ? (
                <div style={{ ...styles.videoThumbnailContainer, paddingBottom: '56.25%', position: 'relative' }}>
                  <iframe 
                    src="https://www.youtube.com/embed/O4GnLaRL_ek?autoplay=1" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen 
                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, borderRadius: '8px' }}
                  ></iframe>
                </div>
              ) : (
                <div style={styles.videoThumbnailContainer} onClick={() => setIsVideoPlaying(true)}>
                  <img 
                    src="/images/WhatsApp-Image-2024-01-09-at-8.54.12-PM.jpeg" 
                    alt="YouTube Video Thumbnail" 
                    style={styles.introVideoThumbnail} 
                  />
                  <div style={styles.youtubePlayOverlay}>
                    <svg viewBox="0 0 68 48" width="68" height="48">
                      <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.06 0 24 0 24s.06 10.94 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.94 68 24 68 24s-.06-10.94-1.48-16.26z" fill="#f00" />
                      <polygon points="27.41 33 45.41 24 27.41 15" fill="#fff" />
                    </svg>
                  </div>
                  <div style={styles.watchOnYoutubeWatermark}>
                    <span>Watch on</span>
                    <svg viewBox="0 0 60 16" width="60" height="16">
                      <path d="M10 2v12h2v-12h-2zm4.5 0c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h1v6h2V2h-3zm0 2h1v2h-1V4zm8.5-2v10c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5V2h2v8h1V2h1zm3-2v2h2v12h2V2h2V0h-6zm10 2c-.8 0-1.5.7-1.5 1.5v9c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-1zm0 2h1v7h-1V4z" fill="#fff" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Success + Training Centre */}
      <section ref={pillarsRef} className="section" style={{ backgroundColor: '#ffffff', paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#000000' }}>Pillars of Success</h2>
          </div>
          <div className="stats-grid-exact" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '900px', margin: '0 auto' }}>
            {pillarsStats.map((stat, idx) => (
              <div key={idx} className="card stat-card-exact">
                <h2 className="stat-card-value-exact">
                  {counts[idx].toLocaleString('en-IN')}{stat.suffix}
                </h2>
                <p className="stat-card-label-exact">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Ropar Training Centre — inline below stats */}
          <div style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            maxWidth: '860px',
            margin: '40px auto 0',
            backgroundColor: '#faf8fc',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(103,35,154,0.08)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            <img
              src="/images/bg2-650x650-1.jpg"
              alt="Ropar Training Centre"
              style={{ width: '220px', minHeight: '160px', objectFit: 'cover', flexShrink: 0 }}
            />
            <div style={{ padding: '24px 28px 24px 0' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Training Centre</span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#000', margin: '6px 0 10px', fontFamily: 'var(--font-title)' }}>Ropar, Punjab</h3>
              <p style={{ fontSize: '0.92rem', color: '#594d66', lineHeight: '1.6', margin: 0 }}>
                IELTS &amp; Spoken English training institute with full Study Visa, Tourist Visa, and Work Permit facilities. Located at Giani Zail Singh Nagar, Ropar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section section-bg-alt" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="container">
          <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '8px', letterSpacing: '0.5px' }}>4.9 / 5</h2>
            <div style={{ color: '#ffb400', fontSize: '1.8rem', marginBottom: '6px' }}>★★★★★</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#594d66', marginBottom: '4px' }}>
              Based on <strong>55 Google reviews</strong>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '12px' }}>Kavita Saini Immigration Inc. · Mississauga, Ontario</div>
            
            {/* Colored Google Logo */}
            <div style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              letterSpacing: '-1.5px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '2px', 
              marginBottom: '36px'
            }}>
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </div>

            {/* Slider Container */}
            <div style={{ position: 'relative', padding: '0 40px', maxWidth: '1160px', margin: '0 auto' }}>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevReview} 
                style={{
                  position: 'absolute',
                  left: '0px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  zIndex: 10,
                  color: '#67239a',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#67239a';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#67239a';
                }}
                aria-label="Previous Review"
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={nextReview} 
                style={{
                  position: 'absolute',
                  right: '0px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  zIndex: 10,
                  color: '#67239a',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#67239a';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#67239a';
                }}
                aria-label="Next Review"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slider Viewport */}
              <div style={{ overflow: 'hidden', width: '100%' }}>
                <div style={{ 
                  display: 'flex', 
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                  transform: `translateX(-${reviewIndex * (100 / visibleCount)}%)`,
                  width: '100%'
                }}>
                  {googleReviews.map((review, idx) => (
                    <div key={idx} style={{ 
                      flex: `0 0 ${100 / visibleCount}%`,
                      padding: '0 12px',
                      boxSizing: 'border-box'
                    }}>
                      <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                        padding: '24px',
                        height: '250px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        border: '1.5px solid rgba(103, 35, 154, 0.05)',
                        position: 'relative'
                      }}>
                        {/* Header Details */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', width: '100%' }}>
                          
                          {/* Profile Group */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              backgroundColor: review.avatarColor,
                              color: review.avatarColor === '#67239a' ? '#ffffff' : '#1f142c',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: '700',
                              fontSize: '1rem',
                              fontFamily: 'var(--font-title)',
                              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)'
                            }}>
                              {review.avatarText}
                            </div>
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ fontWeight: '750', fontSize: '0.9rem', color: '#1a0f29', fontFamily: 'var(--font-title)' }}>
                                  {review.name}
                                </span>
                                <span style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '14px',
                                  height: '14px',
                                  borderRadius: '50%',
                                  backgroundColor: '#1d9bf0',
                                  color: '#ffffff',
                                  fontSize: '8px',
                                  fontWeight: 'bold'
                                }}>
                                  ✓
                                </span>
                              </div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{review.date}</div>
                            </div>
                          </div>

                          {/* Google Icon on Top Right */}
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <svg viewBox="0 0 24 24" width="20" height="20">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                            </svg>
                          </div>
                        </div>

                        {/* Stars */}
                        <div style={{ color: '#ffb400', fontSize: '0.95rem', marginBottom: '10px' }}>
                          {'★'.repeat(review.rating)}
                        </div>

                        {/* Description Text */}
                        <p style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          lineHeight: '1.5',
                          margin: 0,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          flexGrow: 1
                        }}>
                          {review.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Associated Institutions */}
      <section style={styles.partnersSection}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#000000', marginBottom: '32px', fontFamily: 'var(--font-title)', textAlign: 'center' }}>
            Associated Educational Institutions
          </h2>
          <div className="partners-logo-grid">
            {[
              { name: "RMIT University", path: "/images/rmit_2ec52709f2c89eec6f94fd4637a4bf8a.jpg" },
              { name: "Humber College", path: "/images/humber-1_e9a5115c9557af8be66ece65617d9341.jpg" },
              { name: "Fanshawe College", path: "/images/fanshawe_8f903f5cfe4bd72d3eb6b43fcb2dea88.jpg" },
              { name: "St. Clair College", path: "/images/stclair-1_223f348bbc2b391d2f281e3f465043f2.jpg" },
              { name: "Cambrian College", path: "/images/cambrian_3deb11bb70d311c2b5780092d35e279a.jpg" },
              { name: "ATMC", path: "/images/atmc_0bf34ac4c4e3ab5be536563ccbe4400a.jpg" },
              { name: "Charles Sturt University", path: "/images/charles_cf25411c1d2b36e17ca3440e9f595af9.jpg" },
              { name: "Charles Darwin University", path: "/images/charlesdarwin-1.jpg" },
              { name: "CQUniversity", path: "/images/cq-university-min-1.jpg" },
              { name: "Deakin University", path: "/images/deakin_8eb10829304c2dbb261e5f3d41104f91.jpg" },
              { name: "Federation University", path: "/images/federation-min-1.jpg" },
              { name: "Northern College", path: "/images/northern-1-min-1.jpg" }
            ].map((logo, idx) => (
              <div key={idx} className="partner-logo-card">
                <img src={logo.path} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-main)'
  },
  heroSection: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#67239a'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle at 75% 30%, rgba(103, 35, 154, 0.4) 0%, transparent 60%)',
    pointerEvents: 'none'
  },
  heroContainer: {
    position: 'absolute',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 3
  },
  heroContent: {
    maxWidth: '700px',
    zIndex: 2,
    position: 'relative'
  },
  heroAccent: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'var(--accent)',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    display: 'inline-block',
    marginBottom: '16px'
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: '3.5rem',
    fontWeight: '800',
    lineHeight: '1.15',
    marginBottom: '20px',
    fontFamily: 'var(--font-title)',
    '@media (max-width: 768px)': {
      fontSize: '2.25rem'
    }
  },
  heroDesc: {
    fontSize: '1.25rem',
    lineHeight: '1.6',
    color: 'rgba(255,255,255,0.8)',
    marginBottom: '36px',
    fontWeight: '400'
  },
  heroBtnGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  },
  bullets: {
    display: 'flex',
    gap: '10px'
  },
  bullet: {
    height: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'var(--transition-smooth)'
  },
  introGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '56px',
    alignItems: 'center',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
      gap: '40px'
    }
  },
  introLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  subtitle: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--accent-dark)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '8px',
    display: 'inline-block'
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: '800',
    color: 'var(--primary-dark)',
    marginBottom: '20px',
    lineHeight: '1.25'
  },
  desc: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-muted)',
    textAlign: 'justify'
  },
  introRight: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr'
    }
  },
  experienceCard: {
    padding: '36px 24px',
    borderRadius: 'var(--radius-md)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid rgba(103, 35, 154, 0.1)',
    '& h3': {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: 'var(--primary)'
    },
    '& p': {
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      lineHeight: '1.4'
    }
  },
  guardianCard: {
    padding: '36px 24px',
    borderRadius: 'var(--radius-md)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    boxShadow: 'var(--shadow-sm)',
    '& h3': {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: 'var(--primary-dark)'
    },
    '& p': {
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      lineHeight: '1.4'
    }
  },
  serviceCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '40px 32px'
  },
  serviceIconWrap: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    backgroundColor: 'rgba(103, 35, 154, 0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--primary)',
    marginBottom: '24px'
  },
  serviceTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--primary-dark)',
    marginBottom: '12px'
  },
  serviceDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '24px'
  },
  serviceLink: {
    marginTop: 'auto',
    fontSize: '0.9rem',
    color: 'var(--primary)',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    '&:hover': {
      color: 'var(--accent-dark)'
    }
  },
  statsSection: {
    backgroundColor: 'var(--primary-dark)',
    background: 'linear-gradient(135deg, var(--primary-dark) 0%, #170724 100%)',
    color: '#ffffff',
    padding: '80px 0'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
    textAlign: 'center',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '40px'
    },
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr',
      gap: '32px'
    }
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  statValue: {
    fontSize: '3rem',
    fontWeight: '800',
    color: 'var(--accent)',
    fontFamily: 'var(--font-title)',
    lineHeight: '1'
  },
  statLabel: {
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#ffffff'
  },
  statDesc: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.65)'
  },
  branchCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '36px 32px'
  },
  branchTag: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'var(--accent-dark)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '10px'
  },
  branchCity: {
    fontSize: '1.35rem',
    fontWeight: '700',
    color: 'var(--primary-dark)',
    marginBottom: '12px'
  },
  branchDesc: {
    fontSize: '0.925rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
    marginBottom: '24px'
  },
  branchAddressWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '28px'
  },
  branchAddress: {
    fontSize: '0.875rem',
    color: 'var(--text-main)',
    fontWeight: '500'
  },
  videoCard: {
    padding: '0',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    border: 'none',
    boxShadow: 'var(--shadow-sm)'
  },
  videoThumbnail: {
    width: '100%',
    height: '200px',
    backgroundColor: '#000000',
    position: 'relative'
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none'
  },
  videoInfo: {
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  videoTitle: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-main)',
    lineHeight: '1.4'
  },
  partnersSection: {
    backgroundColor: '#ffffff',
    borderTop: '1px solid rgba(103, 35, 154, 0.05)',
    borderBottom: '1px solid rgba(103, 35, 154, 0.05)',
    padding: '48px 0',
    textAlign: 'center'
  },
  partnersTitle: {
    fontSize: '1.75rem',
    color: 'var(--primary-dark)',
    marginBottom: '12px'
  },
  partnersDesc: {
    fontSize: '0.975rem',
    color: 'var(--text-muted)',
    marginBottom: '32px',
    maxWidth: '750px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  partnersGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  },
  partnerBubble: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 24px',
    borderRadius: '30px',
    backgroundColor: 'rgba(103, 35, 154, 0.03)',
    border: '1px solid rgba(103, 35, 154, 0.05)',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--primary-dark)'
  },
  blogCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '36px 32px'
  },
  blogMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
    marginBottom: '14px'
  },
  blogTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--primary-dark)',
    lineHeight: '1.4',
    marginBottom: '12px'
  },
  blogDesc: {
    fontSize: '0.925rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
    marginBottom: '24px'
  },
  blogLink: {
    marginTop: 'auto',
    fontSize: '0.875rem',
    color: 'var(--primary)',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '&:hover': {
      color: 'var(--accent-dark)',
      gap: '10px'
    }
  },
  arrowLeft: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    opacity: 0.7,
    transition: 'opacity 0.2s',
    outline: 'none'
  },
  arrowRight: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    opacity: 0.7,
    transition: 'opacity 0.2s',
    outline: 'none'
  },
  uspContainer: {
    marginTop: '-80px',
    position: 'relative',
    zIndex: 10,
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  uspCard: {
    backgroundColor: '#ffffff',
    border: '3px solid #67239a',
    borderRadius: '0px',
    padding: '30px 16px 24px 16px',
    textAlign: 'center',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '16px',
    height: '100%',
    minHeight: '215px'
  },
  uspIconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    marginBottom: '4px'
  },
  uspCardTitle: {
    fontSize: '0.95rem',
    fontWeight: '750',
    color: '#67239a',
    margin: 0,
    lineHeight: '1.3',
    fontFamily: 'var(--font-title)'
  },
  introRightVideo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  videoLinkWrapper: {
    display: 'block',
    width: '100%',
    maxWidth: '560px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  videoThumbnailContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9 ratio
    backgroundColor: '#000000',
    cursor: 'pointer'
  },
  introVideoThumbnail: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  youtubePlayOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    transition: 'transform 0.2s',
  },
  watchOnYoutubeWatermark: {
    position: 'absolute',
    bottom: '12px',
    left: '12px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#ffffff',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    zIndex: 2
  }
};

const homeStyles = `
  @media (max-width: 1024px) {
    div[style*="display: grid; grid-template-columns: 1.15fr 0.85fr"] {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const hStyle = document.createElement('style');
  hStyle.textContent = homeStyles;
  document.head.appendChild(hStyle);
}
