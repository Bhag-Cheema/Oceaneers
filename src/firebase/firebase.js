import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp({
    apiKey: "AIzaSyAF4UkSf7uUOS0bVH_dQo3Qji5jQW7P8jY",
    authDomain: "oceaneers-website.firebaseapp.com",
    projectId: "oceaneers-website",
    storageBucket: "oceaneers-website.appspot.com",
    messagingSenderId: "847006668079",
    appId: "1:847006668079:web:be058275f026e678333dda",
    measurementId: "G-YDJ3Q8MWYF"
});

export default firebase;