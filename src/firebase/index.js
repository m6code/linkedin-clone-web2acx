import {initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Environmental variables
const { VITE_API_KEY,
    VITE_AUTH_DOMAIN,
    VITE_PROJECT_ID,
    VITE_STORAGE_BUCKET,
    VITE_MSG_SENDER_ID,
    VITE_APP_ID,
    VITE_MSMT_ID } = import.meta.env;

//
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: VITE_API_KEY,
    authDomain: VITE_AUTH_DOMAIN,
    projectId: VITE_PROJECT_ID,
    storageBucket: VITE_STORAGE_BUCKET,
    messagingSenderId: VITE_MSG_SENDER_ID,
    appId: VITE_APP_ID,
    measurementId: VITE_MSMT_ID
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage };
export default db;
 // export  default  app;