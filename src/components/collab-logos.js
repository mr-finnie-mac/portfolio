import React from 'react';

function Collaborations() {
  return (
  <div id="collab-container">
    <div><img className = 'collab-logo' src= {require("../img/logos/arm-logo.png")} alt = "info"/></div>
    <div><img className = 'collab-logo' src= {require("../img/logos/hackster_logo.png")} alt = "info"/></div>
    <div><img className = 'collab-logo' src= {require("../img/logos/Black_lazerthrust.png")} alt = "info"/></div>
    <div><img className = 'collab-logo' src= {require("../img/logos/NXP-Logo.png")} alt = "info"/></div>
    <div><img className = 'collab-logo' src= {require("../img/logos/UEA-logo.png")} alt = "info"/></div>
    <div><img className = 'collab-logo' src= {require("../img/logos/vertical_solar-logo.webp")} alt = "info"/></div>
    </div>
  );
}

export default Collaborations;