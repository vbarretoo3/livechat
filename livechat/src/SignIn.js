import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STOREAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  }

export default function SignIn() {
    
firebase.initializeApp({firebaseConfig})
    
    const auth = firebase.auth()

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider.credential();
        auth.signInWithPopup(provider)
    }

    return (
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    )
  }
