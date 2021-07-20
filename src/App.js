import './styles.css';

function Heading() {
 return (
     <h1>Music Player</h1>
 )
}

function App() {
  return (
    <div className="App">
      <Heading />
        <audio controls>
            <source src={'https://examples.devmastery.pl/assets/audio/deadfro5h.mp3'} />
        </audio>
    </div>
  );
}

export default App;
