import React from 'react';
import { Card } from '../Card/Card';
import './Cards.css';

export const Cards = () => {
	return (
		<div className="cards-container container">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}