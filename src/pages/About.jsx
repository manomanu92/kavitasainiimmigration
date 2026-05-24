import React, { useState } from 'react';

export default function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const stats = [
    { value: '11,756 +', label: 'Admission Letters' },
    { value: '15,608 +', label: 'Client Counselled' },
    { value: '8,970 +', label: 'Successfull Visas' },
    { value: '3', label: 'Office in India' }
  ];

  return (
    <div style={styles.page}>
      {/* Banner / Collage Image Grid at top */}
      <div style={styles.collageBanner}>
        <img 
          src="/images/Artboard-7.jpg" 
          alt="Student visa successes collage grid" 
          style={styles.collageImage} 
        />
      </div>

      {/* Section 1: Introduction & Video */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container" style={styles.introGrid}>
          <div style={styles.introLeft}>
            <h2 style={styles.heading}>Study Abroad with the Best Visa Consultants and Online IELTS Institute</h2>
            <p style={styles.desc}>
              HASHTAG OVERSEAS is widely recognized as the top-notch IELTS institute in Chandigarh and Rupnagar. We pride ourselves on being the premier visa consultancy in Chandigarh, situated in the thriving region of North India. With our exceptional services and dedicated team, we are confident in our ability to help you achieve your goals. Our goal is to empower students and provide them with outstanding English education and visa assistance. We strive for excellence in everything we do and are dedicated to helping students achieve their dreams of studying abroad. With our expertise and commitment, we believe that nothing is beyond reach. Join us on this incredible journey to a brighter future!
            </p>
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

      {/* Section 2: Image Card & Secondary Text */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container" style={styles.contentGrid}>
          {/* Newspaper Column */}
          <div style={styles.newsColumn}>
            <div style={styles.newsImageCard}>
              <img 
                src="/images/WhatsApp-Image-2024-01-09-at-8.54.12-PM.jpeg" 
                alt="Hashtag Newspaper Advertisement" 
                style={styles.newsImage} 
              />
            </div>
          </div>
          
          {/* Text Column */}
          <div style={styles.textColumn}>
            <p style={styles.bodyText}>
              HASHTAG OVERSEAS is a renowned visa immigration and premier IELTS institute in Chandigarh and Rupnagar. Our commitment lies in delivering exceptional training for various English Language Examinations conducted worldwide. Being a trusted name in the realm of IELTS coaching and online IELTS training, we pride ourselves on assisting students in shaping their educational aspirations and overseas career prospects. Our proficiency extends across multiple domains of the English Programs sphere, encompassing services such as IELTS and PTE preparation, Spoken English courses, Business English training, General English classes, Student Visa Counseling, Online IELTS training programs, Interview Preparation sessions, and Personality Development workshops. By providing a comprehensive range of offerings, we empower individuals to achieve extraordinary success in their international endeavors.
            </p>
            <p style={styles.bodyText}>
              Since our inception, our foremost objective has been to support students in realizing their study abroad dreams. We strive to offer innovative solutions tailored to each student’s unique requirements, distinguishing us as the leading IELTS institute in Chandigarh among other visa consultants. At Hashtag Overseas, we prioritize professionalism and expertise when it comes to test preparation.
            </p>
            <p style={styles.bodyText}>
              Our aim is to streamline the entire process of studying abroad by offering seamless guidance from exam preparation to enrollment at foreign institutions. With an experienced faculty and dedicated counsellors at our disposal, we are committed to helping students identify their strengths and choose the most suitable career path efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Full-width Paragraphs */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="container" style={styles.fullWidthTextContainer}>
          <p style={styles.bodyText}>
            We also emphasize the importance of individual counseling sessions with each student prior to their enrollment in our online IELTS or general classes. These sessions allow us to evaluate their current level of proficiency and tailor our resources accordingly.
          </p>
          <p style={styles.bodyText}>
            Our students have achieved exceptional scores and gained admissions to renowned institutions in various countries. We take great pride in our dedicated faculty who consistently go above and beyond to create an unforgettable learning experience for our students. At Hashtag Overseas, we are committed to establishing ourselves as the premier IELTS institute and visa consultants in Chandigarh and Rupnagar, offering high-quality education at affordable rates. We are dedicated to making education accessible to all individuals aspiring to succeed in their careers.
          </p>
          <p style={styles.bodyText}>
            To further enhance our offerings, we have introduced specialized Online IELTS training that thoroughly prepares students for all sections of the test including Reading, Writing, Listening, and Speaking. Through live online group classes led by experienced IELTS trainers, we provide video tutorials and comprehensive guidance covering everything you need to know for the IELTS exam. Our goal is to empower our students with the necessary skills and knowledge needed for their future success.
          </p>
        </div>
      </section>

      {/* Section 4: Pillars of Success */}
      <section className="section" style={{ backgroundColor: '#faf8fc', paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid rgba(103, 35, 154, 0.05)' }}>
        <div className="container">
          <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#000000' }}>Pillars of Success</h2>
          </div>
          <div className="stats-grid-exact">
            {stats.map((stat, idx) => (
              <div key={idx} className="card stat-card-exact">
                <h2 className="stat-card-value-exact">{stat.value}</h2>
                <p className="stat-card-label-exact">{stat.label}</p>
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
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  collageBanner: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#f7f5fa'
  },
  collageImage: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  introGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '56px',
    alignItems: 'center'
  },
  introLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  heading: {
    fontSize: '2.25rem',
    fontWeight: '800',
    color: 'var(--primary-dark)',
    marginBottom: '20px',
    lineHeight: '1.25',
    fontFamily: 'var(--font-title)'
  },
  desc: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-muted)',
    textAlign: 'justify',
    margin: 0
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
    transition: 'transform 0.2s'
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
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '0.85fr 1.15fr',
    gap: '56px',
    alignItems: 'start'
  },
  newsColumn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  newsImageCard: {
    width: '100%',
    maxWidth: '420px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
    border: '1px solid rgba(103, 35, 154, 0.05)'
  },
  newsImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover'
  },
  textColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  bodyText: {
    fontSize: '1.05rem',
    lineHeight: '1.75',
    color: 'var(--text-muted)',
    textAlign: 'justify',
    margin: 0,
    fontFamily: 'var(--font-body)'
  },
  fullWidthTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: 'var(--max-width)',
    margin: '0 auto'
  }
};

const aboutStyles = `
  @media (max-width: 1024px) {
    div[style*="display: grid; grid-template-columns: 1.15fr 0.85fr"],
    div[style*="display: grid; grid-template-columns: 1.1fr 0.9fr"],
    div[style*="display: grid; grid-template-columns: 0.85fr 1.15fr"] {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const dynamicStyle = document.createElement('style');
  dynamicStyle.textContent = aboutStyles;
  document.head.appendChild(dynamicStyle);
}
