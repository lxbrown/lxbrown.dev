import { Route, Redirect, Switch } from 'react-router-dom';

import firebase from './services/firebase';

import Header from './header/header';
import Portfolio from './portfolio/portfolio';
import Contact from './contact/contact';
import Home from './home/home';


export default function App() {
  firebase.analytics().logEvent("page_view", { page_location: "lxbrown.dev", page_path: "/", page_title: "Home" });

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}
