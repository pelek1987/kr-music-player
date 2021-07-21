import './styles.css';

function Heading({title}) {
    return (
        <h1>{title}</h1>
    )
}

function SongPlayer({showControls = true, audioUrl}) {
    return (
        <section>
            <Heading title={'Music Player'}/>
            <audio  controls={showControls}>
                <source src={audioUrl}/>
            </audio>
        </section>
    )
}

function App() {

    return (
        <div className="App">
            <SongPlayer
                showControls
                audioUrl={'https://examples.devmastery.pl/assets/audio/deadfro5h.mp3'}
            />
        </div>
    );
}

export default App;
