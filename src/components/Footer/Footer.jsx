import logo from "../../assets/logo-footer.svg";

const Footer = () => {
	return (
		<footer className="foot-container">
			<img src={logo} alt="logo de kasa" />
			<p className="foot-container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
export default Footer;