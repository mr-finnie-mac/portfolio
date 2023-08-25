import React from 'react';

function Gallery() {
  const imageContext = require.context('../img/gallery', false, /\.(jpg|jpeg|png|gif)$/);
  const imagePaths = imageContext.keys();
  console.log(imagePaths);
  // const parts = imagePath.split('/');
  // // Get the filename with extension
  // const filenameWithExtension = parts[parts.length - 1];

  return (
    <div id="img-wrapper">
      {imagePaths.map((imagePath, index) => (
        <div key={index}>

          <img className="gall-img" src={imageContext(imagePath)} alt={`${((imagePath.split('/'))[imagePath.split('/').length-1].split('.')[0])}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;

  