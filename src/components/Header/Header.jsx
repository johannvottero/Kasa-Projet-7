import logo from "../../assets/LOGO.svg";
import React from "react";
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className="headerWrap main-container">
			<img className="headerWrap_logo" src={logo} alt="logo de l'agence kasa" />
			<nav className="headerWrap_nav">
				<ul>
					{/* Setting condition to apply css style on navigation link */}
					<NavLink className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'} to="/">
						<li>Accueil</li>
					</NavLink>
					<NavLink className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'} to="/about-us">
						<li>À propos</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;