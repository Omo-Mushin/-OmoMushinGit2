import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB9kUsqWUNBXN2OrDff-b7QEzoRKBVu4Qw",
    authDomain: "daddygo-cfb28.firebaseapp.com",
    projectId: "daddygo-cfb28",
    storageBucket: "daddygo-cfb28.appspot.com",
    messagingSenderId: "174468462634",
    appId: "1:174468462634:web:9ba551d0b8d83369a66b53",
    measurementId: "G-Y646GCLZLB"
  };

const app = firebase.initializeApp(firebaseConfig);
export const dataBase = getAuth(app);
export default firebase;