import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const googleReviews = [
    {
      name: "SHUBINDU SHARMA",
      date: "2024-01-09",
      avatarColor: "#e6f4f8",
      avatarText: "S",
      rating: 5,
      text: "Hi everyone my name is shubindu sharma. I had applied for the canada study visa from hashtag overseas. First I would like to thank hashtag oversea to made my drea... Read more"
    },
    {
      name: "Jasper Timoty",
      date: "2023-12-20",
      avatarColor: "#67239a",
      avatarText: "J",
      rating: 5,
      text: "Very much satisfied!! Got my visa in around 2 months. Very friendly. Very much satisfied. 😆"
    },
    {
      name: "Jashan Deep Kaur",
      date: "2023-12-19",
      avatarColor: "#00a896",
      avatarText: "J",
      rating: 5,
      text: "My name is jashan deep k... from patiala. I have done overall 6.0 and 5.5 in one always want to study in UI... Read more"
    },
    {
      name: "Karanpreet Singh",
      date: "2023-11-15",
      avatarColor: "#f5b943",
      avatarText: "K",
      rating: 5,
      text: "Highly recommended for study visa! The staff is very cooperative and guide you at every step. Thanks to the whole team of hashtag overseas for my visa..."
    },
    {
      name: "Mehak Preet",
      date: "2023-10-02",
      avatarColor: "#e0115f",
      avatarText: "M",
      rating: 5,
      text: "Excellent service and guidance by the hashtag education overseas. Everyone in the staff is very polite and helpful. Highly recommended for study visa..."
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
      title: "Confirmed Admission",
      desc: "Unlock access to 500+ top-tier universities and colleges across Canada, USA, UK, Australia, and New Zealand.",
      image: "/images/Artboard-4.jpg",
      accent: "Direct University Tie-Ups"
    },
    {
      title: "15 Years of Global Expertise",
      desc: "Trust your career with pioneers of study visa counseling and language instruction in North India.",
      image: "/images/Artboard-5.jpg",
      accent: "Highest Success Rate"
    },
    {
      title: "Your Local Guardian in Canada",
      desc: "We don't just send you abroad; our dedicated team in Canada provides complete post-landing settlement support.",
      image: "/images/newww.jpg",
      accent: "Exclusive Post-Landing Support"
    },
    {
      title: "Complete Transparency Process",
      desc: "Experience a fully ethical visa process with zero hidden fees and direct file submission monitoring.",
      image: "/images/16-2.jpg",
      accent: "100% Ethical Counseling"
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

  const stats = [
    { value: "5,000+", label: "Admission Letters", desc: "Secured in top global universities" },
    { value: "25,000+", label: "Clients Counselled", desc: "Since our establishment" },
    { value: "4,500+", label: "Successful Visas", desc: "Across all visa categories" },
    { value: "3", label: "Offices in India", desc: "Chandigarh, Ropar & Nalagarh" }
  ];

  const services = [
    {
      icon: <GraduationCap size={28} />,
      title: "Study Visa",
      desc: "Secure admission and student permit for top colleges in Canada, USA, UK, Australia, and New Zealand.",
      path: "/study-visa"
    },
    {
      icon: <Users size={28} />,
      title: "Spouse Visa",
      desc: "Bring your life partner along. Specialised guidance on spouse open work permit applications.",
      path: "/spouse-visa"
    },
    {
      icon: <Award size={28} />,
      title: "IELTS Prep",
      desc: "Achieve 7+ bands with expert trainers. Learn through comprehensive academic & general test mocks.",
      path: "/ielts"
    },
    {
      icon: <Heart size={28} />,
      title: "Spoken English",
      desc: "Build self-confidence, improve pronunciation, and gain fluency in daily conversational English.",
      path: "/spoken-english"
    },
    {
      icon: <Shield size={28} />,
      title: "Visitor Visa",
      desc: "Fast-track tourist visa applications for family visits, vacations, or business conferences.",
      path: "/tourist-visa"
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Career Counselling",
      desc: "Identify your true potential and choose suitable study courses aligning with global job markets.",
      path: "/career-counselling"
    }
  ];

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

  const youtubeVideos = [
    { id: "1", title: "How to fill VFS Canada Consent Form | Step-by-Step", embedUrl: "https://www.youtube.com/embed/O4GnLaRL_ek" },
    { id: "2", title: "Why Choose USA for Higher Education? | Visa Guide", embedUrl: "https://www.youtube.com/embed/qD-p_bJ_sSc" },
    { id: "3", title: "IELTS Preparation Tips & Tricks | Speaking & Writing", embedUrl: "https://www.youtube.com/embed/sRfe37V9vWY" }
  ];

  const blogs = [
    {
      title: "Top 5 Cities to Study in Canada",
      desc: "Explore the most student-friendly Canadian cities offering premium education, affordable living, and robust job opportunities.",
      date: "04/10/2023",
      path: "/about",
      image: "/images/b1-1024x320.jpg"
    },
    {
      title: "Advantages Of Choosing The USA For Higher Education",
      desc: "Understand the benefits of studying in the United States, including scholarship avenues, OPT programs, and academic prestige.",
      date: "28/09/2023",
      path: "/about",
      image: "/images/b2-1024x320.jpg"
    },
    {
      title: "Student Visas: Your Path to Study Abroad",
      desc: "A comprehensive checklist detailing funds requirements, academic prerequisites, and interview prep for international student visas.",
      date: "13/04/2023",
      path: "/about",
      image: "/images/b3-1024x320.jpg"
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
            { title: <>Confirmed<br />admission</>, link: "/study-visa" }
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
      <section className="section section-bg-alt" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container" style={styles.introGrid}>
          <div style={styles.introLeft}>
            <h2 style={styles.title}>One-Stop Overseas Education Consultant For All Your Study Needs</h2>
            <p style={styles.desc}>
              Best overseas education consultant - Hashtag Overseas is recognized as one of the fastest-growing overseas education consultants in Chandigarh and Rupnagar in the international education space for students creating a strong repute for genuine educational opportunities and solutions.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '24px', backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', padding: '12px 30px' }}>
              READ MORE
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

      {/* Services Section */}
      <section className="section" style={{ backgroundColor: '#e6f4f8', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#000000' }}>All Services</h2>
          </div>
          <div className="grid-3" style={styles.servicesGrid}>
            {[
              { title: "Visitor Visa", desc: "Hashtag Overseas: Your Trusted Partner for Visitor Visa", path: "/tourist-visa" },
              { title: "Spouse Visa", desc: "Your Dream of Being Together: Spouse Visa the Best Consultants", path: "/spouse-visa" },
              { title: "Spoken english", desc: "Enhance Your Language Skills - The Best Spoken English Institute", path: "/spoken-english" },
              { title: "PR Visa", desc: "Achieve Your Dreams: The Best PR Visa Consultants for Permanent Residency", path: "/about" },
              { title: "Study Visa", desc: "Unlock Your Future with Study Visa Consultants: The Key to Success", path: "/study-visa" },
              { title: "IELTS", desc: "IELTS Preparation Excellence at Hashtag Overseas: Your Premier IELTS Institute", path: "/ielts" }
            ].map((service, idx) => (
              <div key={idx} className="card service-card-exact">
                <h3 className="service-card-title-exact">{service.title}</h3>
                <p className="service-card-desc-exact">{service.desc}</p>
                <Link to={service.path} className="service-card-link-exact">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Success Section */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#000000' }}>Pillars of Success</h2>
          </div>
          <div className="stats-grid-exact">
            {[
              { value: "11,756 +", label: "Admission Letters" },
              { value: "15,608 +", label: "Client Counselled" },
              { value: "8,970 +", label: "Successfull Visas" },
              { value: "3", label: "Office in India" }
            ].map((stat, idx) => (
              <div key={idx} className="card stat-card-exact">
                <h2 className="stat-card-value-exact">{stat.value}</h2>
                <p className="stat-card-label-exact">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section section-bg-alt" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#000000' }}>Blog</h2>
          </div>
          <div className="grid-3" style={{ marginBottom: '48px' }}>
            {blogs.map((blog, idx) => (
              <article key={idx} className="blog-card-exact">
                <div className="blog-img-wrap-exact">
                  <img src={blog.image} alt={blog.title} className="blog-img-exact" />
                </div>
                <div className="blog-content-wrap-exact">
                  <div className="blog-meta-exact">
                    <span className="blog-meta-item-exact">
                      <Calendar size={14} style={{ marginRight: '4px' }} />
                      {blog.date}
                    </span>
                    <span className="blog-meta-item-exact">
                      <Users size={14} style={{ marginRight: '4px' }} />
                      Blogs
                    </span>
                  </div>
                  <h3 className="blog-title-exact">{blog.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Link Banner Section */}
      <section className="section" style={{ backgroundColor: '#faf8fc', paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="youtube-banner-block" style={{ margin: 0 }}>
            <span className="youtube-banner-text">
              For watching more Youtube videos of #hashtag Overseas
            </span>
            <a 
              href="https://www.youtube.com/@hashtagEducationOverseas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="youtube-banner-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff" style={{ marginRight: '8px' }}>
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section section-bg-alt" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '8px', letterSpacing: '0.5px' }}>EXCELLENT</h2>
            <div style={{ color: '#ffb400', fontSize: '1.8rem', marginBottom: '6px' }}>★★★★★</div>
            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#594d66', marginBottom: '12px' }}>
              Based on <strong>327 reviews</strong>
            </div>
            
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

      {/* Centres for Excellence Section */}
      <section className="section" style={{ backgroundColor: '#faf8fc', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#000000', margin: 0 }}>Centres for Excellence</h2>
          </div>
          <div className="grid-3">
            {branches.map((branch, idx) => (
              <div key={idx} className="card branch-card-new" style={{ textAlign: 'center' }}>
                <div className="branch-img-wrap">
                  <img src={branch.image} alt={branch.city} className="branch-img" />
                </div>
                <div className="branch-content-wrap" style={{ alignItems: 'center', padding: '24px 20px 32px 20px' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '750', color: '#000000', marginBottom: '16px', fontFamily: 'var(--font-title)' }}>{branch.city}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#594d66', lineHeight: '1.6', margin: 0 }}>{branch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Institutions */}
      <section style={styles.partnersSection}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#000000', marginBottom: '48px', fontFamily: 'var(--font-title)', textAlign: 'center' }}>
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
    padding: '64px 0',
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
