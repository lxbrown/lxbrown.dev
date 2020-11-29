import FadeIn from 'react-fade-in';

import emailIcon from '../assets/icons/email.svg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

import './contact.css';

export default function Contact() {
    return (
        <>
        <p>Feel free to reach out to me on any of these platforms!</p>
        <FadeIn className='contact' childClassName='contactRow'>
            <>
                <img className='contactIcon' src={linkedinIcon} alt='linkedin' />
                <a className='contactLink' href='https://www.linkedin.com/in/alexander-brown-3b74a8126/' target='_blank' rel='noreferrer'>Alex Brown</a>
            </>
            <>
                <img className='contactIcon' src={githubIcon} alt='github' />
                <a className='contactLink' href='https://github.com/lxbrown' target='_blank' rel='noreferrer'>lxbrown</a>
            </>
            <>
                <img className='contactIcon' src={emailIcon} alt='email' />
                <a className='contactLink' href='mailto:lxbrown13@gmail.com' target='_blank' rel='noreferrer'>lxbrown13@gmail.com</a>
            </>
        </FadeIn>
        </>
    )
}