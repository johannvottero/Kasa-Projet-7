import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Gallery from '../../components/Gallery/Gallery';
import Ratings from '../../components/Ratings/Ratings';
import Dropdown from "../../components/Dropdown/Dropdown";

const Lodging = () => {
	/* settings const  */
	const { id } = useParams();
	const navigate = useNavigate();
	const [lodging, setLodgingData] = useState(null);

	/* Fetching lodging datas */
	useEffect(() => {
/* 		fetch("http://localhost:3000/lodgings.json", {
			
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			}, */
			fetch("https://johannvottero.github.io/Projet-7-Kasa/public/lodgings.json", {
		})
		.then(function(response) {
			return response.json()
		})
		.then(function(json) {
			const lodging = json.find((item) => item.id === id);
			if(lodging !== undefined) {
				setLodgingData(lodging);
			} else {
				return navigate("/404");
			}
		})
		.catch(function(error) {
			console.log(error);
		});
	},);
	
	return (
		<div className="lodging main-container">
			{lodging && (
				<div>
					<Gallery
						pictures={lodging.pictures}
					/>
					<div className="lodging-container">
						<div className="lodging-heading">
							<div className="lodging-heading-main">
								<div className="lodging-heading-main-location"></div>
								<div className="lodging-heading-main__title"><h1>{lodging.title}</h1></div>
								<div className="lodging-heading-main__location">{lodging.location}</div>
								<div className="lodging-subheading-tags">
									{ lodging.tags && lodging.tags.length > 0 && lodging.tags.map((tag, index) =>
										<div key={`lodging-subheading-tags-pill-${index}`} className="lodging-subheading-tags-pill">{tag}</div>
									)}
								</div>
							</div>
						</div>
						<div className="lodging-subheading">
							<div className="lodging-heading-main-owner">
								<div className="lodging-heading-main-owner__name">{lodging.host.name}</div>
								<div className="lodging-heading-main-owner__picture">
									<img src={lodging.host.picture} alt={lodging.host.name} />
								</div>
							</div>
							<div className="lodging-subheading__ratings">
							<Ratings rating={lodging.rating} />
							</div>
						</div>
					</div>
					<div className="lodging-collapse-container">
						<div className="lodging-collapse-container__rightColumn">
							<Dropdown
								title="Description"
								content={lodging.description}
							/>
						</div>
						{ lodging.equipments && lodging.equipments.length > 0 && (
							<div className="lodging-collapse-container__leftColumn">
								<Dropdown
									title="Équipements"
									content={lodging.equipments.map((equipement, index) =>
										<li key={`equipment-${index}`}>{`${equipement}`}</li>
									)}
								/>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Lodging;
