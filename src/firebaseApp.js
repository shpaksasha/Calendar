import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'   //'firebase/app'
import {getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js'  //'firebase/auth'
// import {getFirestore} from 'firebase/firestore'


const firebaseApp = initializeApp( {
    apiKey: 'AIzaSyCDsaL6CMi_mvZS6UeOFJm9eLY7WFHglRw',
    authDomain: 'my-calendar-ab740.firebaseapp.com',
    databaseURL: 'https://my-calendar-ab740.firebaseio.com',
    projectId: 'my-calendar-ab740',
    storageBucket: 'my-calendar-ab740.appspot.com',
    messagingSenderId: '913000690004',
    appId: '1:913000690004:web:898afaef54aeba627698c1',
    measurementId: 'G-0699QC0JJE'
});

const auth = getAuth(firebaseApp);

onAuthStateChanged (auth, user => {
    if (user != null) {
        console.log('logged in')
    }else {
        console.log('No user')
    }
})

// const db = getFirestore(firebaseApp);
