import firebase from 'firebase';

const firebaseConfigStaging = {
  databaseURL: "https://candor-stage.firebaseio.com",
  projectId: "candor-stage"
};

const firebaseConfigProduction = {
  databaseURL: "https://candor-a5a63.firebaseio.com",
    projectId: "candor-a5a63"
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfigProduction);
const db = firebaseApp.firestore();

export default db;