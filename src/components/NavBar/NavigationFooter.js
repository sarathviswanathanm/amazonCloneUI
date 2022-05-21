import React from "react";
import { Link } from "react-router-dom";
import "./NavigationFooter.css";

function NavigationFooter() {
	return (
		<div>
			<div className="navbar__footer">
				<div className="navbar__footer_options">
					<div className="navbar__footer_text">Best Sellers</div>
					<Link to="/products">
						<div className="navbar__footer_text">Mobiles</div>
					</Link>
					<div className="navbar__footer_text">Amazon Pay</div>
					<div className="navbar__footer_text">Fashion</div>
					<div className="navbar__footer_text">Electronics</div>
					<div className="navbar__footer_text">Prime</div>
					<div className="navbar__footer_text">New Releases</div>
					<div className="navbar__footer_text">Customer Service</div>
					<div className="navbar__footer_text">Computers</div>
					<div className="navbar__footer_text">Home & Kitchen</div>
				</div>
				<div className="navbar__footer_image_container">
					<img
						className="navbar__footer_image"
						src="https://ik.imagekit.io/5yc2yhl2a/images/MayARTSWM_400x39_1_day_to_go._CB622669875__RWg52OWcE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651602335051"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default NavigationFooter;
