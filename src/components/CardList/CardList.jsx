import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from '../Card/Card'

export default function CardList() {

	const [lodgings, setLodgings] = useState([]);

	useEffect(() => {
		//fectching datas
		fetch("http://localhost:3000/lodgings.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
		.then(function(response) {
			return response.json()
		})
		.then(function(json) {
			setLodgings(json);
		})
		.catch(function(error) {
			console.log(error);
		});
	}, []);

	//checking datas, generating link and building cards
	return (
		<main className='home_CardList'>
			{/* looping on lodging datas to build cards */}
			{ lodgings && lodgings.length > 0 && lodgings.map((lodging) =>
				<Link key={`lodging-link-${lodging.id}`} to={`/lodging/${lodging.id}`}>
					<Card
						key={`lodging-card-${lodging.id}`}
						id={lodging.id}
						title={lodging.title}
						cover={lodging.cover}
					/>
				</Link>
			)}
		</main>
		)
}
