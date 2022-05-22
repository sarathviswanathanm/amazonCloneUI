import React, { useState, useEffect } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { useStateValue } from "../../StateProvider";
import { getBasketSize } from "../../reducer";
import "./Navigation.css";

function NavBar() {
	const [user, setUser] = useState({});
	const [{ basket }, dispatch] = useStateValue();

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const handleAuthentication = async () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="navbar">
			{/* Logo */}
			<Link to="/">
				<img
					className="navbar__logo"
					src="https://ik.imagekit.io/5yc2yhl2a/images/logo_vWFy08Pr2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651472771870"
					alt="logo"
				/>
			</Link>

			{/* location */}
			<div className="navbar__locator">
				<FmdGoodOutlinedIcon className="navbar__locatorIcon" />
				<div className="navbar__location">
					<div className="navbar__locationLineOne">
						<span>Hello</span>
					</div>
					<div className="navbar__locationLineTwo">Select your address</div>
				</div>
			</div>

			{/* Search */}
			<div className="navbar__search">
				<select className="navbar__searchDropdown">
					<option value="All">All</option>
					<option value="Alexa">Alexa</option>
					<option value="Appliances">Appliances</option>
					<option value="Books">Books</option>
					<option value="Baby">Baby</option>
					<option value="Clothing">Clothing</option>
					<option value="Electrocics">Electrocics</option>
				</select>
				<input type="text" className="navbar__SearchInput" />
				<div className="navbar__searchIconContainer">
					<SearchOutlinedIcon />
				</div>
			</div>

			{/* Navigation options */}
			<div className="navbar__options">
				<Link to={!user && "/login"} className="signInDiv">
					<div className="navbar__option" onClick={handleAuthentication}>
						<span className="navbar__optionLineOne">
							Hello {!user ? "Guest" : user?.email}
						</span>
						<span className="navbar__optionLineTwo">
							Sign {user ? "Out" : "In"}
						</span>
					</div>
				</Link>
				<div className="navbar__option">
					<span className="navbar__optionLineOne">Returns</span>
					<span className="navbar__optionLineTwo">&Orders</span>
				</div>
				<Link to="/cart">
					<img
						className="navbar__cartIcon"
						src="https://ik.imagekit.io/5yc2yhl2a/images/cart_-PDGJbi0e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651517990855"
						alt=""
					/>
				</Link>
				<Link to="/cart">
					<div className="navbar__option navbar__cart">
						<span className="navbar__optionLineOne navbar__cartCount">
							{getBasketSize(basket)}
						</span>
						<span className="navbar__optionLineTwo">Cart</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
export default NavBar;
