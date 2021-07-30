import './SongListItem.css';

export function SongListItem({song: {title, artist, audioUrl, coverUrl}, isCurrent, onSelect}) {

    const handleClick = () => onSelect({title, artist, audioUrl, coverUrl});
    return <li className={`SongListItem ${isCurrent ? 'selected' : ''}`} onClick={handleClick}>
        {title} by {artist}
    </li>
}