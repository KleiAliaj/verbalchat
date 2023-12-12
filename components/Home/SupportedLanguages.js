import React, { useEffect, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';

// Define the set of language codes
const languageCodes = [
  '🇦🇱', // Albanian, Albania
  '🇦🇪', // Arabic, Arab World (UAE flag as a representative)
  '🇦🇲', // Armenian, Armenia
  '🇮🇳', // Awadhi, India
  '🇦🇿', // Azerbaijani, Azerbaijan
  '🇷🇺', // Bashkir, Russia
  '🇪🇸', // Basque, Spain
  '🇧🇾', // Belarusian, Belarus
  '🇧🇩', // Bengali, Bangladesh
  '🇮🇳', // Bhojpuri, India
  '🇧🇦', // Bosnian, Bosnia and Herzegovina
  '🇧🇷', // Brazilian Portuguese, Brazil
  '🇧🇬', // Bulgarian, Bulgaria
  '🇨🇳', // Cantonese (Yue), China
  '🇪🇸', // Catalan, Spain
  '🇮🇳', // Chhattisgarhi, India
  '🇨🇳', // Chinese, China
  '🇭🇷', // Croatian, Croatia
  '🇨🇿', // Czech, Czech Republic
  '🇩🇰', // Danish, Denmark
  '🇮🇳', // Dogri, India
  '🇳🇱', // Dutch, Netherlands
  '🇬🇧', // English, United Kingdom
  '🇪🇪', // Estonian, Estonia
  '🇫🇴', // Faroese, Faroe Islands
  '🇫🇮', // Finnish, Finland
  '🇫🇷', // French, France
  '🇪🇸', // Galician, Spain
  '🇬🇪', // Georgian, Georgia
  '🇩🇪', // German, Germany
  '🇬🇷', // Greek, Greece
  '🇮🇳', // Gujarati, India
  '🇮🇳', // Haryanvi, India
  '🇮🇳', // Hindi, India
  '🇭🇺', // Hungarian, Hungary
  '🇮🇩', // Indonesian, Indonesia
  '🇮🇪', // Irish, Ireland
  '🇮🇹', // Italian, Italy
  '🇯🇵', // Japanese, Japan
  '🇮🇩', // Javanese, Indonesia
  '🇮🇳', // Kannada, India
  '🇮🇳', // Kashmiri, India
  '🇰🇿', // Kazakh, Kazakhstan
  '🇮🇳', // Konkani, India
  '🇰🇷', // Korean, South Korea
  '🇰🇬', // Kyrgyz, Kyrgyzstan
  '🇱🇻', // Latvian, Latvia
  '🇱🇹', // Lithuanian, Lithuania
  '🇲🇰', // Macedonian, North Macedonia
  '🇮🇳', // Maithili, India
  '🇲🇾', // Malay, Malaysia
  '🇲🇹', // Maltese, Malta
  '🇨🇳', // Mandarin, China
  '🇨🇳', // Mandarin Chinese, China
  '🇮🇳', // Marathi, India
  '🇮🇳', // Marwari, India
  '🇨🇳', // Min Nan, China
  '🇲🇩', // Moldovan, Moldova
  '🇲🇳', // Mongolian, Mongolia
  '🇲🇪', // Montenegrin, Montenegro
  '🇳🇵', // Nepali, Nepal
  '🇳🇴', // Norwegian, Norway
  '🇮🇳', // Oriya, India
  '🇦🇫', // Pashto, Afghanistan
  '🇮🇷', // Persian (Farsi), Iran
  '🇵🇱', // Polish, Poland
  '🇵🇹', // Portuguese, Portugal
  '🇮🇳', // Punjabi, India
  '🇮🇳', // Rajasthani, India
  '🇷🇴', // Romanian, Romania
  '🇷🇺', // Russian, Russia
  '🇮🇳', // Sanskrit, India
  '🇮🇳', // Santali, India
  '🇷🇸', // Serbian, Serbia
  '🇵🇰', // Sindhi, Pakistan
  '🇱🇰', // Sinhala, Sri Lanka
  '🇸🇰', // Slovak, Slovakia
  '🇸🇮', // Slovene, Slovenia
  '🇸🇮', // Slovenian, Slovenia
  '🇺🇦', // Ukrainian, Ukraine
  '🇵🇰', // Urdu, Pakistan
  '🇺🇿', // Uzbek, Uzbekistan
  '🇻🇳', // Vietnamese, Vietnam
  '🇨🇳', // Wu, China
];


function Languages() {
  const [marqueeContent, setMarqueeContent] = useState([]);
  const { colorMode } = useColorMode(); // Hook to access color mode

  useEffect(() => {
    // Shuffle the language codes and duplicate them
    const shuffled = [...languageCodes].sort(() => 0.5 - Math.random());
    setMarqueeContent([...shuffled, ...shuffled]); // Duplicate the array
  }, []);

  // Define styles based on the color mode
  const containerStyle = {
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: colorMode === 'dark' ? '#1A202C' : '#fff',
    color: colorMode === 'dark' ? '#fff' : '#000',
  };

  const textStyle = {
    textAlign: 'center',
    padding: '1rem',
    fontSize: '1.5rem',
  };

  const marqueeStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  };

  const marqueeRowStyle = {
    display: 'flex',
    whiteSpace: 'nowrap',
    animation: 'scroll-left 30s linear infinite',
  };

  const spanStyle = {
    fontSize: '2.5rem',
    padding: '0 1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        We support over<br />
        100 languages
      </div>
      <div style={marqueeStyle}>
        <div style={marqueeRowStyle}>
          {marqueeContent.map((code, index) => (
            <span key={index} style={spanStyle}>
              {code}
            </span>
          ))}
        </div>
        <div style={{ ...marqueeRowStyle, animationDirection: 'reverse' }}>
          {marqueeContent.map((code, index) => (
            <span key={index} style={spanStyle}>
              {code}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}

export default Languages;
