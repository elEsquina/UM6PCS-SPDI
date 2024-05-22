import  firebase  from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy7SyrZCjEbEAoeJcKmY9lHlBIR2aIYkU",
  authDomain: "spd1testjobs.firebaseapp.com",
  projectId: "spd1testjobs",
  storageBucket: "spd1testjobs.appspot.com",
  messagingSenderId: "73754400890",
  appId: "1:73754400890:web:184d9d42a7f7131987c3c3",
  measurementId: "G-PGTNZL5P35"
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
