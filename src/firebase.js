import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbAMq7_N7hz_9QTByioHDttKHq6LQjexI",
    authDomain: "vivacity-candles-and-bathsalts.firebaseapp.com",
    projectId: "vivacity-candles-and-bathsalts",
    storageBucket: "vivacity-candles-and-bathsalts.appspot.com",
    messagingSenderId: "325745622083",
    appId: "1:325745622083:web:59e8eeed998ad0e7bbe8f6",
    measurementId: "G-E2D2TFKJ5D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

