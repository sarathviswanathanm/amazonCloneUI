import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import LockIcon from "@mui/icons-material/Lock";
import AddIcon from "@mui/icons-material/Add";
import ProductList from "../Products/RightPanel/productList";
import { Link, useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import CurrencyFormat from "react-currency-format";
import "./ProductDetail.css";

function ProductDeail() {
	const [productDetails, setProductDetails] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
		let itemFilter = ProductList.filter((item) => item.id == id);
		setProductDetails(itemFilter[0]);
	}, []);

	const [{ basket }, dispatch] = useStateValue();
	var found = false;
	let quantity = 1;
	const addToBasket = () => {
		basket.map((basketItem) => {
			if (basketItem.id == id) found = true;
		});
		if (!found) {
			dispatch({
				type: "ADD_TO_BASKET",
				item: {
					id: id,
					name: productDetails.name,
					img: productDetails.img,
					price: productDetails.price,
					sizeName: productDetails.sizeName,
					colour: productDetails.colour,
					status: productDetails.status,
					qty: quantity,
				},
			});
		}
	};
	function quantityCount(count) {
		quantity = count;
	}
	const quantityDropdown = () => {
		const listArray = [];
		for (let i = 1; i <= 10; i++) {
			listArray.push(
				<li
					className="dropdown-item"
					onClick={() => {
						quantityCount(i);
					}}
				>
					{i}
				</li>
			);
		}
		return listArray;
	};

	const [wishList, setWishList] = useState([
		"Mobiles",
		"Gadgets",
		"Appliances",
		"Clothing",
		"Footwear",
		"Books",
	]);
	const [newListName, setNewListName] = useState("");

	return (
		<div className="product_details">
			<div className="container product_container">
				<div className="product_img">
					<img src={productDetails.img} alt="" />
				</div>

				<div className="product_info">
					<h1>{productDetails.name}</h1>

					<div className="product_ratings">
						<span style={{ color: "#F7A41E" }}>
							<Rating
								name="half-rating-read"
								value={productDetails.rating ? productDetails.rating : 4}
								precision={0.5}
								readOnly
								sx={{
									fontSize: 18,
									stroke: "rgb(203,92,37)",
									strokeWidth: 0.7,
								}}
							/>
						</span>
						<span style={{ marginLeft: "3px" }}>
							{productDetails.no_of_ratings} ratings | 1000+ answered questions
						</span>
					</div>

					<hr />

					<div className="product_price_section">
						<span className="price_left">Price:</span>
						<div className="price_right">
							<CurrencyFormat
								renderText={(value) => <span className="amount">{value}</span>}
								value={productDetails.price}
								displayType={"text"}
								thousandSeparator={true}
								thousandSpacing={"2s"}
								prefix={"₹"}
							/>
							<span className="amount_type">Inclusive all taxes</span>
						</div>
					</div>

					<div className="delivery_date">
						FREE delivery by <strong>{productDetails.delivery}</strong>
					</div>

					<div className="available_EMI">
						<strong>EMI</strong> starts at ₹{productDetails.emi}. No Cost EMI
						available
					</div>

					<div className="card" style={{ width: "100%" }}>
						<ul className="list-group list-group-flush product_offers">
							<li className="list-group-item">
								<strong className="offers_hightlights">Save Extra</strong> with
								3 offers
							</li>
							<li className="list-group-item">
								<strong className="offers_hightlights">Bank Offer (2):</strong>
								Flat INR 4000 Instant Discount on HDFC Bank Credit Card
								Transactions. Minimum purchase value INR 77940 |
								<a
									href="/"
									style={{ color: "#007185" }}
									data-bs-toggle="modal"
									data-bs-target="#bankOfferModal"
								>
									See All
								</a>
							</li>
							<li className="list-group-item">
								<strong className="offers_hightlights">Exchange Offer:</strong>
								Up to ₹18,250.00 off on Exchange
							</li>
							<li className="list-group-item">
								<strong className="offers_hightlights">No Cost EMI:</strong>
								Avail No Cost EMI on select cards for orders above ₹3000
								DetailsNo Cost EMI: Avail No Cost EMI on select cards for orders
								above ₹3000
							</li>
						</ul>
					</div>
					<hr />
					<div className="about">
						<h1>About this item</h1>
						<ul>
							{productDetails.about != undefined ? (
								productDetails.about.map((item, index) => (
									<li key={index}>{item}</li>
								))
							) : (
								<span></span>
							)}
						</ul>
					</div>
					<div
						className="modal fade"
						id="bankOfferModal"
						tabIndex="-1"
						aria-labelledby="bankOfferModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
							<div className="modal-content">
								<div className="modal-header">
									<h4 className="modal-title" id="bankOfferModal">
										Bank Offer (2)
									</h4>
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div className="modal-body">
									<p>
										Flat INR 4000 Instant Discount on HDFC Bank Credit Card
										Transactions. Minimum purchase value INR 77940
									</p>
									<hr />
									<p>
										Flat INR 4000 Instant Discount on HDFC Bank Debit Card
										Transactions. Minimum purchase value INR 77940
									</p>
									<hr />
									<h4>How to avail offer</h4>
									<ol>
										<li>Select eligible card at the time of checkout</li>
										<li>No promo code required to avail the offer</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="product_add_to_cart">
					<CurrencyFormat
						renderText={(value) => (
							<span className="add_to_cart_price">
								<sup>₹</sup>
								{value}
								<sup>00</sup>
							</span>
						)}
						value={productDetails.price}
						displayType={"text"}
						thousandSeparator={true}
						thousandSpacing={"2s"}
					/>
					<div className="delivery_date">
						Free delivery: <strong>{productDetails.delivery}</strong>
					</div>
					<br />
					<span style={{ color: "green" }}>{productDetails.status}.</span>
					<span>
						Sold by{" "}
						<a href="/nowhere" className="soldBy">
							{productDetails.soldby}
						</a>{" "}
						and fulfilled by Amzon
					</span>

					<div className="quantity">
						<span className="quantitySpan">Quantity:</span>
						<div className="dropdown">
							<button
								className="btn btn-sm dropdown-toggle"
								type="button"
								id="productQuantityDropdown"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							></button>
							<ul
								className="dropdown-menu quantity_count"
								aria-labelledby="productQuantityDropdown"
							>
								{quantityDropdown()}
							</ul>
						</div>
					</div>
					<Link to="/cart">
						<button className="buttons btn_add_to_cart" onClick={addToBasket}>
							Add to Cart
						</button>
					</Link>
					<button className="buttons btn_buy_now">Buy Now</button>
					<div className="secureTransaction">
						<LockIcon
							style={{ color: "#999", marginRight: "5px" }}
							sx={{
								fontSize: 18,
							}}
						/>
						<span>Secure transaction</span>
					</div>
					<div className="giftOptions">
						<input
							type="checkbox"
							name="addToGiftOption"
							id="addToGiftOption"
						/>
						<span>Add gift options</span>
					</div>
					<hr />
					<div className="dropdown wishList">
						<button
							type="button"
							className="btn dropdown-toggle-split wishListButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							id="wishListDropdown"
						>
							Add to Wish List
						</button>
						<button
							type="button"
							className="btn dropdown-toggle wishListButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							id="wishListDropdown"
						></button>
						<ul className="dropdown-menu" aria-labelledby="wishListDropdown">
							{wishList.map((item, index) => {
								return (
									<li key={index}>
										<a className="dropdown-item" href="/nowhere">
											{item}
										</a>
									</li>
								);
							})}

							<li>
								<hr className="dropdown-divider" />
							</li>
							<li>
								<a
									className="dropdown-item create_wishList"
									href="/"
									data-bs-toggle="modal"
									data-bs-target="#createWishListModal"
								>
									<AddIcon
										style={{ color: "#565959" }}
										sx={{ stroke: "#565959", strokeWidth: "1" }}
									/>{" "}
									Create another Wish List
								</a>
							</li>
						</ul>
					</div>

					<div
						className="modal fade"
						id="createWishListModal"
						tabIndex="-1"
						aria-labelledby="createWishListModal"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
							<div className="modal-content">
								<div className="modal-header">
									<h4 className="modal-title" id="createWishListModal">
										Create a new list
									</h4>
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div className="modal-body">
									<h4>List name</h4>
									<input
										type="text"
										name="listName"
										id="listName"
										value={newListName}
										onChange={(e) => {
											setNewListName(e.target.value);
										}}
									/>
									<p>
										Use lists to save items for later. All lists are private
										unless you share them with others.
									</p>
								</div>
								<div className="modal-footer-buttons">
									<button
										type="button"
										className="btn btn_create_list_cancel"
										data-bs-dismiss="modal"
									>
										Cancel
									</button>
									<button
										type="button"
										className="btn btn_create_list_create"
										data-bs-dismiss="modal"
										onClick={(e) => {
											setWishList((prev) => {
												return [...prev, newListName];
											});
											setNewListName("");
										}}
									>
										Create List
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDeail;
