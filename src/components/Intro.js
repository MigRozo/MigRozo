import React from 'react';

const Intro = _ => {
	return (
		<section id="intro" className="intro">
			<div className="intro_container container">
				<div className="intro_row sect_row fx ac">
					<h1 className="intro_title titles">Mig<br/>Rozo
						<span>Frontend Developer</span>
						<svg className="hex" width="200" height="200" viewBox="0 0 100 100">
							<use xlinkHref="/svg/shapes.svg#hex" />
						</svg>
					</h1>
				</div>
				<svg className="intro_deco1 deco rellax" width="30" height="30" viewBox="0 0 100 100" data-rellax-speed="2">
					<use xlinkHref="/svg/shapes.svg#hex" />
				</svg>
				<svg className="intro_deco2 deco rellax" width="50" height="50" viewBox="0 0 100 100" data-rellax-speed="-1">
					<use xlinkHref="/svg/shapes.svg#hex" />
				</svg>
			</div>
			<a href="#about" className="intro_scroll">
				<svg width="40" height="40">
					<svg className="hex" width="40" height="40" viewBox="0 0 100 100">
						<use xlinkHref="/svg/shapes.svg#hex" />
					</svg>
					<svg className="tri" width="16" height="16" x="12" y="12" viewBox="0 0 100 100">
						<use xlinkHref="/svg/shapes.svg#tri" />
					</svg>
				</svg>
			</a>
		</section>
	)
};

export default Intro;