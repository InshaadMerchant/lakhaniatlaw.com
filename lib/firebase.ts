import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAasVOjoNdZfHuVaxBzEEzMHY3rJlcnXYw",
  authDomain: "lakhani-law.firebaseapp.com",
  databaseURL: "https://lakhani-law-default-rtdb.firebaseio.com",
  projectId: "lakhani-law",
  storageBucket: "lakhani-law.firebasestorage.app",
  messagingSenderId: "831054403093",
  appId: "1:831054403093:web:883e03b2b9efe3b64ea01c",
  measurementId: "G-WWYZ6L21EE",
};

// Prevent re-initializing on hot reload in dev
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);
