// firebase-config.jsx
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjt5grqnDWJLcWcZDsnEp7VBYJw_i5fKY",
    authDomain: "olx-clone-5b5b6.firebaseapp.com",
    projectId: "olx-clone-5b5b6",
    storageBucket: "olx-clone-5b5b6.appspot.com",
    messagingSenderId: "711391028704",
    appId: "1:711391028704:web:bce50143f0b6048400f785",
    measurementId: "G-SZSWW7VFJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const firestore = getFirestore(app);

export { firestore };