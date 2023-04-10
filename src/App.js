import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Lodging from "./pages/Lodging/Lodging";
import Error404 from "./pages/Error404/Error404";

function App() {
	return (
		<BrowserRouter>
			<Header/>
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
