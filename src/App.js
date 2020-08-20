import React, { useEffect } from 'react';
import Header	from './components/Header';
import Intro	from './components/Intro';
import About	from './components/About';
import Work		from './components/Work';
import Contact	from './components/Contact';
import Footer	from './components/Footer';
import './App.css';
import Rellax from 'rellax';

const App = _ => {
	useEffect(_ => {
		new Rellax('.rellax', { center: true });
	});
	return (
		<main className="App">
			<Header />
			<Intro />
			<About />
			<Work />
			<Contact />
			<Footer />
		</main>
	)
};

export default App;
