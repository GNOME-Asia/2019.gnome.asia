import firebase from 'firebase/app';
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyCduH2gBRER1zY6Ne5zbedK_tuUQOmrE44",
    authDomain: "gnomeasia2019.firebaseapp.com",
    databaseURL: "https://gnomeasia2019.firebaseio.com",
    projectId: "gnomeasia2019",
    storageBucket: "gnomeasia2019.appspot.com",
    messagingSenderId: "1038495029377",
    appId: "1:1038495029377:web:9e7d562f0783fb84"
  };


export default firebase.initializeApp(firebaseConfig);