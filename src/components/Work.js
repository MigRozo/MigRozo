import React, { useState, useEffect } from 'react';

const Work = _ => {
	const [projects, setProjects] = useState([]);
	const API = 'https://migrozo-9cc15.firebaseio.com/projects.json';
	useEffect(() => {
		fetch( API )
			.then( resp => resp.json() )
			.then( result => {
				setProjects(result);
			}, err => {
				console.error('Fetch Error: ', err)
			});
	}, []);

	return (
		<section id="work" className="work">
			<div className="container">
				<div className="sect_row fx ac">
					<div className="sect_col">
						<h2 className="work_title titles">Work</h2>
						<div className="work_pics">
							<ul className="work_list listReset">
								{
									projects.map(({ name, site, image }, k) => (
										<li className="work_item" key={k}>
											<a href={site} target="_blank" className="work_link" rel="noopener noreferrer">
												<img src={image} alt={name} loading="lazy" />
												<span>{name}</span>
											</a>
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
				<svg className="work_deco1 deco rellax" width="30" height="30" viewBox="0 0 100 100" data-rellax-speed="-2">
					<use xlinkHref="/svg/shapes.svg#hex" />
				</svg>
				<svg className="work_deco2 deco rellax" width="20" height="20" viewBox="0 0 100 100" data-rellax-speed="-3">
					<use xlinkHref="/svg/shapes.svg#hex" />
				</svg>
				<svg className="work_deco3 deco rellax" width="50" height="50" viewBox="0 0 100 100" data-rellax-speed="-1">
					<use xlinkHref="/svg/shapes.svg#hex" />
				</svg>
			</div>
		</section>
	)
};

export default Work;