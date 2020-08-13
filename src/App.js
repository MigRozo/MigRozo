import React from 'react';
import Header from './components/Header';
import './App.css';

const App = _ => (
    <main className="App">
        <Header />

        <section className="intro">
            <div className="container">
                <div className="intro_row fx ac">
                    <h1 className="intro_title titles">Mig<br/>Rozo <span>Frontend Developer</span></h1>
                </div>
            </div>
            <a href="/" className="intro_scroll">
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="24">scroll</text>
                </svg>
            </a>
        </section>

        {/* <footer className="footer">footer</footer> */}
    </main>
);

export default App;
