// import logo from './logo.svg';
import './App.css';
import AboutPageAnimation from "./AboutPageAnimation";
import './gallery'
import './goodMusic'
import GetRandomSong from './goodMusic';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img className="fibonacci"src="https://upload.wikimedia.org/wikipedia/commons/7/79/Fibonacci_spiral.svg"  alt="logo" /> */}
        <div>
          <h1 className='title' id = 'fancy-text'>
            FIN MEAD PORTFOLIO
          </h1>
        </div>
        <a
          className="App-link"
          href="https://github.com/mr-finnie-mac"
          target="_blank"
          rel="noopener noreferrer"
        >
          See github
        </a>
        <div>
          <div id="img-wrapper">
            <div><img class = 'gall-img' src= {require("./img/gallery/bike-pack.jpg")} alt = "info" /></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/fruav.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/covid-uav.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/nor-keyboard.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/slider.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/esp-remote.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/esp-hall-dual-esc.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/stereo-testing.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/bmx.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/wreath-bike.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/robot-render.jpg")} alt = "info"/></div>
            <div><img class = 'gall-img' src= {require("./img/gallery/cgt.jpg")} alt = "info"/></div>
          </div>

        </div>
        {/* <div className="overview">
            <p className='overview-text'>
            Hi, my name is Fin Mead. I'm a student currently enrolled at UEA in my 3rd year of studying Computer Science. I have many interests and enjoy lots of hobbies. I'm naturally curious and love learning new skills and expanding my knowledge. I have had many projects over the years, big and small. From building devices and programming to film making, 3d design and playing guitar. I enjoy them all, and more!
            </p>
        </div> */}
      </header>
      <AboutPageAnimation />
      <div className = "containter">
          <img src= {require("./img/Green-8499-1024x1024.png")} className = "rotate" alt = "vinyl"/>
          <GetRandomSong/>
        </div>
      {/* <div className='title-plaque'>Links to stuff:</div> */}
      <div className='bottomDweller' id = "fill"></div>
    </div>
  );
}

export default App;
//export {Overview};