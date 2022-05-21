import React, { useState, useEffect, useRef } from "react";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal, getBasketSize } from "../../reducer";
import CurrencyFormat from "react-currency-format";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
	const inputRef = useRef(null);
	const [{ basket }, dispatch] = useStateValue();
	const [selectAll, setSelectAll] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		let checkboxes = document.querySelectorAll("#itemCheckbox");
		setSelectAll(selectAll);
		for (var i = 0, n = checkboxes.length; i < n; i++) {
			checkboxes[i].checked = selectAll;
			if (checkboxes[i].checked == true) {
				setSelectAll(false);
			}
		}
	}, []);

	const removeFromBasket = (id) => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	function quantityCount(count, itemId) {
		document.getElementById("quantityDropdown").textContent = `Qty: ` + count;
		dispatch({
			type: "UPDATE_ITEM",
			id: itemId,
			qty: count,
		});
	}

	const quantityDropdown = (itemId) => {
		const listArray = [];
		for (let i = 1; i <= 10; i++) {
			listArray.push(
				<li
					className="dropdown-item"
					onClick={() => {
						quantityCount(i, itemId);
					}}
				>
					{i}
				</li>
			);
		}
		return listArray;
	};

	const toggleItems = () => {
		let checkboxes = document.querySelectorAll("#itemCheckbox");
		setSelectAll(!selectAll);
		for (var i = 0, n = checkboxes.length; i < n; i++) {
			checkboxes[i].checked = selectAll;
		}
	};

	function isAllItemsChecked() {
		let checkboxes = document.querySelectorAll("#itemCheckbox");
		let condition;
		for (var i = 0, n = checkboxes.length; i < n; i++) {
			if (checkboxes[i].checked == false) {
				condition = true;
				break;
			}
		}
		setSelectAll(condition);
	}

	return (
		<div className="cart">
			<div className="cart_left_container">
				<h1 style={{ fontSize: "28px" }}>Shopping Cart</h1>
				<span
					className="toggleItems"
					onClick={() => {
						toggleItems();
					}}
				>
					{selectAll ? "Select " : "Deselect "}all items
				</span>
				<hr />
				{basket.map((item) => {
					return (
						<div className="cart_item">
							<input
								type="checkbox"
								name="itemCheckbox"
								id="itemCheckbox"
								ref={inputRef}
								onChange={() => {
									isAllItemsChecked();
								}}
							/>
							<div className="item_image_container">
								<Link to={`/productdetail/` + item.id}>
									<img className="cart_item_image" src={item.img} alt="" />
								</Link>
							</div>
							<div className="details">
								<Link to={`/productdetail/` + item.id}>
									<h1 className="item_name">{item.name}</h1>
								</Link>

								<CurrencyFormat
									renderText={(value) => (
										<span className="item_price">
											<sup>₹</sup>
											{value}
											<sup>00</sup>
										</span>
									)}
									value={item.price}
									displayType={"text"}
									thousandSeparator={true}
									thousandSpacing={"2s"}
								/>
								<span className="item_status">{item.status}</span>
								<div className="gift">
									<input type="checkbox" name="giftOption" id="giftOption" />
									<label htmlFor="giftOption">
										This will be a gift <span> Learn more</span>
									</label>
								</div>
								<span className="specification">
									<b>Size name: </b>
									{item.sizeName}
								</span>
								<span className="specification">
									<b>Colour: </b>
									{item.colour}
								</span>
								<div className="lastRow">
									<div className="dropdown">
										<button
											className="btn dropdown-toggle"
											type="button"
											id="quantityDropdown"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Qty: {item.qty}
										</button>
										<ul
											className="dropdown-menu"
											aria-labelledby="dropdownMenuButton1"
										>
											{quantityDropdown(item.id)}
										</ul>
									</div>
									<span className="vertical_line">|</span>
									<div className="delete">
										<span
											onClick={() => {
												removeFromBasket(item.id);
											}}
										>
											Delete
										</span>
									</div>
									<span className="vertical_line">|</span>
									<div className="saveForLater">
										<span>Save for later</span>
									</div>
									<span className="vertical_line">|</span>
									<div className="see_more">
										<span>See more Like this</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="cart_right_container">
				<div className="cartTotal">
					<CurrencyFormat
						renderText={(value) => (
							<span>
								Subtotal ({getBasketSize(basket)} Items):
								<span className="item_price">
									<sup> ₹</sup>
									{value}
									<sup>00</sup>
								</span>
							</span>
						)}
						value={getBasketTotal(basket)}
						displayType={"text"}
						thousandSeparator={true}
						thousandSpacing={"2s"}
					/>
				</div>
				<div className="cartGift">
					<input
						type="checkbox"
						name="cartGiftCheckbox"
						id="cartGiftCheckbox"
					/>
					<label htmlFor="cartGiftCheckbox">This order contains a gift</label>
				</div>
				<button className=" btn proceedToBuy">Proceed to Buy</button>
				<div className="accordion" id="emiAccordion">
					<div className="accordion-item">
						<h2 className="accordion-header" id="emi">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#emiCollapse"
								aria-expanded="false"
								aria-controls="emiCollapse"
							>
								EMI Available
							</button>
						</h2>
						<div
							id="emiCollapse"
							className="accordion-collapse collapse"
							aria-labelledby="emi"
							data-bs-parent="#emiAccordion"
						>
							<div className="accordion-body">
								Your order qualifies for EMI with valid credit cards (not
								available on purchase of Gold, Jewelry, Gift cards and Amazon
								pay balance top up). <span> Learn more</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
