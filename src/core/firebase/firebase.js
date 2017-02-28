var Config = {
    apiKey: "AIzaSyDPGT0CEZGEAAG3Ls1hjIYJZ8iFxM2vcdU",
    authDomain: "todos-redux-cc57f.firebaseapp.com",
    databaseURL: "https://todos-redux-cc57f.firebaseio.com",
    storageBucket: "todos-redux-cc57f.appspot.com",
    messagingSenderId: "877342548508"
  };
  

export const firebaseApp = firebase.initializeApp(Config);
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();
 