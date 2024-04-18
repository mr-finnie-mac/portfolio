import React from 'react';

function Gallery() {
  const imageContext = require.context('../img/gallery', false, /\.(jpg|jpeg|png|gif)$/);
  let imagePaths = imageContext.keys();

  // Sort the imagePaths array based on filenames numerically
  imagePaths = imagePaths.sort((a, b) => {
    const filenameA = parseInt(a.match(/\d+/)[0]);
    const filenameB = parseInt(b.match(/\d+/)[0]);
    return filenameA - filenameB;
  });

  // Array of objects containing image path and optional web link
  const imagesWithLinks = imagePaths.map((path, index) => ({
    path: path,
    link: getImageLink(index),
  }));

  function getImageLink(index) {
    const defaultLinks = [
      'https://www.thingiverse.com/meadeor/designs',
      null,
      null,
      null,
      null,
      'https://www.hackster.io/Meadeor/crop-mapping-and-survey-drone-743363',
      'https://www.hackster.io/Meadeor/crop-mapping-and-survey-drone-743363',
      'https://www.hackster.io/Meadeor/corona-virus-test-vaccination-transport-drone-67fd78',
      'https://www.hackster.io/Meadeor/digital-travel-lanyard-86cc82',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      'https://www.hackster.io/Meadeor/fire-rescue-uav-drone-0a29f4',
      'https://www.hackster.io/Meadeor/fire-rescue-uav-drone-0a29f4',
      null,
      null,
      null,
      null,
      null,
      null,
      'https://www.linkedin.com/feed/update/urn:li:activity:7077410592151543808/',
      null,
      null,
      'https://www.hackster.io/Meadeor/meno-mirror-menopause-symptom-management-system-dc98db',
      null,
      null,
      'https://www.hackster.io/Meadeor/crop-mapping-and-survey-drone-743363',
      null,
      null,
    ];

    return defaultLinks[index] || null;
  }

  return (
    <div id="img-wrapper">
      {imagesWithLinks.map((imageInfo, index) => (
        <div key={index}>
          {imageInfo.link ? (
            <a href={imageInfo.link} target="_blank" rel="noopener noreferrer">
              <img
                className="gall-img"
                src={imageContext(imageInfo.path)}
                alt={`${imageInfo.path.split('/').pop().split('.')[0]}`}
                loading="lazy"
              />
            </a>
          ) : (
            <img
              className="gall-img"
              src={imageContext(imageInfo.path)}
              alt={`${imageInfo.path.split('/').pop().split('.')[0]}`}
              loading="lazy"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Gallery;
