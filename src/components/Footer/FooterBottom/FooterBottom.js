import React from "react";
import "./FooterBottom.css";

function FooterBottom() {
	return (
		<div className="footerBottom">
			<div className="container footerBottom_container">
				<div className="navFooterDescText">
					<span className="lineTwo">
						<b className="lineOne">AbeBoks</b>
						<br />
						Books, art <br />& Collectibles
					</span>
				</div>

				<div className="navFooterDescText">
					<span className="lineTwo">
						<b className="lineOne">Amazon Web Services</b>
						<br />
						Scalable Cloud <br />
						Computing Services
					</span>
				</div>

				<div className="navFooterDescText">
					<span className="lineTwo">
						<b className="lineOne">Audible</b>
						<br />
						Download
						<br />
						Audio Books
					</span>
				</div>

				<div className="navFooterDescText">
					<span className="lineTwo">
						<b className="lineOne">DPReview</b>
						<br />
						Digital
						<br />
						Photography
					</span>
				</div>

				<div className="navFooterDescText">
					<span className="lineTwo">
						<b className="lineOne">IMDb</b>
						<br />
						Movies, TV
						<br />& Celebrities
					</span>
				</div>

				<div className="navFooterDescText">
					<span className="lineTwo">
						<b className="lineOne">Shopbop</b>
						<br />
						Designer
						<br />
						Fashion Brands
					</span>
				</div>

				<div className="navFooterDescText">
					<span className="lineTwo">
						<b className="lineOne">Amazon Business</b>
						<br />
						Everything For
						<br />
						Your Business
					</span>
				</div>

				<div className="navFooterDescText">
					<span className="lineTwo">
						<b className="lineOne">Prime Now</b>
						<br />
						2-Hour Delivery
						<br />
						on Everyday Items
					</span>
				</div>

				<div className="navFooterDescText">
					<span className="lineTwo">
						<b className="lineOne">Amazon Prime Music</b>
						<br />
						90 million songs, ad-free
						<br />
						Over 15 million podcast episodes
					</span>
				</div>
			</div>
			<div className="container footerLastRow">
				<a href="/nowhere">Conditions of Use & Sale</a>
				<a href="/nowhere">Privacy Notice</a>
				<a href="/nowhere">Interest-Based Ads</a>
				<span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
			</div>
		</div>
	);
}

export default FooterBottom;
