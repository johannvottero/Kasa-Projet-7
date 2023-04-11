/* import React from "react"; */
import Banner from '../../components/Banner/Banner';
import CardList from '../../components/CardList/CardList';
import bannerImg from "../../assets/home-banner.jpg";


export default function Home() {
	return (
		<div className='home main-container'>
			<Banner
				title="Chez vous, partout et ailleurs"
				image={bannerImg}
			/>
			<CardList/>
		</div>
	)
}
