import React from "react";
import Banner from '../../components/Banner/Banner';
import DropdownLarge from "../../components/DropdownLarge/DropdownLarge";


	export default function AboutUs () {
		return (
			<div className='collapse_container main-container'>
				<Banner src=""/>
				<DropdownLarge/>
				<DropdownLarge/>
				<DropdownLarge/>
				<DropdownLarge/>
			</div>
		)
	}
	

/* 	return (
		<div className="main_container">
				<figure className="banner">
				<img className ="banner-img" src={banner} alt="côte surplombée de forêts"></img>
			</figure>

			<div className="collapse_container">
			<div className="collapse_container-heading">
				<div className="collapse_container-title"> <span>Fiabilité</span></div>
				<div className="collapse_container-chevron">
					<img src={chevron} alt="chevron collapse"></img>
				</div>
			</div>
			<div className="collapse_container-heading">
				<div className="collapse_container-title"> <span>Respect</span></div>
				<div className="collapse_container-chevron">
					<img src={chevron} alt="chevron collapse"></img>
				</div>
			</div>

			<div className="collapse_container-heading">
				<div className="collapse_container-title"> <span>Service</span></div>
				<div className="collapse_container-chevron">
					<img src={chevron} alt="chevron collapse"></img>
				</div>
			</div>

			<div className="collapse_container-heading">
				<div className="collapse_container-title"> <span>Responsabilité</span></div>
				<div className="collapse_container-chevron">
					<img src={chevron} alt="chevron collapse"></img>
				</div>
			</div>

			</div>
		</div> 
	); */

