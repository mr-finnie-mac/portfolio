import React, { useState, useEffect } from 'react';
// import './ParallaxImage.css';

const ParallaxImage = ({ imageUrl, speed }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translateY = -scrollY * speed;

  return (
    <div className="parallax-container">
      <div
        className="parallax-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translate3d(0, ${translateY}px, 0)`,
        }}
      />
    </div>
  );
};

export default ParallaxImage;

