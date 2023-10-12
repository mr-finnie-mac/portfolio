import React from 'react';
import Artefact from './artefacts';

const ArtefactGrid = ({ artefacts }) => {
    return (
        <div>
            <div className='artefact-heading'><h1>Here are my artefacts</h1></div>
            <div className="artefact-grid-container">
                <div className="artefact-grid">
                {artefacts.map((artefact, index) => (
                    <div key={index} className="artefact-item">
                    <Artefact {...artefact} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
  };
export default ArtefactGrid;