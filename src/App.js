// import logo from './logo.svg';
import './App.css';
import AboutPageAnimation from "./AboutPageAnimation";
import './gallery'
import './goodMusic'
import GetRandomSong from './goodMusic';
import RenderModels from './models'
import SkillsList from './skills';

function App() {
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
          <div id="img-wrapper">
            <div><img className = 'gall-img' src= {require("./img/gallery/bike-pack.jpg")} alt = "info" /></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/fruav.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/elephant.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/fruav-equipped.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/covid-uav.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/nor-keyboard.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/slider.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/esp-remote.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/london-gardens.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/esp-hall-dual-esc.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/stereo-testing.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/bmx.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/wreath-bike.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/smart-mirror.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/flowery-field.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/robot-render.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/me-dinos.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/cgt.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/stepper-turntable.jpg")} alt = "info"/></div>
            <div><img className = 'gall-img' src= {require("./img/gallery/space-station-monitor.jpg")} alt = "info"/></div>
          </div>

        </div>
        <div id="scene-container">
          <div className="Skills window">
            
          </div>
        </div>
        <div className="showroom">
            <p className='showroom-text'>
            3D Work
            </p>
            <RenderModels/>
        </div>
      
      {/* <AboutPageAnimation /> */}
        <SkillsList />
      <div className = "record-player-container">
          <img src= {require("./img/Green-8499-1024x1024.png")} className = "vinyl" id = "rotate" alt = "vinyl"/>
          <GetRandomSong/>
        </div>
      {/* <div className='title-plaque'>Links to stuff:</div> */}
      <div className='bottomDweller' id = "fill"></div>
    </div>
  );
}

export default App;
//export {Overview};