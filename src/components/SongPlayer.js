import {useRef} from "react";
import {Heading} from "./Heading";
import './SongPlayer.css';

export function SongPlayer({showControls = true, song}) {
    const {audioUrl, coverUrl} = song;
    const audioRef = useRef();
    return (
        <section className='SongPlayer'>
            <Heading title={'Music Player'}/>
            <img src={coverUrl} width={250} height={250} alt='Song cover'/>
            <audio key={audioUrl} ref={audioRef} controls={showControls}>
                <source src={audioUrl}/>
            </audio>
            <div>
                <button onClick={() => audioRef.current.play()}>Play</button>
                <button onClick={() => audioRef.current.pause()}>Pause</button>
            </div>
        </section>
    )
}