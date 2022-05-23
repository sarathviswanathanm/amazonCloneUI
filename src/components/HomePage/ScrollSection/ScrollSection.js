import React from "react";
import "./ScrollSection.css";
import Products from "./Productlist";

function ScrollSection() {
	return (
		<div className="scrollSectionContainer">
			<div className="scrollSection_Header">
				<h4>Blockbuster deals</h4>
				<a href="/">see all offers</a>
			</div>
			<div className="scrollSection_Body">
				{Products.map((product, index) => {
					return (
						<div className="scrollSection_Body_Item" key={index}>
							<img src={product.img} alt="product" />
							<span>{product.price}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ScrollSection;
