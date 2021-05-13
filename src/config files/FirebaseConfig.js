import firebase from 'firebase';

const firebaseConfigStaging = {
    apiKey: "AIzaSyAv7eFr7Liibpzuh0ySf12-AOg7W0USIWM",
    authDomain: "candor-stage.firebaseapp.com",
    databaseURL: "https://candor-stage.firebaseio.com",
    projectId: "candor-stage",
    storageBucket: "candor-stage.appspot.com",
    messagingSenderId: "334034284537",
    appId: "1:334034284537:web:4a15feb23ae2e522475728",
    measurementId: "G-MT76E9PSTY"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfigStaging);
const db = firebaseApp.firestore();

export default db;