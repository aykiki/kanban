// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXmsVTRWy3dBeUm02-2PqaFz1_L1mcdNU',
  authDomain: 'kanban-8d3b4.firebaseapp.com',
  projectId: 'kanban-8d3b4',
  storageBucket: 'kanban-8d3b4.appspot.com',
  messagingSenderId: '813095176346',
  appId: '1:813095176346:web:f7a4aa760d117bbc91f723',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize all needed variables
export const db = getDatabase(app);
export const appAuth = getAuth();
