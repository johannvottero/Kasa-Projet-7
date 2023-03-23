import React from "react";
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<nav>
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