import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Dashboard = ({ activities }) => {
	let sevenDayTotal = 0 * 0.00062137;
	try {
		for (let i = 0; i < 7; i++) {
			sevenDayTotal += activities[i].distance;
			console.log(sevenDayTotal);
		}
	} catch (e) {
		console.log(e);
	}

	return (
		<div>
			<Card></Card>
			<p>{sevenDayTotal}</p>
		</div>
	);
};

export default Dashboard;
