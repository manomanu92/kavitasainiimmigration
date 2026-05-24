import React from 'react';
import { getCleanPageContent } from '../utils/contentParser';
import rawSiteData from '../data/scraped_site_content.json';
import { CheckCircle2 } from 'lucide-react';

export default function GenericPage({ pageKey }) {
  const { title, sections } = getCleanPageContent(pageKey, rawSiteData);

  // Group PTE parts if this is the spoken english page
  const processedSections = [];
  if (pageKey === 'spoken_english') {
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (sec.tag === 'h4' && sec.text === 'Part-1') {
        const pteGroup = {
          tag: 'pte_table',
          part1: {
            title: 'Part-1',
            subtitle: 'Speaking and writing',
            items: []
          },
          part2: {
            title: 'Part-2',
            subtitle: 'Listening',
            items: []
          },
          part3: {
            title: 'Part-3',
            subtitle: 'Reading',
            items: []
          }
        };

        // Collect part 1 items
        i++;
        while (i < sections.length && !(sections[i].tag === 'h4' && sections[i].text === 'Part-2')) {
          if (sections[i].tag === 'li') {
            pteGroup.part1.items.push(sections[i].text);
          }
          i++;
        }

        // Collect part 2 items
        if (i < sections.length && sections[i].tag === 'h4' && sections[i].text === 'Part-2') {
          i++;
          while (i < sections.length && !(sections[i].tag === 'h4' && sections[i].text === 'Part-3')) {
            if (sections[i].tag === 'li') {
              pteGroup.part2.items.push(sections[i].text);
            }
            i++;
          }
        }

        // Collect part 3 items
        if (i < sections.length && sections[i].tag === 'h4' && sections[i].text === 'Part-3') {
          i++;
          while (i < sections.length && sections[i].tag === 'li') {
            pteGroup.part3.items.push(sections[i].text);
            i++;
          }
        }

        processedSections.push(pteGroup);
        i--; // Step back to handle loop offset correctly
      } else {
        processedSections.push(sec);
      }
    }
  } else {
    processedSections.push(...sections);
  }

  const bannerImages = {
    about: '/images/Artboard-7.jpg',
    ielts: '/images/Artboard-8.jpg',
    spoken_english: '/images/Artboard-9.jpg',
    career_counselling: '/images/Artboard-10.jpg',
    corporate_soft_skills: '/images/Artboard-10.jpg',
    spouse_visa: '/images/Artboard-10.jpg',
    ventures: '/images/19.jpg',
    study_visa: '/images/Artboard-3.jpg',
    canada_study_visa: '/images/Artboard-3.jpg',
    usa_study_visa: '/images/11.jpg',
    uk_study_visa: '/images/Artboard-2.jpg',
    australia_study_visa: '/images/12.jpg',
    new_zealand_study_visa: '/images/13.jpg',
    tourist_visa: '/images/16.jpg',
    canada_tourist_visa: '/images/16.jpg',
    usa_tourist_visa: '/images/16.jpg',
    uk_tourist_visa: '/images/14.jpg',
    australia_tourist_visa: '/images/14.jpg',
  };

  const bgImage = bannerImages[pageKey] || '/images/Artboard-3.jpg';

  return (
    <div style={{
      ...styles.page,
      minHeight: processedSections.length > 0 ? '80vh' : 'auto'
    }}>
      {/* Banner / Collage Image Grid at top */}
      <div style={styles.collageBanner}>
        <img 
          src={bgImage} 
          alt={title} 
          style={styles.collageImage} 
        />
      </div>

      {/* Main Body */}
      {processedSections.length > 0 && (
        <div className="container" style={styles.contentContainer}>
          <div style={styles.layout}>
            {/* Main Article Content */}
            <main style={styles.mainContent}>
              <div style={styles.article}>
                {processedSections.map((sec, index) => {
                  if (sec.tag === 'pte_table') {
                    return (
                      <div className="pte-container" key={index}>
                        <div className="pte-column">
                          <h4 className="pte-title">{sec.part1.title}</h4>
                          <span className="pte-subtitle">{sec.part1.subtitle}</span>
                          <ul className="pte-list">
                            {sec.part1.items.map((item, idx) => (
                              <li className="pte-list-item" key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </ul>
                        </div>
                        <div className="pte-column">
                          <h4 className="pte-title">{sec.part2.title}</h4>
                          <span className="pte-subtitle">{sec.part2.subtitle}</span>
                          <ul className="pte-list">
                            {sec.part2.items.map((item, idx) => (
                              <li className="pte-list-item" key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </ul>
                        </div>
                        <div className="pte-column">
                          <h4 className="pte-title">{sec.part3.title}</h4>
                          <span className="pte-subtitle">{sec.part3.subtitle}</span>
                          <ul className="pte-list">
                            {sec.part3.items.map((item, idx) => (
                              <li className="pte-list-item" key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  } else if (sec.tag.startsWith('h')) {
                    // Headings
                    const HeadingTag = sec.tag === 'h2' || sec.tag === 'h3' ? 'h2' : 'h3';
                    const headingStyle = {
                      ...(HeadingTag === 'h2' ? styles.heading2 : styles.heading3),
                      marginTop: index === 0 ? '0px' : (HeadingTag === 'h2' ? '36px' : '24px')
                    };
                    return (
                      <HeadingTag 
                        key={index} 
                        style={headingStyle}
                        dangerouslySetInnerHTML={{ __html: sec.text }}
                      />
                    );
                  } else if (sec.tag === 'li') {
                    // List items
                    return (
                      <div key={index} style={styles.listItem}>
                        <CheckCircle2 size={18} style={styles.listIcon} />
                        <span style={styles.listText} dangerouslySetInnerHTML={{ __html: sec.text }} />
                      </div>
                    );
                  } else {
                    // Standard Paragraphs
                    return (
                      <p 
                        key={index} 
                        style={styles.paragraph}
                        dangerouslySetInnerHTML={{ __html: sec.text }}
                      />
                    );
                  }
                })}
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: '80vh',
    backgroundColor: '#ffffff'
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
  contentContainer: {
    paddingTop: '60px',
    paddingBottom: '80px'
  },
  layout: {
    maxWidth: '1000px',
    margin: '0 auto'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  noContent: {
    textAlign: 'center',
    padding: '48px',
    color: 'var(--text-muted)'
  },
  article: {
    display: 'flex',
    flexDirection: 'column'
  },
  heading2: {
    fontSize: '1.85rem',
    color: 'var(--primary-dark)',
    marginBottom: '18px',
    fontFamily: 'var(--font-title)',
    borderBottom: '2px solid rgba(103, 35, 154, 0.08)',
    paddingBottom: '10px',
    fontWeight: '750'
  },
  heading3: {
    fontSize: '1.45rem',
    color: 'var(--primary)',
    marginBottom: '14px',
    fontFamily: 'var(--font-title)',
    fontWeight: '700'
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: '1.75',
    color: 'var(--text-muted)',
    marginBottom: '20px',
    fontFamily: 'var(--font-body)',
    textAlign: 'justify'
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '14px',
    padding: '10px 14px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(103, 35, 154, 0.05)',
    boxShadow: '0 2px 8px rgba(103, 35, 154, 0.02)'
  },
  listIcon: {
    color: 'var(--primary)',
    flexShrink: 0,
    marginTop: '3px'
  },
  listText: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: 'var(--text-main)',
    fontWeight: '500'
  }
};

const pteTableCss = `
  .pte-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    padding: 32px 24px;
    background-color: #ffffff;
    margin: 32px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.01);
  }
  .pte-column {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
  }
  .pte-column:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.08);
  }
  .pte-title {
    font-size: 1.6rem;
    font-weight: 750;
    color: #000000;
    margin-top: 0 !important;
    margin-bottom: 6px !important;
    font-family: var(--font-title);
  }
  .pte-subtitle {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 18px;
    font-family: var(--font-body);
  }
  .pte-list {
    list-style-type: disc;
    padding-left: 20px;
    margin: 0;
  }
  .pte-list-item {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text-main);
    margin-bottom: 8px;
    font-family: var(--font-body);
  }
  
  @media (max-width: 768px) {
    .pte-container {
      grid-template-columns: 1fr !important;
      gap: 28px !important;
      padding: 24px 16px !important;
    }
    .pte-column {
      padding: 0 0 24px 0 !important;
    }
    .pte-column:not(:last-child) {
      border-right: none !important;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const dynamicStyle = document.createElement('style');
  dynamicStyle.textContent = pteTableCss;
  document.head.appendChild(dynamicStyle);
}


