import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC-holhQ7Zp_wgQbdzXCqu0NE594ZLCLcU",
    authDomain: "nuxtprojectgpt.firebaseapp.com",
    projectId: "nuxtprojectgpt",
    storageBucket: "nuxtprojectgpt.appspot.com",
    messagingSenderId: "288128658516",
    appId: "1:288128658516:web:31ea54d453b4a89ac391c1",
    measurementId: "G-PYNN2QHFQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)

