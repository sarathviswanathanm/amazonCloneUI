import React, { useEffect } from "react";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import "./Products.css";

function Products() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="products_container">
			<div className="left_container">
				<LeftPanel />
			</div>
			<div className="right_container">
				<RightPanel />
			</div>
		</div>
	);
}

export default Products;
