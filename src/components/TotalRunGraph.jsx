import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const TotalRunGraph = ({ activities }) => {
	// const [runDistance, setRunDistance] = useState([]);
	let runDistance = [];
	let totalRuns = [];
	let lastSevenDaysRunTotal = 0;

	//Total Run distance previous 30 days
	try {
		activities.map((run) => {
			runDistance.push((run.distance * 0.000621371192).toFixed(2));
		});
		for (let i = 0; i < activities.length; i++) {
			totalRuns.push(i);
		}
	} catch (e) {
		console.log(e);
	}

	//Comparision between last 7 runs and the previous 7 before that
	try {
		for (let i = 0; i < 7; i++) {
			lastSevenDaysRunTotal += parseInt(
				activities[i].distance * 0.000621371192,
			);
		}
		console.log(lastSevenDaysRunTotal);
	} catch (e) {
		console.log(e);
	}

	const data = {
		labels: totalRuns,
		datasets: [
			{
				label: 'Miles run previous 30 runs',
				data: runDistance,
				fill: false,
				backgroundColor: '#2D76EB',
				borderColor: '#07F523',
			},
		],
	};

	return (
		<div className='container'>
			{activities ? (
				<Card>
					<Card.Header>
						<Line data={data} />
					</Card.Header>
					<Card.Body>Runs for the past 30 days</Card.Body>
				</Card>
			) : (
				<Spinner animation='grow' variant='success' />
			)}
		</div>
	);
};

export default TotalRunGraph;
