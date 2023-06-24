import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB82EArYe6I16m04s-zMFeHGCeP3jTQrpw",
  authDomain: "portfolio-568ce.firebaseapp.com",
  projectId: "portfolio-568ce",
  storageBucket: "portfolio-568ce.appspot.com",
  messagingSenderId: "467024833894",
  appId: "1:467024833894:web:9dcd6b7a8fc970d6176ca7",
  measurementId: "G-GJF2KY34V6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);