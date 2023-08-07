import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Jumbotron } from "./Jumbotron/Jumbotron";
import { Cards } from "./Cards/Cards";
//include images into your bundle


const Home = () => {
	return (
		<div className="d-flex flex-column align-items-center">
			<Header />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
