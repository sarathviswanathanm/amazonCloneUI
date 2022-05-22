import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDzpIWqsHPFT33EUfsXI3lx_g95uctVMnI",
	authDomain: "clone-174b0.firebaseapp.com",
	projectId: "clone-174b0",
	storageBucket: "clone-174b0.appspot.com",
	messagingSenderId: "72683113216",
	appId: "1:72683113216:web:37dfd1d1c914c0e95841e5",
	measurementId: "G-65F812G8J4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
