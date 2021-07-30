import './styles.css';
import {useEffect, useRef, useState} from "react";

function Heading({title}) {
    return (
        <h1>{title}</h1>
    )
}

function SongPlayer({showControls = true, song}) {
    const { audioUrl, coverUrl } = song;
    const audioRef = useRef();
    return (
        <section className='SongPlayer'>
            <Heading title={'Music Player'}/>
            <img src={coverUrl} width={250} height={250} alt='Song cover'/>
            <audio key={audioUrl} ref={audioRef}  controls={showControls}>
                <source src={audioUrl}/>
            </audio>
            <div>
                <button onClick={() => audioRef.current.play()}>Play</button>
                <button onClick={() => audioRef.current.pause()}>Pause</button>
            </div>
        </section>
    )
}

function SongListItem({song: {title, artist, audioUrl, coverUrl}, isCurrent, onSelect}) {

    const handleClick = () => onSelect({title, artist, audioUrl, coverUrl});
    return <li className={`SongListItem ${isCurrent ? 'selected' : ''}`} onClick={handleClick}>
        {title} by {artist}
    </li>
}

function App() {
    const URL = 'https://examples.devmastery.pl/songs-api/songs';
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        window.fetch(URL)
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                throw new Error('Error: Could not fetch songs list.')
            })
            .then(data => setSongs(data))
            .catch(err => console.log(err));
    }, [])
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const currentSong = songs[currentSongIndex];
    const handleSelectedSong = (selectedSong) => {
        const audioIndex = songs.findIndex(song => song.audioUrl === selectedSong.audioUrl)
        if(audioIndex >= 0) {
            setCurrentSongIndex(audioIndex);
        }
    }
    return (
        <div className="App">
            {songs.length === 0 ? 'Loading...' : (
                <>
                    <SongPlayer
                        showControls={false}
                        song={currentSong}
                    />
                    <section className='Songs'>
                        <Heading title={'Songs'} />
                        <ul>
                            {songs.map((song) => <SongListItem
                                song={song}
                                isCurrent={currentSong.audioUrl === song.audioUrl}
                                onSelect={handleSelectedSong}
                            />)}
                        </ul>
                    </section>
                </>
            )}
        </div>
    );
}

export default App;
