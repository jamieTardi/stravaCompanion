import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Line, Doughnut } from 'react-chartjs-2';
import loadingGif from '../assets/icons/loading.svg';

const TotalRunGraph = ({ activities }) => {
	// const [runDistance, setRunDistance] = useState([]);
	let runDistance = [];
	let totalRuns = [];
	let lastSevenDaysRunTotal = 0;
	let previousWeekRunTotal = 0;

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
		for (let i = 0; i < 14; i++) {
			if (i < 7) {
				lastSevenDaysRunTotal += parseInt(
					activities[i].distance * 0.000621371192,
				);
			} else {
				previousWeekRunTotal += parseInt(
					activities[i].distance * 0.000621371192,
				);
			}
		}
		console.log(previousWeekRunTotal);
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

	const dataComp = {
		labels: ['Last Seven Days', 'Previous 7 days'],
		datasets: [
			{
				label: 'Total miles run current week vs last week',
				data: [lastSevenDaysRunTotal, previousWeekRunTotal],
				fill: false,
				backgroundColor: ['#ce0415', '#f5f107'],
				borderColor: 'black',
			},
		],
	};

	return (
		<div className='container my-4'>
			{activities ? (
				<div className='d-flex graph-container'>
					<Card className='col bg-dark text-white card-margins'>
						<Card.Header>
							<Line data={data} className='graph-height' />
						</Card.Header>
						<Card.Body>Runs for the past 30 activities.</Card.Body>
					</Card>
					<Card className='col bg-dark text-white card-margins'>
						<Card.Header>
							<Doughnut data={dataComp} className='graph-height' />
						</Card.Header>
						<Card.Body>
							Total distance last 7 runs compared to the distance the previous 7
							runs.
						</Card.Body>
					</Card>
				</div>
			) : (
				<img src={loadingGif} alt='loading' />
			)}
		</div>
	);
};

export default TotalRunGraph;
