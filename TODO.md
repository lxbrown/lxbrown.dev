add (expand) section to portfolio
    add cards framework beneath top level cards
    add card for all companies, with icons. sort by category
    add card for all projects, with icons
    hide project cards
    add 'v expand' button
    show project cards on click
    auto scroll on click
    rename button to '^ collapse' on click, put below projects
    use query param to indicate project is expanded, allowing direct access via link
    add transition between states, ideally have icons float to their project

add hamburger menu for mobile
pick a new home picture?
pick a new favicon
add links in description:
    rower - picture of me rowing
    biker - picture of crash
    software - lxbrown.dev
    gamer - hovertext/popup: 'I don't have a cool picture or story here, I just like doing it'

use theme color elsewhere on the pages?
add icon
    mongoosejs
update icons?
    react
    node
    express


Fork FadeIn package, add support for FadeInImage:
    const [loaded, setLoaded] = useState(false);

    const handleLoad = (() => {
        if (!loaded) {
            console.log('loaded');
            setLoaded(true);
        }
    });

    return (
        <>
        {!loaded ? (<img src={profile} alt="Profile" className="hidden" onLoad={handleLoad()} />) :
            (<FadeIn className="home" childClassName='homeElement'>
                <img src={profile} alt="Profile" className="photo fadein" onLoad={handleLoad()} />
                <p className="description fadein">Hi, my name is Alex and I'm a software developer at <b><a className='homeLink' href='https://www.intersystems.com/' target='_blank' rel='noreferrer'>InterSystems</a></b>. I'm also a rower, (newly) biker, and (not so newly) gamer. I've been developing full-stack software applications since 2015 - from simple websites to enterprise level data pipelines. Take a look around to see some of the projects I work on and the tools I use!</p>
            </FadeIn>)}
        </>

play around with new layout that has everything on a single page:
    left third: image top, description below, contact info below that
    right two thirds: content
        experience/portfolio
        (future) about - making of this page
        (future) rowing/biking stuff




## commands
### react debugging
yarn start

### firebase debugging
npm run build
firebase emulators:start

### deploy
npm run build
firebase deploy
git push origin XXX
