import React, { useEffect } from "react";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";
import ScrollSection from "./ScrollSection/ScrollSection";
import "./MainPage.css";

function MainPage() {
	// alert(
	// 	"This is a demo. Products are available only in the Mobiles section. Please click on MOBILES in top menu to see the products."
	// );
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="mainPage">
			<div className="mainPage__container">
				<div
					id="carouselControls"
					className="carousel slide mainCarousel"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100 mainPage__BackgroundImage"
								src="https://ik.imagekit.io/5yc2yhl2a/images/bigimage1_VbQegbqmbR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651472767335"
								alt=""
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100 mainPage__BackgroundImage"
								src="https://ik.imagekit.io/5yc2yhl2a/images/bigimage2_KWY0npthq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651472767649"
								alt=""
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100 mainPage__BackgroundImage"
								src="https://ik.imagekit.io/5yc2yhl2a/images/bigimage3_rVhM6yutX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651472767947"
								alt=""
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100 mainPage__BackgroundImage"
								src="https://ik.imagekit.io/5yc2yhl2a/images/bigimage4_3qAqvxcya.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651472768183"
								alt=""
							/>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselControls"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon prev-icon2"
							aria-hidden="true"
						></span>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>

						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselControls"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span
							className="carousel-control-next-icon next-icon2"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="mainPage__row">
					<AdvertisementOne
						title="Blockbuster deals"
						image="https://ik.imagekit.io/5yc2yhl2a/images/416npwZlh7L._AC_SY460__0-ZjUevq0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651945398670"
					/>

					<AdvertisementFour
						mainTitle="Up to 70% off | Styles for Men"
						img1Src="https://ik.imagekit.io/5yc2yhl2a/images/box4_1_GLUWT5zCt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651472777316"
						img1caption="Clothing"
						img2Src="https://ik.imagekit.io/5yc2yhl2a/images/box4_2_xmKWTo4p4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651472776409"
						img2caption="Footwear"
						img3Src="https://ik.imagekit.io/5yc2yhl2a/images/box4_3_yk59KIHVHd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651472775958"
						img3caption="Watches"
						img4Src="https://ik.imagekit.io/5yc2yhl2a/images/box4_4_rjPJoRTZl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651472774092"
						img4caption="Bags & Luggage"
					/>
					<AdvertisementFour
						mainTitle="Top deals with Alexa & Games for you"
						img1Src="https://ik.imagekit.io/5yc2yhl2a/images/Desktop2Xweel_PCQC._SY232_CB622583483__v7UY_-GXk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948116794"
						img1caption="Spin and win"
						img2Src="https://ik.imagekit.io/5yc2yhl2a/images/Desktop2X_BrowniebundlePCQC._SY232_CB622583483__mO8IHg1Ph.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948116070"
						img2caption="Echo Dot + Smart bulb"
						img3Src="https://ik.imagekit.io/5yc2yhl2a/images/Desktop2X_Range_PCQC._SY232_CB622583483__2S2UUmYUx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948116130"
						img3caption="Alexa devices & More"
						img4Src="https://ik.imagekit.io/5yc2yhl2a/images/Desktop2XsheldonPCQC._SY232_CB622583483__RQZVWwgKd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948116340"
						img4caption="Fire TV Stick Lite"
					/>
					<AdvertisementOne
						title="Up to 50% off | TVs & appliances
"
						image="https://ik.imagekit.io/5yc2yhl2a/images/LA_Desktop_CatCard_2X._SY608_CB620762760__q1YEhqUDA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651945265472"
					/>
				</div>
				<div className="mainPage__row">
					<AdvertisementFour
						mainTitle="Up to 80% off | Kindle eBooks"
						img1Src="https://ik.imagekit.io/5yc2yhl2a/images/Desktop_Gateway_HMB_Quad_Card_372x232-1._SY232_CB622338543__6z2F7BPrG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948700517"
						img1caption="Health, Mind & Body"
						img2Src="https://ik.imagekit.io/5yc2yhl2a/images/Desktop_Gateway_BM_Quad_Card_372x232-1._SY232_CB622338543__EmMfzWbVt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948699886"
						img2caption="Biographies & Memoirs"
						img3Src="https://ik.imagekit.io/5yc2yhl2a/images/Desktop_Gateway_BI_Quad_Card_372x232-1._SY232_CB622338543__K_3Rlw9io.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948699818"
						img3caption="Business & investing"
						img4Src="https://ik.imagekit.io/5yc2yhl2a/images/Desktop_Gateway_SPP_Quad_Card_372x232-1._SY232_CB622338543__yJoNXebnP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948700578"
						img4caption="Society & Politics"
					/>
					<AdvertisementOne
						title="Up to 40% off | Laptop & accessories"
						image="https://ik.imagekit.io/5yc2yhl2a/images/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__2R0lbhC9u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651472770171"
					/>

					<AdvertisementFour
						mainTitle="Up to 70% off | Refurbished products"
						img1Src="https://ik.imagekit.io/5yc2yhl2a/images/xcm_banners_2022_janart_qc-372x232-product-badge-t171w-ou9ku-mbrpu_372x232_in-en._SY232_CB620930033__q1M8qzaPr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948982622"
						img1caption="Mobile Phones"
						img2Src="https://ik.imagekit.io/5yc2yhl2a/images/xcm_banners_2022_janart_qc-372x232-product-badge-t171w-ou9ku-b6tkf_372x232_in-en._SY232_CB620930038__DWleQzlYt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948982199"
						img2caption="Laptops"
						img3Src="https://ik.imagekit.io/5yc2yhl2a/images/xcm_banners_2022_janart_qc-372x232-product-badge-t171w-ou9ku-za174_372x232_in-en._SY232_CB620930032__J6qymnU0Q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948982939"
						img3caption="Home Audio"
						img4Src="https://ik.imagekit.io/5yc2yhl2a/images/xcm_banners_2022_janart_qc-372x232-product-badge-t171w-ou9ku_372x232_in-en._SY232_CB620929997__jpwJWSNNI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651948982072"
						img4caption="Home & Kitchen"
					/>
					<AdvertisementOne
						title="Buy an Amazon Pay Gift Card | Earn ₹200 back*"
						image="https://ik.imagekit.io/5yc2yhl2a/images/MayART_PC_CC_758x608_MD._SY608_CB621073132__Xk94dzyue.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651945492643"
					/>
				</div>
				<div className="mainPage__row">
					<ScrollSection />
				</div>
			</div>
		</div>
	);
}

export default MainPage;
