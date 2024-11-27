import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
     <h1 className="App">Puspha</h1>
     <h1 className="App">Characters of Puspha</h1>
        <h2>1.Allu Arjun</h2>
        <img src="./images/Allu arjun.jpg"></img>
        <h2>2.Srivalli</h2>
        <img src="./images/Srivalli.jpg"></img>
        <h2>3.Banwar singh</h2>
        <img src="./images/Banwar singh.jpg"></img>
     <h1 className="App">Trailer of Puspha</h1>
     <div className="App"><video  src="./video/Puspha trailer.mp4" controls></video></div>
     <h1 className="App">Songs from puspha movie</h1>
     <audio src="./audio/BG intro.mp3" controls></audio>
     <audio src="./audio/Dakko.mp3" controls></audio>
     <audio src="./audio/Eyy Bidda.mp3" controls></audio>
     <audio src="./audio/OO Antava.mp3" controls></audio>
     <audio src="./audio/Sammi.mp3" controls></audio>
     <audio src="./audio/Srivalli.mp3" controls></audio>
    </div>
  );  
}
export default App;
