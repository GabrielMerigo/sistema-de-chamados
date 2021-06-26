import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBvFIBa0CeM9TfnBlPeU8XsNvzth5VnKFw",
  authDomain: "sistema-de-chamados-5cc59.firebaseapp.com",
  projectId: "sistema-de-chamados-5cc59",
  storageBucket: "sistema-de-chamados-5cc59.appspot.com",
  messagingSenderId: "983065505508",
  appId: "1:983065505508:web:7f6fe4682f90665a7606f1",
  measurementId: "G-3R6ZX7XJXG"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase