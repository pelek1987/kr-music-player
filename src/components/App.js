import {useEffect, useState} from "react";
import {Heading} from "./Heading";
import {SongPlayer} from "./SongPlayer";
import {Songs} from "./Songs";
import {SongListItem} from "./SongListItem";
import './App.css';

export function App() {
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
                    <Songs>
                        <Heading title={'Songs'} />
                        <ul>
                            {songs.map((song) => <SongListItem
                                song={song}
                                isCurrent={currentSong.audioUrl === song.audioUrl}
                                onSelect={handleSelectedSong}
                            />)}
                        </ul>
                    </Songs>
                </>
            )}
        </div>
    );
}
