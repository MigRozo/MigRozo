import React, { useEffect } from 'react';
import Rellax from 'rellax';
import Header from './components/Header';
import './App.css';

const App = _ => {
    useEffect(_ => {
        new Rellax('.rellax');
    });
    return (
        <main className="App">
            <Header />

            <section className="intro">
                <div className="intro_container container">
                    <div className="intro_row fx ac">
                        <h1 className="intro_title titles">Mig<br/>Rozo
                            <span>Frontend Developer</span>
                            <svg className="hex" width="200" height="200" viewBox="0 0 100 100">
                                <use xlinkHref="/svg/shapes.svg#hex" />
                            </svg>
                        </h1>
                    </div>
                    <svg className="intro_deco1 intro_deco rellax" width="30" height="30" viewBox="0 0 100 100" data-rellax-speed="2">
                        <use xlinkHref="/svg/shapes.svg#hex" />
                    </svg>
                    <svg className="intro_deco2 intro_deco rellax" width="50" height="50" viewBox="0 0 100 100" data-rellax-speed="-2">
                        <use xlinkHref="/svg/shapes.svg#hex" />
                    </svg>
                </div>
                <a href="/" className="intro_scroll">
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

            <section className="">About</section>
            <section className="">Work</section>
            <section className="">
                <div className="container">
                    <p>Contact</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex necessitatibus alias accusantium nobis nemo aperiam numquam aut fuga soluta magnam sequi incidunt pariatur exercitationem, laboriosam, officia dolores hic suscipit doloremque illum. Sint quaerat quidem illum eligendi natus quasi dolorum, accusamus maiores inventore voluptatum fugiat dolor dolores fugit sit ipsam repellendus.</p>
                </div>
            </section>

            {/* <footer className="footer">footer</footer> */}
        </main>
    )
};

export default App;
