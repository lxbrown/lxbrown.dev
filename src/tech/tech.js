import FadeIn from 'react-fade-in';

import Card from '../card/card';

import {
    javascript, typescript, objectscript, python, java, angular,
    react, nodejs, django, express, mongodb, iris, sqlite, github,
    perforce, bitbucket, firebase
} from '../card/tiles';

import './tech.css';

export default function Tech() {
    const languages = [javascript, typescript, objectscript, python, java];
    const frameworks = [angular, react, nodejs, django, express];
    const databases = [mongodb, iris, sqlite];
    const sourceControl = [github, perforce, bitbucket];
    const cloudPlatforms = [firebase];

    // const intersystems = [objectscript, typescript, java, python, angular, django, nodejs, iris, sqlite, perforce, bitbucket];
    // const dcs = [java, /*C++ (arduino), C# */];
    // const uofm = [/*C++, */java, github];
    // const lxbrown_dev = [javascript, react, github, firebase];
    // const movie_app = [javascript, react, nodejs, express, mongodb, github];

    return (
        <>
            <p>Here's some of the technology I use</p>
            <FadeIn className='cards' childClassName='card'>
                <Card title='Languages' tiles={languages} />
                <Card title='Frameworks' tiles={frameworks} />
                <Card title='Databases' tiles={databases} />
                <Card title='Source Control' tiles={sourceControl} />
                <Card title='Cloud Platforms' tiles={cloudPlatforms} />
            </FadeIn>

            {/* <FadeIn className='cards' childClassName='card'>
                <Card title='InterSystems' tiles={intersystems} />
                <Card title='DCS Corp' tiles={dcs} />
                <Card title='University of Michigan' tiles={uofm} />
                <Card title='lxbrown.dev' tiles={lxbrown_dev} />
                <Card title='Movie Dashboard' tiles={movie_app} />
            </FadeIn> */}
        </>
    )
}