import React from "react";
import "./AdvertisementFour.css";

function AdvertisementFour(props) {
	return (
		<div className="AddFourContainer">
			<div className="Add_Header">
				<h4>{props.mainTitle}</h4>
			</div>
			<div className="Add_body">
				<div className="itemOne">
					<img src={props.img1Src} alt="" />
					<span>{props.img1caption}</span>
				</div>
				<div className="itemOne">
					<img src={props.img2Src} alt="" />
					<span>{props.img2caption}</span>
				</div>
				<div className="itemOne">
					<img src={props.img3Src} alt="" />
					<span>{props.img3caption}</span>
				</div>
				<div className="itemOne">
					<img src={props.img4Src} alt="" />
					<span>{props.img4caption}</span>
				</div>
			</div>
			<div className="Add_footer">
				<a href="/">see all offers</a>
			</div>
		</div>
	);
}

export default AdvertisementFour;
