import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDxhv0DJQSHgsId08iNA7PtbQhYvjMc43Y",
    authDomain: "messanger-984b7.firebaseapp.com",
    projectId: "messanger-984b7",
    storageBucket: "messanger-984b7.appspot.com",
    messagingSenderId: "716895915407",
    appId: "1:716895915407:web:bb1305e624cc707a2f8ffa",
    measurementId: "G-5GPDBK339B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // AUTH
  const auth = firebase.auth();
  const db = firebase.database();

  export { auth, db};