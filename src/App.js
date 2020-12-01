import { Route, Redirect, Switch } from 'react-router-dom';

import firebase from './services/firebase';

import Header from './header/header';
import Portfolio from './portfolio/portfolio';
import Contact from './contact/contact';
import Home from './home/home';

import './App.css';


export default function App() {
  firebase.analytics();

  return (
    <>
      <Header />

      <div className="main">
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
      </div>
    </>
  );
}
