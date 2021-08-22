import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCDsaL6CMi_mvZS6UeOFJm9eLY7WFHglRw',
    authDomain: 'my-calendar-ab740.firebaseapp.com',
    databaseURL: 'https://my-calendar-ab740.firebaseio.com',
    projectId: 'my-calendar-ab740',
    storageBucket: 'my-calendar-ab740.appspot.com',
    messagingSenderId: '913000690004',
    appId: '1:913000690004:web:898afaef54aeba627698c1',
    measurementId: 'G-0699QC0JJE'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db};