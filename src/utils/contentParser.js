/**
 * Utility to filter and parse scraped content from scraped_site_content.json
 */

const IGNORED_TEXTS = new Set([
  'kavitasainiimmigration@gmail.com',
  'Home',
  'About Us',
  'Services',
  'Language',
  'IELTS',
  'Spoken English',
  'Personality Development',
  'Career Counselling',
  'Corporate & Soft Skills',
  'Study Visa',
  'Canada Study Visa',
  'USA Study Visa',
  'UK Study Visa',
  'Australia Study Visa',
  'New Zealand Study Visa',
  'Tourist Visa',
  'UK Tourist Visa',
  'Australia Tourist Visa',
  'USA Tourist Visa',
  'Canada Tourist Visa',
  'Spouse Visa',
  'Ventures',
  'Blog',
  'Contact Us',
  'ARRANGE A CALL BACK',
  'About',
  'Faq',
  'Useful links',
  'Our Services',
  'SEND',
  'Name',
  'Email Address',
  'Phone',
  'Visas',
  'Employment Visa',
  'Disclaimer',
  '⚠️'
]);

export function getCleanPageContent(pageKey, rawData) {
  if (!rawData || !rawData[pageKey]) {
    return { title: '', sections: [] };
  }

  const pageData = rawData[pageKey];
  const rawContent = pageData.content || [];
  
  // 1. Initial Filtering of header/footer junk
  const filteredItems = [];
  
  for (const [tag, text] of rawContent) {
    const cleanText = text.trim();
    if (!cleanText) continue;

    // Filter by strict ignore set
    if (IGNORED_TEXTS.has(cleanText)) continue;

    // Filter by pattern
    const lowerText = cleanText.toLowerCase();
    if (lowerText.includes('sector 34a, chandigarh') || 
        lowerText.includes('giani zail singh nagar, ropar') || 
        lowerText.includes('new nalagarh') ||
        lowerText.includes('+91 98162') ||
        lowerText.includes('+91 82828') ||
        lowerText.includes('+1 437') ||
        lowerText.includes('#hashtag is one of the fastest growing') ||
        lowerText.includes('disclaimer: the application approval') ||
        lowerText.includes('for watching more youtube videos') ||
        lowerText === 'study visa' ||
        lowerText === 'tourist visa' ||
        lowerText === 'visitor visa' ||
        lowerText === 'spouse visa' ||
        lowerText === 'spoken english' ||
        lowerText === 'pr visa' ||
        lowerText === 'ielts') {
      continue;
    }

    filteredItems.push({ tag, text: cleanText });
  }

  // 2. Smart Reconstruction (merging split paragraphs)
  const reconstructed = [];
  let currentParagraph = null;

  for (const item of filteredItems) {
    if (item.tag === 'p') {
      if (!currentParagraph) {
        currentParagraph = item.text;
      } else {
        const lastChar = currentParagraph.slice(-1);
        const firstChar = item.text.charAt(0);
        
        // Merge conditions:
        // - Previous paragraph doesn't end with a punctuation mark (., ?, !, :, ;)
        // - Current text starts with a comma, space, lowercase letter, or is extremely short
        const needsMerge = 
          !/[.?!:;]$/.test(currentParagraph) || 
          /^[a-z,]/.test(firstChar) || 
          item.text.length < 15;

        if (needsMerge) {
          // If merging, add space if needed
          const separator = (currentParagraph.endsWith('-') || item.text.startsWith(',') || item.text.startsWith('.')) ? '' : ' ';
          currentParagraph += separator + item.text;
        } else {
          // Push previous, start new
          reconstructed.push({ tag: 'p', text: currentParagraph });
          currentParagraph = item.text;
        }
      }
    } else {
      // If we encounter a heading or list and have an ongoing paragraph, push it first
      if (currentParagraph) {
        reconstructed.push({ tag: 'p', text: currentParagraph });
        currentParagraph = null;
      }
      reconstructed.push(item);
    }
  }

  if (currentParagraph) {
    reconstructed.push({ tag: 'p', text: currentParagraph });
  }

  // Find the primary heading as title, otherwise construct one
  let title = '';
  const firstHeading = pageData.headings && pageData.headings.length > 0 
    ? pageData.headings[0][1] 
    : '';

  if (firstHeading && !IGNORED_TEXTS.has(firstHeading.trim())) {
    title = firstHeading;
  } else {
    // Fallback title formatting
    title = pageKey
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return {
    title,
    sections: reconstructed
  };
}
