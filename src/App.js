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

function SongListItem({song: {title, artist, audioUrl, coverUrl}, isCurrent, onSelect}) {
    const style = {
    backgroundColor: isCurrent ? 'darkslategrey' : 'none'
    }
    const handleClick = () => onSelect({title, artist, audioUrl, coverUrl});
    return <li onClick={handleClick} style={style}>{title} by {artist}</li>
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
    const handleSelectedSong = (selectedSong) => console.log(selectedSong)
    return (
        <div className="App">
            <SongPlayer
                showControls
                song={currentSong}
            />
            <section>
                <Heading title={'Songs'} />
                <ul>
                    {songs.map((song) => <SongListItem
                        song={song}
                        isCurrent={currentSong.audioUrl === song.audioUrl}
                        onSelect={handleSelectedSong}
                    />)}
                </ul>
            </section>

        </div>
    );
}

export default App;
