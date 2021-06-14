import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9gKKQR4R-R6GKMLl0fS39FpG2FpWbM1A",
    authDomain: "crown-db-6ebe2.firebaseapp.com",
    projectId: "crown-db-6ebe2",
    storageBucket: "crown-db-6ebe2.appspot.com",
    messagingSenderId: "638238503298",
    appId: "1:638238503298:web:a03ff3324afe987617df9b",
    measurementId: "G-5JRFDZXTHG"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;