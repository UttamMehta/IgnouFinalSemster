import React, { useState } from 'react';
import { transliterate } from 'transliteration';

const TransliterationExample = () => {
  const [englishText, setEnglishText] = useState('');
  const [odiaText, setOdiaText] = useState('');

  const handleEnglishInputChange = (event) => {
    const inputText = event.target.value;
    setEnglishText(inputText);

    // Transliterate English text to Odia
    const transliteratedText = transliterate(inputText, { from: 'en', to: 'or' });
    setOdiaText(transliteratedText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text in English"
        value={englishText}
        onChange={handleEnglishInputChange}
      />
      <p>Transliterated to Odia: {odiaText}</p>
    </div>
  );
};

export default TransliterationExample;
