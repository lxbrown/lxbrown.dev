import { Route, Navigate, Routes } from 'react-router-dom';

import firebase from './services/firebase';
import { getAnalytics } from "firebase/analytics";

import Home from "./home/home";
import Footer from "./footer/footer";
import './App.css';


export default function App() {
  getAnalytics(firebase);
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}
