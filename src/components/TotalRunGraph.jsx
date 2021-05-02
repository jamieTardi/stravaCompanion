import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const TotalRunGraph = ({ activities }) => {
	// const [runDistance, setRunDistance] = useState([]);
	let runDistance = [];
	let totalRuns = [];

	try {
		activities.map((run) => {
			runDistance.push((run.distance * 0.000621371192).toFixed(2));
		});
		for (let i = 1; i < activities.length; i++) {
			totalRuns.push(i);
		}
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
				<Line data={data} />
			) : (
				<Spinner animation='grow' variant='success' />
			)}
		</div>
	);
};

export default TotalRunGraph;
