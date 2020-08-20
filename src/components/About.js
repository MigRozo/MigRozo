import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3Alt, faHtml5, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const About = _ => {
	return (
		<section id="about" className="about">
			<div className="container">
				<div className="sect_row fx ac">
					<div className="sect_col">
						<h2 className="about_title titles">About</h2>
						<p>Colombian, from Bogotá. Working as Frontend Developer at a company focused on hotel management systems. I have worked on digital environments from 2012, collaborating with different companies and participating in several projects. I have been combining my coding skills and my graphic design knowledge for creating web apps.</p>
						<div className="nums">
							<div className="num_list fx ac jc">
								<strong className="num_item">7 <span>Companies</span></strong>
								<strong className="num_item">+99 <span>Projects</span></strong>
							</div>
						</div>
						<div className="tech">
							<ul className="tech_list fx ac ja listReset">
								<li className="tech_item">
									<span className="tech_icon" title="React JS">
										<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
											<use xlinkHref="/svg/shapes.svg#hex" />
										</svg>
										<FontAwesomeIcon icon={faReact} />
									</span>
								</li>
								<li className="tech_item">
									<span className="tech_icon" title="JavaScript ES6+">
										<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
											<use xlinkHref="/svg/shapes.svg#hex" />
										</svg>
										<FontAwesomeIcon icon={faJs} />
									</span>
								</li>
								<li className="tech_item">
									<span className="tech_icon" title="CSS3">
										<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
											<use xlinkHref="/svg/shapes.svg#hex" />
										</svg>
										<FontAwesomeIcon icon={faCss3Alt} />
									</span>
								</li>
								<li className="tech_item">
									<span className="tech_icon" title="HTML5">
										<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
											<use xlinkHref="/svg/shapes.svg#hex" />
										</svg>
										<FontAwesomeIcon icon={faHtml5} />
									</span>
								</li>
								<li className="tech_item">
									<span className="tech_icon" title="Git">
										<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
											<use xlinkHref="/svg/shapes.svg#hex" />
										</svg>
										<FontAwesomeIcon icon={faGitAlt} />
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<svg className="about_deco1 deco rellax" width="50" height="50" viewBox="0 0 100 100" data-rellax-speed="-3">
					<use xlinkHref="/svg/shapes.svg#hex" />
				</svg>
				<svg className="about_deco2 deco rellax" width="30" height="30" viewBox="0 0 100 100" data-rellax-speed="3">
					<use xlinkHref="/svg/shapes.svg#hex" />
				</svg>
			</div>
		</section>
	)
};

export default About;