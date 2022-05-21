import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyD6jEgQOGXJRAJAW3bCgCi1JYAqJz1ghcU",
	authDomain: "clone-713c3.firebaseapp.com",
	projectId: "clone-713c3",
	storageBucket: "clone-713c3.appspot.com",
	messagingSenderId: "312539488472",
	appId: "1:312539488472:web:302a6994c7a8b341edb7ad",
	measurementId: "G-LCFQCNQJ78",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
