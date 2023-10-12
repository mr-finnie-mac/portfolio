import React, { useState, useEffect } from 'react';
// import './WordMarquee.css';

const SkillScrollingBar = () => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Fetch the text file with words
    fetch('/skills.txt')
      .then(response => response.text())
      .then(data => {
        const wordsArray = data.split(',').map(word => word.trim());
        setWords(wordsArray);
      })
      .catch(error => {
        console.error('Error fetching words:', error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(index => (index + 1) % words.length);
    }, 500); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="word-marquee">
      <span className="moving-word-transition">
        {words.map((word, index) => (
          <span
            key={index}
            className={`moving-word ${index === currentWordIndex ? 'active' : ''}`}
          >
            {word}
          </span>
        ))}
      </span>
    </div>
  );
};

export default SkillScrollingBar;

