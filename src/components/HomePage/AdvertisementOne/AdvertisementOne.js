import React from "react";
import "./AdvertisementOne.css";

function AdvertisementOne(props) {
	return (
		<div className="AddOneContainer">
			<div className="Add_Header">
				<h4>{props.title}</h4>
			</div>
			<div className="Add_body">
				<img src={props.image} alt="" />
			</div>
			<div className="Add_footer">
				<a href="#">see all offers</a>
			</div>
		</div>
	);
}

export default AdvertisementOne;
