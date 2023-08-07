import React from 'react';

export const Card = () => {
	
	const imgStyles = {
		width: "100%",
		height: "200px",
	}

	return (
		<div className="card border border-0" style={{width: "100%"}}>
		  <img src="https://i.pinimg.com/564x/ba/04/47/ba04470b53edca34e0042fa0c13fea2c.jpg" className="card-img-top border border-0" style={imgStyles}/>
		  <div className="card-body text-center">
		    <h5 className="card-title fs-4">Card title</h5>
		    <p className="card-text fs-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		    <a href="#" className="btn btn-primary mt-5">Find Out More!</a>
		  </div>
		</div>
	);
}