import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnbya11_3lOnli0J30tbvbGZ647K_VF8w",
  authDomain: "alisilva-25802.firebaseapp.com",
  projectId: "alisilva-25802",
  storageBucket: "alisilva-25802.firebasestorage.app",
  messagingSenderId: "328240832408",
  appId: "1:328240832408:web:2377773f472957ed2f55ed"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
