import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "./ShowProducts.css";

function ShowProducts(props) {
	return (
		<div className="card">
			<div className="image_container">
				<Link to={`/productdetail/` + props.id}>
					<img src={props.img} alt="product" className="card-img-top" />
				</Link>
			</div>

			<div className="card-body">
				<div className="product_name">
					<Link to={`/productdetail/` + props.id}>
						<span className="card-title">{props.name}</span>
					</Link>
				</div>
				<div className="product_rating">
					<span style={{ color: "#F7A41E" }}>
						<Rating
							name="half-rating-read"
							defaultValue={props.rating}
							precision={0.5}
							readOnly
							sx={{
								fontSize: 18,
								stroke: "rgb(203,92,37)",
								strokeWidth: 0.7,
							}}
						/>
					</span>
					<span className="card-text" style={{ marginLeft: "3px" }}>
						{" "}
						{props.no_of_ratings}
					</span>
				</div>
				<div className="product_price">
					<sup className="rupee">₹</sup>
					<CurrencyFormat
						renderText={(value) => <span className="card-text">{value}</span>}
						value={props.price}
						displayType={"text"}
						thousandSeparator={true}
						thousandSpacing={"2s"}
					/>
				</div>
				<div>
					<span className="delivery_info">
						Free delivery by <strong>{props.delivery}</strong>
					</span>
				</div>
			</div>
		</div>
	);
}

export default ShowProducts;
