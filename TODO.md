## TODO
add links in description - fade in on home page or open in new window?
* rower - picture of rowing
* biker - picture of crash
* software - lxbrown.dev
* gamer - hovertext/popup: 'I don't have a picture or story here, I just enjoy it'

Add FadeInImage to react-fade-in, based on:
```javascript
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
            <p className="description fadein">...</p>
        </FadeIn>)}
    </>
```
open PR to react-fade-in

update dependency to forked branch of react-fade-in

different home picture?

play around with new layout that has everything on a single page
* left third: image top, description below, contact info below that
* right two thirds: content
    * tech
    * (future) rowing/biking
    * (future) about - making this site



add (expand) section to portfolio
* add cards framework beneath top level cards
* add card for all companies, with icons. sort by category
* add card for all projects, with icons
* hide project cards
* add 'v expand' button
* show project cards on click
* auto scroll on click
* rename button to '^ collapse' on click, put below projects
* use query param to indicate project is expanded, allowing direct access via link
* add transition between states, ideally have icons float to their project


### Useful commands
#### React debugging

```shell
yarn start
```

#### Firebase debugging

```shell
yarn build
firebase emulators:start
```
