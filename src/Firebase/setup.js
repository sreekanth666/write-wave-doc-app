// Import the functions needed from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVea8_PjKPguG-9csWx1FVM4umSlMWC58",
    authDomain: "write-wave-7c991.firebaseapp.com",
    projectId: "write-wave-7c991",
    storageBucket: "write-wave-7c991.appspot.com",
    messagingSenderId: "125513459373",
    appId: "1:125513459373:web:ce731dce94c504eeca0824",
    measurementId: "G-7KFMXC6CEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
// const analytics = getAnalytics(app);