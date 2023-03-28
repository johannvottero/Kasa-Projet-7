import logo from "../../assets/LOGO.svg";
import React from "react";
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className="headerWrap">
			<img className="headerWrap_logo" src={logo} alt="logo de l'agence kasa" />
			<nav className="headerWrap_nav">
				<ul>
					<NavLink to="/">
						<li>Accueil</li>
					</NavLink>
					<NavLink to="/about-us">
						<li>À propos</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;