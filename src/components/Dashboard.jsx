import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import clock from '../assets/icons/clock.svg';
import map from '../assets/icons/map.svg';

const Dashboard = ({ activities }) => {
	let sevenDayTotal = 0 * 0.00062137;

	try {
		for (let i = 1; i < 7; i++) {
			sevenDayTotal += activities[i].distance;
		}
	} catch (e) {
		console.log(e);
	}
	let weeklyAverage = ((sevenDayTotal / 5) * 0.00062137).toFixed(2);

	return (
		<div className='d-flex container'>
			<Card>
				<Card.Header>Total distance previous 7 days</Card.Header>
				<Card.Body>
					<Card.Title>
						Distance <img src={clock} />
					</Card.Title>
					<Card.Text className='text-black-50'>
						Total Distance covered in the last 7 days{' '}
						{(sevenDayTotal * 0.00062137).toFixed(2)} miles run.
					</Card.Text>
				</Card.Body>
			</Card>

			<Card>
				<Card.Header>Average daily distance past 7 days</Card.Header>
				<Card.Body>
					<Card.Title>
						Average Daily Distance <img src={map} />
					</Card.Title>
					<Card.Text className='text-black-50'>
						Average daily run distance over the past 7 days {weeklyAverage}{' '}
						miles
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Dashboard;
