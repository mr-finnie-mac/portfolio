import React from 'react';

const Artefact = ({ image, caption, width }) => {
  const containerStyle = {
    width: `${width}vw`, // Set the width to the specified pixel value
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
  };

  return (
    <div className="artefact-item" style={containerStyle}>
      <img src={image} alt={caption} style={{ ...imageStyle, animationDuration: '1s' }} className="vibrate" />
      <p>{caption}</p>
    </div>
  );
};

export default Artefact;



