import FadeIn from 'react-fade-in';

import jsIcon from '../assets/icons/javascript.svg';
import javaIcon from '../assets/icons/java.svg';
import angularIcon from '../assets/icons/angular.svg';
import djangoIcon from '../assets/icons/django.svg';
import expressIcon from '../assets/icons/express.svg';
import nodeIcon from '../assets/icons/nodejs.svg';
import pythonIcon from '../assets/icons/python.svg';
import reactIcon from '../assets/icons/react.svg';
import bitbucketIcon from '../assets/icons/bitbucket.svg';
import githubIcon from '../assets/icons/github.svg';
import mongoIcon from '../assets/icons/mongodb.svg';
import tsIcon from '../assets/icons/typescript.svg';
import sqliteIcon from '../assets/icons/sqlite.svg';
import firebaseIcon from '../assets/icons/firebase.svg';

import './portfolio.css';

function Card(props) {
    const title = props.title
    const tiles = props.tiles

    return (
        <>
            <h4>{title}</h4>
            <FadeIn childTag='i'>
            {tiles.map(tile => (
                <a href={tile.link} target='_blank' rel='noreferrer'>
                    <img key={tile.name} className='icon' src={tile.icon} alt={tile.name} />
                </a>
            ))}
            </FadeIn>
        </>
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
            name: 'Typescript',
            icon: tsIcon,
            link: 'https://www.typescriptlang.org/'
        },
        {
            name: 'Objectscript',
            icon: '',
            link: 'https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=GCOS_INTRO'
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
    ];
    const databases = [
        {
            name: 'MongoDB',
            icon: mongoIcon,
            link: 'https://www.mongodb.com/'
        },
        {
            name: 'InterSystems IRIS',
            icon: '',
            link: 'https://www.intersystems.com/products/intersystems-iris/'
        },
        {
            name: 'SQLite',
            icon: sqliteIcon,
            link: 'https://www.sqlite.org/index.html'
        }
    ];
    const sourceControl = [
        {
            name: 'Github',
            icon: githubIcon,
            link: 'https://www.mongodb.com/'
        },
        {
            name: 'Bitbucket',
            icon: bitbucketIcon,
            link: 'https://bitbucket.org/'
        },
        {
            name: 'Perforce',
            icon: '',
            link: 'https://www.perforce.com/'
        }
    ];
    const cloudPlatforms = [
        {
            name: 'Firebase',
            icon: firebaseIcon,
            link: 'https://firebase.google.com/'
        }
    ];

    return (
        <>
            <FadeIn className='cards' childClassName='card'>
                <Card title='Languages' tiles={languages} />
                <Card title='Frameworks' tiles={frameworks} />
                <Card title='Databases' tiles={databases} />
                <Card title='Source Control' tiles={sourceControl} />
                <Card title='Cloud Platforms' tiles={cloudPlatforms} />
            </FadeIn>
        </>
    )
}