import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import clock from '../assets/icons/clock.svg';
import map from '../assets/icons/map.svg';
import loadingGif from '../assets/icons/loading.svg';

const Dashboard = ({ activities, isMobile, setIsMobile }) => {
	let sevenDayTotal = 0 * 0.00062137;
	let totalKudos = 0;

	try {
		for (let i = 1; i < 7; i++) {
			sevenDayTotal += activities[i].distance;
		}
		activities.forEach((run) => {
			totalKudos += run.kudos_count;
		});
	} catch (e) {
		console.log(e);
	}
	let weeklyAverage = ((sevenDayTotal / 5) * 0.00062137).toFixed(2);
	console.log(activities);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => {
				const ismobile = window.innerWidth < 700;
				if (ismobile !== isMobile) setIsMobile(ismobile);
			},
			false,
		);
	}, [isMobile]);

	return (
		<>
			{activities ? (
				<div
					className={
						isMobile
							? 'three-card-set d-flex container '
							: 'three-card-set d-flex container my-4'
					}>
					<Card
						className={
							isMobile
								? 'col bg-dark text-white mt-2'
								: 'col bg-dark text-white'
						}>
						<Card.Header>Total distance previous 7 days</Card.Header>
						<Card.Body>
							<Card.Title>
								Distance <img src={clock} />
							</Card.Title>
							<Card.Text className='text-white-50'>
								Total Distance covered in the last 7 days{' '}
								{(sevenDayTotal * 0.00062137).toFixed(2)} miles run.
							</Card.Text>
						</Card.Body>
					</Card>

					<Card
						className={
							isMobile
								? 'col bg-dark text-white mt-2'
								: 'col bg-dark text-white'
						}>
						<Card.Header>Average daily distance past 7 days</Card.Header>
						<Card.Body>
							<Card.Title>
								Average Daily Distance <img src={map} />
							</Card.Title>
							<Card.Text className='text-white-50'>
								Average daily run distance over the past 7 days {weeklyAverage}{' '}
								miles
							</Card.Text>
						</Card.Body>
					</Card>

					<Card
						className={
							isMobile
								? 'col bg-dark text-white mt-2'
								: 'col bg-dark text-white'
						}>
						<Card.Header>Total amount of kudos past 30 activities</Card.Header>
						<Card.Body>
							<Card.Title>
								Total Kudos <img src={map} />
							</Card.Title>
							<Card.Text className='text-white-50'>
								Total Kudos over the past 30 activities is {totalKudos}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			) : (
				<img src={loadingGif} />
			)}
		</>
	);
};

export default Dashboard;
