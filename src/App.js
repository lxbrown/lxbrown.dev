import { Route, Navigate, Routes } from 'react-router-dom';

import firebase from './services/firebase';
import { getAnalytics } from "firebase/analytics";

import Header from './header/header';
import Tech from './tech/tech';
import Contact from './contact/contact';
import Home from './home/home';

import './App.css';


export default function App() {
  getAnalytics(firebase);
  return (
    <>
      <Header />

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tech" element={<Tech />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </div>
    </>
  );
}
