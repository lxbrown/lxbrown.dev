import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDn0na6VcXmXqEwqbmo9-ulogmNvKsc40U",
  appId: "1:757804168901:web:f959da5e5c9ddaac6ae2ac",
  authDomain: "lxbrown-4ec67.firebaseapp.com",
  databaseURL: "https://lxbrown-4ec67.firebaseio.com",
  measurementId: "G-8FR2KLJ10Y",
  messagingSenderId: "757804168901",
  projectId: "lxbrown-4ec67",
  storageBucket: "lxbrown-4ec67.appspot.com"
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;