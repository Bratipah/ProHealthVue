// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClzqSyAdqctUzbpxfHE72q88OkrFzZY0Y",
  authDomain: "prohealth-c3b7a.firebaseapp.com",
  projectId: "prohealth-c3b7a",
  storageBucket: "prohealth-c3b7a.appspot.com",
  messagingSenderId: "294788356083",
  appId: "1:294788356083:web:9e66fe73b8437ac93b2486",
  measurementId: "G-XQ2Y1LLY64"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth }

