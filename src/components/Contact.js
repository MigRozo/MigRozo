import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = _ => {
	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="sect_row fx ac">
					<div className="sect_col">
						<h2 className="contact_title titles">Contact</h2>
						<p>For more information, you can write me an email or direct message on one of these networks.</p>
						<div className="social">
							<ul className="social_list fx ac listReset">
								<li className="social_item">
									<a href="https://github.com/MigRozo" target="_blank" rel="noopener noreferrer" className="social_link" title="GitHub">
										<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
											<use xlinkHref="/svg/shapes.svg#hex" />
										</svg>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
								<li className="social_item">
									<a href="https://co.linkedin.com/public-profile/in/miguel-angel-rozo-546b1784" target="_blank" rel="noopener noreferrer" className="social_link" title="LinkedIn">
										<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
											<use xlinkHref="/svg/shapes.svg#hex" />
										</svg>
										<FontAwesomeIcon icon={faLinkedinIn} />
									</a>
								</li>
								<li className="social_item">
									<a href="https://twitter.com/migrozo" target="_blank" rel="noopener noreferrer" className="social_link" title="Twitter">
										<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
											<use xlinkHref="/svg/shapes.svg#hex" />
										</svg>
										<FontAwesomeIcon icon={faTwitter} />
									</a>
								</li>
								<li className="social_item">
									<a href="mailto:angelorozo13@hotmail.com" className="social_link" title="Email">
										<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
											<use xlinkHref="/svg/shapes.svg#hex" />
										</svg>
										<FontAwesomeIcon icon={faEnvelope} />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<svg className="contact_deco1 deco rellax" width="50" height="50" viewBox="0 0 100 100" data-rellax-speed="1">
					<use xlinkHref="/svg/shapes.svg#hex" />
				</svg>
				<svg className="contact_deco2 deco rellax" width="30" height="30" viewBox="0 0 100 100" data-rellax-speed="-3">
					<use xlinkHref="/svg/shapes.svg#hex" />
				</svg>
			</div>
		</section>
	)
};

export default Contact;