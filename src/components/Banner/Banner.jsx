import bannerImg from "../../assets/background-banner.png";

const Banner = () => {
	return (
		<figure className="banner main-container">
			<img className ="banner-img" src={bannerImg} alt="côte surplombée de forêts"></img>
				<figcaption>Chez vous, partout et ailleurs</figcaption>
		</figure>
	);
}
export default Banner;