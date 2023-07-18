import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

    const firebaseConfig = {
        apiKey: "AIzaSyAF0WIoT0r9nkVP7xV_fPXcH0l1YiFp0yM",
        authDomain: "cresco-1f27c.firebaseapp.com",
        projectId: "cresco-1f27c",
        storageBucket: "cresco-1f27c.appspot.com",
        messagingSenderId: "640869628851",
        appId: "1:640869628851:web:702bb11c00f1000cf029c6",
        measurementId: "G-CV9LJKVTZN"
      };
      
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {app,auth,db};

