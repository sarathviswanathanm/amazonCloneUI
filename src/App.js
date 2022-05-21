import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/LoginPage";
import MainPage from "./components/HomePage/MainPage";
import NavBar from "./components/NavBar/Navigation";
import NavigationFooter from "./components/NavBar/NavigationFooter";
import Products from "./components/Products/Products";
import ProductDeail from "./components/ProductDetail/ProductDeail";
import FooterBottom from "./components/Footer/FooterBottom/FooterBottom";
import FooterTop from "./components/Footer/FooterTop/FooterTop";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<NavigationFooter />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="" element={<MainPage />} />
					<Route path="/products" element={<Products />} />
					<Route path="/productdetail/:id" element={<ProductDeail />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
				<FooterTop />
				<FooterBottom />
			</div>
		</Router>
	);
}

export default App;
