import logo from './logo.svg';
import './App.css';
import AboutPageAnimation from "./AboutPageAnimation";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="fibonacci"src="https://upload.wikimedia.org/wikipedia/commons/7/79/Fibonacci_spiral.svg"  alt="logo" />
        <p className='title' id = 'fancy-text'>
          FIN MEAD PORTFOLIO
        </p>
        <a
          className="App-link"
          href="https://github.com/mr-finnie-mac"
          target="_blank"
          rel="noopener noreferrer"
        >
          See github
        </a>
        <div className="overview">
            <p className='overview-text'>
            Hi, my name is Fin Mead. I'm a student currently enrolled at UEA in my 3rd year of studying Computer Science. I have many interests and enjoy lots of hobbies. I'm naturally curious and love learning new skills and expanding my knowledge. I have had many projects over the years, big and small. From building devices and programming to film making, 3d design and playing guitar. I enjoy them all, and more!
            </p>
        </div>
        <AboutPageAnimation />
      </header>
    </div>
  );
}

export default App;
//export {Overview};