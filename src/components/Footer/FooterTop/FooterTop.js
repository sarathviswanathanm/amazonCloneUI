import React from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import "./FooterTop.css";

function FooterTop() {
	const languages = [
		"Hindi - Hi",
		"Tamil - TA",
		"Telugu - TE",
		"Kannada - KA",
		"Malayalam - ML",
		"Bangali - BN",
		"Marathi - MR",
	];
	const countries = [
		"Australia",
		"Brazil",
		"Canada",
		"China",
		"France",
		"Germany",
		"Italy",
		"Japan",
		"Mexico",
		"Netherlands",
		"Poland",
		"Singapore",
		"Spain",
		"Turkey",
		"United Arab Emirates",
		"United Kingdom",
		"United States",
	];

	const navItems = [
		{
			title: "Get to Know Us",
			items: [
				"About Us",
				"Careers",
				"Press Releases",
				"Amazon Cares",
				"Gift a Smile",
				"Amazon Science",
			],
		},
		{
			title: "Connect with Us",
			items: ["Facebook", "Twitter", "Instagram"],
		},
		{
			title: "Make Money with Us",
			items: [
				"Sell on Amazon",
				"Sell under Amazon Accelerator",
				"Amazon Global Selling",
				"Become an Affiliate",
				"Fulfilment by Amazon",
				"Advertise Your Products",
				"Amazon Pay on Merchants",
			],
		},
		{
			title: "Let Us Help You",
			items: [
				"COVID-19 and Amazon",
				"Your Account",
				"Returns Centre",
				"100% Purchase Protection",
				"Amazon App Download",
				"Amazon Assistant Download",
				"Help",
			],
		},
	];

	return (
		<div className="footerTop">
			<div
				className="backToTopButton"
				onClick={() => {
					document.body.scrollTop = 0;
					document.documentElement.scrollTop = 0;
				}}
			>
				Back to top
			</div>
			<div className="container footerTop_container">
				{navItems.map((column, index) => {
					return (
						<div className="navFooterTopcolumn" key={index}>
							<ul>
								<li className="listHead">{column.title}</li>
								{column.items.map((item, ind) => {
									return (
										<li className="listItem" key={ind}>
											<a href="/nowhere">{item}</a>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
			<hr />
			<div className="logo_language">
				<Link to="/">
					<img
						className="footerTop__logo"
						src="https://ik.imagekit.io/5yc2yhl2a/images/logo_vWFy08Pr2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651472771870"
						alt="logo"
					/>
				</Link>

				<div className="dropdown">
					<button
						className="btn dropdown-toggle"
						type="button"
						id="languageDropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<LanguageIcon sx={{ fontSize: 16, color: "#fff" }} /> English
					</button>
					<ul className="dropdown-menu" aria-labelledby="languageDropdown">
						<li>
							<a className="dropdown-item" href="/nowhere">
								<input type="radio" name="" id="" defaultChecked={true} />
								{"  "}English - EN
							</a>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						{languages.map((language, index) => {
							return (
								<form action="/" key={index}>
									<li className="languageItem" key={index}>
										<a href="/nowhere" className="dropdown-item">
											<input type="radio" name="req_language" id={language} />
											{"  "}
											<label htmlFor={language}>{language}</label>
										</a>
									</li>
								</form>
							);
						})}
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a
								className="dropdown-item"
								href="/nowhere"
								style={{ background: "none", cursor: "default" }}
							>
								You are shopping on Amazon.in
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="container regionSection">
				<div className="countries">
					{countries.map((country, index) => {
						return (
							<a href="/nowhere" key={index}>
								{country}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default FooterTop;
