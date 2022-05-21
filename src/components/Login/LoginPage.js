import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [user, setUser] = useState()

	const signIn = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			if (auth) {
				navigate("/");
			}
		} catch (error) {
			alert(error.message);
		}
	};
	const register = async (e) => {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			alert("User Registered. Login Now!");
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="amazon_logo"
					src="https://ik.imagekit.io/5yc2yhl2a/images/amazon-logo-black_-yreQd1lI.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1651865474929"
					alt=""
				/>
			</Link>
			<div className="login_container">
				<h1>Sign-In</h1>
				<h5>Email</h5>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<h5>Password</h5>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button type="submit" className="login_signInButton" onClick={signIn}>
					Sign In
				</button>
				<p>
					By continuing, you agree to Amazon's Conditions of Use and Privacy
					Notice.
				</p>
				<button
					type="submit"
					className="login_registerButton"
					onClick={register}
				>
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default LoginPage;
