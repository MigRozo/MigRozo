import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Footer = _ => {
	return (
		<footer className="footer">
			<div className="container">
				Made with <FontAwesomeIcon icon={faHeart} title="Love" /> from <span className="co" title="Colombia">CO</span> by <strong>Mig Rozo</strong>
			</div>
		</footer>
	)
};

export default Footer;