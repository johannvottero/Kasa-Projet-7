import React from "react";
import { Link } from 'react-router-dom';
/* import { useParams } from "react-router-dom";
import { useEffect, useState } from "react" */
import Gallery from '../../components/Gallery/Gallery';
import DropdownLarge from "../../components/DropdownLarge/DropdownLarge";
import redstar from "../../assets/Vectorredstar.png";
import greystar from "../../assets/Vectorgreystar.png";

const Lodging = () => {

/* 	const idLodging = useParams('id').id;
	const dataCurrentLodging = datas.filter(data => data.id === idLodging);
 */
	return (
		<div className="lodging main-container">
			<Gallery/>
			<Link className='lodging' to='/lodging'></Link>
			<div className="lodging-container">
				<div className="lodging-heading">
					<div className="lodging-heading-main">
						<div className="lodging-heading-main-location" ></div>
						<div className="lodging-heading-main__title"><h1>Magnifique appartement proche Canal Saint Martin</h1></div>
						<div className="lodging-heading-main__location">Ile de France - Paris 20e</div>
						<div className="lodging-subheading-tags">
							<div className="lodging-subheading-tags-pill">Cozy</div>
						</div>
					</div>
				
				</div>
				<div className="lodging-subheading">
					<div className="lodging-heading-main-owner">
						<div className="lodging-heading-main-owner__name">Franck Maher</div>
						<div className="lodging-heading-main-owner__picture"> <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg" alt="" /></div>
					</div>

					<div className="lodging-subheading__ratings">
					<img src={redstar} alt=""/>
					<img src={redstar} alt=""/>
					<img src={redstar} alt=""/>
					<img src={greystar} alt=""/>
					<img src={greystar} alt=""/>
					</div>
				</div>
			</div>
			<div className="lodging-collapse-container"> 
			<div className="lodging-collapse-container__rightColumn">
			<DropdownLarge/>
			</div>
			<div className="lodging-collapse-container__leftColumn">
			<DropdownLarge/>
			</div>

			</div>
		</div>
	);
};

export default Lodging;
