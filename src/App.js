import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Lodging from "./pages/lodging/Lodging";
import Error404 from "./pages/error404/Error404";
import "./css/styles.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/lodging/:id" element={<Lodging />} />
				<Route path="/*" element={<Error404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
