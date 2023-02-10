import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB29ZKa72yscngAL-3edC2IrcVRaA4KhUU",
  authDomain: "herbalife71-f1fdf.firebaseapp.com",
  projectId: "herbalife71-f1fdf",
  storageBucket: "herbalife71-f1fdf.appspot.com",
  messagingSenderId: "1045928015979",
  appId: "1:1045928015979:web:4584fc51583fddaead592e",
  measurementId: "G-P94T9K76QF",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
