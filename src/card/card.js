import FadeIn from 'react-fade-in';

import './card.css';

export default function Card(props) {
    const title = props.title
    const tiles = props.tiles

    return (
        <>
            <h4>{title}</h4>
            <FadeIn childTag='i'>
                {tiles.map(tile => (
                    <a href={tile.link} target='_blank' rel='noreferrer' className='tile'>
                        <img key={tile.name} className='icon' src={tile.icon} alt={tile.name} />
                        <span className='tooltipText'>{tile.name}</span>
                    </a>
                ))}
            </FadeIn>
        </>
    )
}