import React from 'react';

export const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light p-5 fw-bold container">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
		</div>
	);
}