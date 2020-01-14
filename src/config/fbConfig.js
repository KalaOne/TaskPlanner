import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBkOnln_-iF-stGnbgkQ5LKekJ4bTtoxYQ",
    authDomain: "taskplanner-kalaone.firebaseapp.com",
    databaseURL: "https://taskplanner-kalaone.firebaseio.com",
    projectId: "taskplanner-kalaone",
    storageBucket: "taskplanner-kalaone.appspot.com",
    messagingSenderId: "175375793047",
    appId: "1:175375793047:web:1b974d451acac7357f22d2",
    measurementId: "G-X0DMP3N1B3"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;