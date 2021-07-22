import './styles.css';

function Heading({title}) {
    return (
        <h1>{title}</h1>
    )
}

function SongPlayer({showControls = true, song}) {
    const { audioUrl, coverUrl } = song;
    return (
        <section>
            <Heading title={'Music Player'}/>
            <img src={coverUrl} width={250} height={250} alt='Song cover'/>
            <audio key={audioUrl}  controls={showControls}>
                <source src={audioUrl}/>
            </audio>
        </section>
    )
}

function SongListItem({title, artist}) {
    return <li>{title} by {artist}</li>
}

function SongList({ songs }) {
    return (
        <section>
            <Heading title={'Songs'} />
            <ul>
                {songs.map(({artist, title, audioUrl}) => <SongListItem key={audioUrl} title={title} artist={artist} />)}
            </ul>
        </section>
    )
}

function App() {
    const songs = [
        {
            audioUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
            coverUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
            title: "Deadfro5h",
            artist: "starfrosh"
        },
        {
            audioUrl: "https://examples.devmastery.pl/assets/audio/majesty.mp3",
            coverUrl: "https://examples.devmastery.pl/assets/audio/majesty.jpg",
            title: "Majesty (Original Mix)",
            artist: "Ryan Craig Martin"
        },
        {
            audioUrl: "https://examples.devmastery.pl/assets/audio/runs.mp3",
            coverUrl: "https://examples.devmastery.pl/assets/audio/runs.jpg",
            title: "Runs",
            artist: "Wowa"
        }
    ];
    const currentSong = songs[0]
    return (
        <div className="App">
            <SongPlayer
                showControls
                song={currentSong}
            />
            <SongList songs={songs} />
        </div>
    );
}

export default App;
