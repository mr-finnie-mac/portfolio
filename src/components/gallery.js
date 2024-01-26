import React from 'react';

function Gallery() {
  const imageContext = require.context('../img/gallery', false, /\.(jpg|jpeg|png|gif)$/);
  const imagePaths = imageContext.keys();

  // Array of objects containing image path and optional web link
  const imagesWithLinks = [
    { path: imagePaths[0], link: 'https://www.thingiverse.com/meadeor/designs' },
    { path: imagePaths[1], link: null }, // No link for this image
    { path: imagePaths[2], link: null },
    { path: imagePaths[3], link: null },
    { path: imagePaths[4], link: null },
    { path: imagePaths[5], link: 'https://www.hackster.io/Meadeor/crop-mapping-and-survey-drone-743363' },
    { path: imagePaths[6], link: 'https://www.hackster.io/Meadeor/crop-mapping-and-survey-drone-743363' },
    { path: imagePaths[7], link: 'https://www.hackster.io/Meadeor/corona-virus-test-vaccination-transport-drone-67fd78' },
    { path: imagePaths[8], link: 'https://www.hackster.io/Meadeor/digital-travel-lanyard-86cc82' },
    { path: imagePaths[9], link: null },
    { path: imagePaths[10], link: null },
    { path: imagePaths[11], link: null },
    { path: imagePaths[12], link: null },
    { path: imagePaths[13], link: null },
    { path: imagePaths[14], link: null },
    { path: imagePaths[15], link: null },
    { path: imagePaths[16], link: 'https://www.hackster.io/Meadeor/fire-rescue-uav-drone-0a29f4' },
    { path: imagePaths[17], link: 'https://www.hackster.io/Meadeor/fire-rescue-uav-drone-0a29f4' },
    { path: imagePaths[18], link: null },
    { path: imagePaths[19], link: null },
    { path: imagePaths[20], link: null },
    { path: imagePaths[21], link: null },
    { path: imagePaths[22], link: null },
    { path: imagePaths[23], link: null },
    { path: imagePaths[24], link: 'https://www.linkedin.com/feed/update/urn:li:activity:7077410592151543808/' },
    { path: imagePaths[25], link: null },
    { path: imagePaths[26], link: null },
    { path: imagePaths[27], link: 'https://www.hackster.io/Meadeor/meno-mirror-menopause-symptom-management-system-dc98db' },
    { path: imagePaths[28], link: null },
    { path: imagePaths[29], link: null },
    { path: imagePaths[30], link: 'https://www.hackster.io/Meadeor/crop-mapping-and-survey-drone-743363' },
    { path: imagePaths[31], link: null },
    // { path: imagePaths[31], link: null },
    // { path: imagePaths[32], link: null },
    // { path: imagePaths[33], link: null },
    // { path: imagePaths[34], link: null },
    
    
    
    // Add more objects for additional images
  ];

  return (
    <div id="img-wrapper">
      {imagesWithLinks.map((imageInfo, index) => (
        <div key={index}>
          {/* Check if a link is provided */}
          {imageInfo.link ? (
            <a href={imageInfo.link} target="_blank" rel="noopener noreferrer">
              <img
                className="gall-img"
                src={imageContext(imageInfo.path)}
                alt={`${((imageInfo.path.split('/'))[imageInfo.path.split('/').length-1].split('.')[0])}`}
                loading="lazy"
              />
            </a>
          ) : (
            <img
              className="gall-img"
              src={imageContext(imageInfo.path)}
              alt={`${((imageInfo.path.split('/'))[imageInfo.path.split('/').length-1].split('.')[0])}`}
              loading="lazy"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Gallery;


  