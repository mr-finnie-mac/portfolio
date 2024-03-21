import React from 'react';

function Collaborations() {
  return (
    <div id="collab-container">
      <div>
        <a href={'https://www.hackster.io/contests/hovergames#category-548'} target="_blank" rel="noopener noreferrer">
          <img className = 'collab-logo' src= {require("../img/logos/arm-logo.png")} alt = "info"/>
        </a>
      </div>
      <div>
        <a href={'https://www.hackster.io/Meadeor'} target="_blank" rel="noopener noreferrer">
          <img className = 'collab-logo' src= {require("../img/logos/hackster_logo.png")} alt = "info"/>
        </a>
      </div>
      <div>
        <a href={'https://lazerthrust.technology/'} target="_blank" rel="noopener noreferrer">
        <img className = 'collab-logo' src= {require("../img/logos/Black_lazerthrust.png")} alt = "info"/>
        </a>
      </div>
      <div>
        <a href={'https://www.hovergames.com/'} target="_blank" rel="noopener noreferrer">
        <img className = 'collab-logo' src= {require("../img/logos/NXP-Logo.png")} alt = "info"/>
        </a>
      </div>
      <div>
        <a href={'https://research-portal.uea.ac.uk/en/persons/fin-mead.ac.uk/'} target="_blank" rel="noopener noreferrer">
        <img className = 'collab-logo' src= {require("../img/logos/UEA-logo.png")} alt = "info"/>
        </a>
      </div>

      <div>
        <a href={'https://www.verticalsolar.co.uk/'} target="_blank" rel="noopener noreferrer">
        <img className = 'collab-logo' src= {require("../img/logos/vertical_solar-logo.webp")} alt = "info"/>
        </a>
      </div>
    </div>
  );
}

export default Collaborations;