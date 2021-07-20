import './styles.css';

function Heading() {
 return (
     <h1>Music Player</h1>
 )
}

function SongPlayer() {
    const audioUrl = 'https://examples.devmastery.pl/assets/audio/deadfro5h.mp3';
    const showControls = false || true;
    return(
        <section>
            <Heading />
            <audio controls={showControls}>
                <source src={audioUrl} />
            </audio>
        </section>
    )
}

function getStatusMessage(isLoading, hasError) {
    let msg = null;
    if(isLoading) {
        msg = 'Loading...';
    }
    if(hasError) {
        msg = 'Error occured...';
    }
    return msg;
}

function App() {
    const hasError = false;
    const isLoading = false;
    const statusMessage = getStatusMessage(isLoading, hasError);
    const showPlayer = !hasError && !isLoading;
  return (
    <div className="App">
        { showPlayer ? <SongPlayer/> : statusMessage }
    </div>
  );
}

export default App;
