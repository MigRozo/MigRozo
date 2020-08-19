import React, { useEffect } from 'react';
import Header from './components/Header';
import Rellax from 'rellax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faCss3Alt, faHtml5, faGitAlt, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './App.css';

const App = _ => {
    useEffect(_ => {
        new Rellax('.rellax', { center: true });
    });
    return (
        <main className="App">
            <Header />

            <section className="intro">
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
                                        <span className="tech_icon" title="React">
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

            <section id="work">
                <div className="container">
                    <div className="sect_row fx ac">
                        <div className="sect_col">
                            <h2 className="titles">Work</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container">
                    <div className="sect_row fx ac">
                        <div className="sect_col">
                            <h2 className="contact_title titles">Contact</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laborum nam debitis.</p>
                            <div className="social">
                                <ul className="social_list fx ac listReset">
                                    <li className="social_item">
                                        <a href="/" className="social_link"><FontAwesomeIcon icon={faGithub} /></a>
                                    </li>
                                    <li className="social_item">
                                        <a href="/" className="social_link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    </li>
                                    <li className="social_item">
                                        <a href="/" className="social_link"><FontAwesomeIcon icon={faTwitter} /></a>
                                    </li>
                                    <li className="social_item">
                                        <a href="/" className="social_link"><FontAwesomeIcon icon={faEnvelope} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">footer</footer>
        </main>
    )
};

export default App;
