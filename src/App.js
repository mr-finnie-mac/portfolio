// import logo from './logo.svg';
// import React, { useRef } from "react";
import './App.css';
// import AboutPageAnimation from "./AboutPageAnimation";
import './goodMusic'
import GetRandomSong from './goodMusic';
// import MakeModels from './models'
// import SkillsList from './skills';
import Gallery from './components/gallery';
import SkillScrollingBar from './skillsBar';
// import ParallaxImage from './ParallaxImage';
import Collaborations from './components/collab-logos';
// import Artefact from './components/artefacts';
import ArtefactGrid from './components/artefact-grid';
function App() {
  const artefacts = [
    {
      image: require('./img/assets/evolution.png'),
      caption: 'meet the hominids',
     
    },
    {
      image: require('./img/assets/bike.png'),
      caption: 'this is my bike',
      
    },
    {
      image: require('./img/assets/trilobite.png'),
      caption: 'best trilobite',
      
    },
    {
      image: require('./img/assets/guitar.png'),
      caption: 'the noodler',
      
    },
    {
      image: require('./img/assets/telegraph.png'),
      caption: 'wires in the sky',
      
    },
    {
      image: require('./img/assets/tree.png'),
      caption: 'wooden hard drive',
      
    },
    {
      image: require('./img/assets/veg.png'),
      caption: 'veg',
      
    },
    {
      image: require('./img/assets/fib.png'),
      caption: 'you are not worthy',
      
    },
  ];
  const width = 33.3;
  return (
    <div className="App">
      <header className="App-header">
        {/* <img className="fibonacci"src="https://upload.wikimedia.org/wikipedia/commons/7/79/Fibonacci_spiral.svg"  alt="logo" /> */}
        <div>
          <h1 className='title' id = 'fancy-text'>
            WORLD OF FIN
          </h1>
        </div>
        <p>Portfolio website</p>
        <a
          className="App-link"
          href="https://github.com/mr-finnie-mac"
          target="_blank"
          rel="noopener noreferrer"
        >
          See github
        </a>
        <img className="standing-fin" src= {require("./img/standing-fin-trans.png")}  alt="logo" />
        </header>
        
        <div>
          <Gallery />
        </div>
        <Collaborations />
        <div>
        {/* Other content */}
        <div>
    
        
      </div>
        {/* <ImageComponent imageUrl={require("./img/assets/evolution.png")} position={{top: '500px', left: '50px'}}/> */}
        {/* <ParallaxImage imageUrl= {require("./img/goodsoup.jpg")} speed={0.1} /> */}
        {/* More content */}
        </div>
        <SkillScrollingBar />
        <div id="scene-container">
          <div className="Skills window">
            {/* <p className='skillset-title'>Skill Set</p> */}
            {/* <SkillsList /> */}
          </div>
        </div>
        <div className="showroom">
            <p className='showroom-text'>
            {/* 3D Work */}
            </p>
            {/* <MakeModels/> */}
        </div>
      
      {/* <AboutPageAnimation /> */}

      {/* Some cool things */}
      <ArtefactGrid artefacts={artefacts} width={width} />
      <div className = "record-player-container">
          <img src= {require("./img/Green-8499-1024x1024.png")} className = "vinyl" id = "rotate" alt = "vinyl"/>
          <GetRandomSong/>
        </div>
    
      {/* <div className='title-plaque'>Links to stuff:</div> */}
      <div className='bottomDweller' id = "fill">
      </div>
    </div>
  );
}
export default App;
