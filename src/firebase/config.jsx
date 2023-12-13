
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAyBzTODzCfvinHDiaTxmLRI2sq2eGFwU",
  authDomain: "cityclothes-a0a6c.firebaseapp.com",
  projectId: "cityclothes-a0a6c",
  storageBucket: "cityclothes-a0a6c.appspot.com",
  messagingSenderId: "166114198651",
  appId: "1:166114198651:web:6b5bdd472682bdb6108ede"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);