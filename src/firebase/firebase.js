// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcTNd9jAHHSwxh_rbQlIf7uPHXDz5ucwI",
    authDomain: "travel-zone-5cab1.firebaseapp.com",
    projectId: "travel-zone-5cab1",
    storageBucket: "travel-zone-5cab1.appspot.com",
    messagingSenderId: "281686148593",
    appId: "1:281686148593:web:caf286520ea0aaecccb050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth