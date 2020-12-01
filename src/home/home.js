import FadeIn from 'react-fade-in';

import profile from '../assets/images/alex.jpg';

import './home.css';

export default function Home() {
    return (
        <FadeIn className="home" childClassName='homeElement'>
            <img src={profile} alt="Profile" className="photo fadein"/>
            <p className="description fadein">Hi, my name is Alex and I'm a software developer at <b><a className='homeLink' href='https://www.intersystems.com/' target='_blank' rel='noreferrer'>InterSystems</a></b>. I'm also a rower, (newly) biker, and (not so newly) gamer. I've been developing full-stack software applications since 2015 - from simple websites to an enterprise level data pipelines. Take a look around to see some of the projects I work on and the tools I use!</p>
        </FadeIn>
    )
}