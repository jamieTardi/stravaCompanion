import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import clock from '../assets/icons/clock.svg';

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
		<div className='d-flex'>
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
				<Card.Header>Total distance previous 7 days</Card.Header>
				<Card.Body>
					<Card.Title>
						Distance <img src={clock} />
					</Card.Title>
				</Card.Body>
			</Card>
			<p>{sevenDayTotal}</p>
		</div>
	);
};

export default Dashboard;
