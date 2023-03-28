import React from "react";
import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div className='notFound'>
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_content'>La page que vous recherchez n'existe pas.</p>
				<Link className='notFound_infos_return' to='/'>Retourner sur la page d'accueil</Link>
			</div>
		</div>
	);
};

export default Error404;
