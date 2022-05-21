import React from "react";
import ShowProducts from "./ShowProducts/ShowProducts";
import "./RightPanel.css";
import ProductList from "./productList";

function RightPanel() {
	return (
		<div className="rightPanel">
			<div className="rightPanel_container">
				<span>RESULTS</span>
				<div className="product-list">
					{ProductList.map((product, index) => {
						return (
							<ShowProducts
								id={product.id}
								key={product.id}
								name={product.name}
								img={product.img}
								rating={product.rating}
								no_of_ratings={product.no_of_ratings}
								price={product.price}
								delivery={product.delivery}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default RightPanel;
