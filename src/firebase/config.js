import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOvjSUzbSQwo-Do3FEcKCSTVskQLIVea4",
    authDomain: "my-gallery-59988.firebaseapp.com",
    projectId: "my-gallery-59988",
    storageBucket: "my-gallery-59988.appspot.com",
    messagingSenderId: "380980059051",
    appId: "1:380980059051:web:e1b59bb34aa3b999c790ee"
  };
  
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore }