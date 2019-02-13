import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA90lf3l8TnCiMZ1_EmABfjyLqunHfsTM8",
  authDomain: "react-portfolio-e1afd.firebaseapp.com",
  databaseURL: "https://react-portfolio-e1afd.firebaseio.com",
  projectId: "react-portfolio-e1afd",
  storageBucket: "react-portfolio-e1afd.appspot.com",
  messagingSenderId: "24826300921"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;