import './styles.css';

function Heading() {
 return (
     <h1>Music Player</h1>
 )
}

function SongPlayer() {
    return(
        <section>
            <Heading />
            <audio controls>
                <source src={'https://examples.devmastery.pl/assets/audio/deadfro5h.mp3'} />
            </audio>
        </section>
    )
}

function App() {
  return (
    <div className="App">
        <SongPlayer />
    </div>
  );
}

export default App;
