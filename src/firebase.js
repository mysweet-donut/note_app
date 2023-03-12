import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDa1X5-mSEEqucf38yFaQGE7mW41R8ZQrk',
    authDomain: 'donut-note.firebaseapp.com',
    projectId: 'donut-note',
    storageBucket: 'donut-note.appspot.com',
    messagingSenderId: '161003190277',
    appId: '1:161003190277:web:741260e3a880001a81046c',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
