import React from "react";
import DropdownLarge from "../../components/DropdownLarge/DropdownLarge";
import about_banner from "../../assets/about-banner.jpg"
 
	
/* useEffect(() => {

	fetch("http://localhost:3000/aboutArray.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
	.then(function(response) {
		return response.json()
	})
	.then(function(json) {
		setContentDropDownLarge(json);
	})
	.catch(function(error) {
		console.log(error);
	});
}, []);

 { ContentDropdownLarge.length > 0 && ContentDropdownLarge.map((DropdownLarge) =>
	title={DropdownLarge.title},
	content={DropdownLarge.cover},
)}  */

function AboutUs () {

const AboutDatas = [
	{
		title: 'Fiabilité',
		content:
			'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
	},
	{
		title: 'Respect',
		content:
			'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
	},
	{
		title: 'Service',
		content:
			"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
	},
	{
		title: 'Sécurité',
		content:
			"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	},
]


		return (
				<div className='collapse_container main-container'>
				<img
					className="banner-img about_banner"
					src={about_banner}
					alt="Banner">
				</img>

			{/* Looping through the aproposData array and displaying each item as a Collapse. */}
			{AboutDatas.map((AboutData, index) => (
				<DropdownLarge
					title={AboutData.title}
					content={AboutData.content}
					key={`${AboutData.title}-${index}`}
				/>
			))}
			</div>
	)
}

export default AboutUs