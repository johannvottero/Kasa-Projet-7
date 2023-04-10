const Banner = (props) => {
	return (
		<figure className="banner main-container">
			<img className ="banner-img" src={props.image} alt={props.title}></img>
				<figcaption>{props.title}</figcaption>
		</figure>
	);
}
export default Banner;
