import React, { useState, useEffect } from "react";
import Banner from '../../components/Banner/Banner';
import Dropdown from "../../components/Dropdown/Dropdown";
import aboutBannerImg from "../../assets/about-banner.jpg"

function AboutUs () {

	const [aboutContent, setAboutContent] = useState([]);

	useEffect(() => {
		fetch("https://johannvottero.github.io/Projet-7-Kasa/public/about.json", {
/* 			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			}, */
		})
		.then(function(response) {
			return response.json()
		})
		.then(function(json) {
			setAboutContent(json);
		})
		.catch(function(error) {
			console.log(error);
		});
	}, []);

	return (
		<div className='main-container'>
			<Banner
				title=""
				image={aboutBannerImg}
			/>

		{/* Looping through the AboutDatas array and displaying each item as a Dropdown. */}
		<div className="collapse_container_AboutUs">
			{ aboutContent && aboutContent.length > 0 && aboutContent.map((aboutContent, index) =>
				<Dropdown
					title={aboutContent.title}
					content={aboutContent.content}
					key={`${aboutContent.title}-${index}`}
				/>
			)}
			</div>
		</div>
	)
}

export default AboutUs