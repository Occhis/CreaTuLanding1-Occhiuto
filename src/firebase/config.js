import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tus credenciales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUSWsILwXiKkUDlCFNUrn1ZAc_WsJDKF0",
  authDomain: "landing-react-81140.firebaseapp.com",
  projectId: "landing-react-81140",
  storageBucket: "landing-react-81140.firebasestorage.app",
  messagingSenderId: "1045854318263",
  appId: "1:1045854318263:web:44d751375217fc280e6732"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);