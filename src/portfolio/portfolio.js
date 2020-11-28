import jsIcon from '../assets/icons/javascript.svg';
import javaIcon from '../assets/icons/java.svg';
import angularIcon from '../assets/icons/angular.svg';
import djangoIcon from '../assets/icons/django.svg';
import expressIcon from '../assets/icons/express.svg';
import nodeIcon from '../assets/icons/nodejs.svg';
import pythonIcon from '../assets/icons/python.svg';
import reactIcon from '../assets/icons/react.svg';

import './portfolio.css';

function Card(props) {
    const title = props.title
    const tiles = props.tiles

    return (
        <div>
            <h3>{title}</h3>
            {tiles.map(tile => (
                <a href={tile.link} target='_blank' rel='noreferrer'>
                    <img key={tile.name} className='icon' src={tile.icon} alt={tile.name} />
                </a>
            ))}
        </div>
    )
}

export default function Portfolio() {
    const languages = [
        {
            name: 'Javascript',
            icon: jsIcon,
            link: 'https://www.javascript.com/'
        },
        {
            name: 'Java',
            icon: javaIcon,
            link: 'https://www.java.com/'
        },
        {
            name: 'Python',
            icon: pythonIcon,
            link: 'https://www.python.org/'
        }
    ];
    const frameworks = [
        {
            name: 'Angular',
            icon: angularIcon,
            link: 'https://angular.io/'
        },
        {
            name: 'React',
            icon: reactIcon,
            link: 'https://reactjs.org/'
        },
        {
            name: 'Django',
            icon: djangoIcon,
            link: 'https://www.djangoproject.com/'
        },
        {
            name: 'Express',
            icon: expressIcon,
            link: 'https://expressjs.com/'
        },
        {
            name: 'NodeJS',
            icon: nodeIcon,
            link: 'https://nodejs.org/'
        }
    ]
    return (
        <>
            <h2>Portfolio</h2>
            <Card title='Languages' tiles={languages} />
            <Card title='Frameworks' tiles={frameworks} />
        </>
    )
}