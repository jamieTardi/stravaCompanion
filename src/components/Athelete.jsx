import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import loading from '../assets/icons/loading.svg';
import stravaIcon from '../assets/icons/favicon.ico';

const Athelete = ({ isMobile, setIsMobile, atheleteInfo, setAthelteInfo }) => {
	//Strava Credentials
	let clientID = process.env.REACT_APP_CLIENT_ID;
	let clientSecret = process.env.REACT_APP_SECRET;

	// refresh token and call address
	const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;
	const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

	// endpoint for read-all activities. temporary token is added in getActivities()
	const callActivities = `https://www.strava.com/api/v3/athlete?access_token=`;

	let creationDate = atheleteInfo ? atheleteInfo.created_at.split('T')[0] : '';

	// Create a correctly formatted date.
	let toArray = creationDate.split('');

	let year = '';
	let month = '';
	let day = '';

	for (let i = 0; i < toArray.length; i++) {
		if (toArray[i] !== '-' && i <= 4) {
			year += toArray[i];
		} else if (i > 4 && toArray[i] !== '-' && i <= 7) {
			month += toArray[i];
		} else if (toArray[i] !== '-') {
			day += toArray[i];
		}
	}

	// Use refresh token to get current access token
	useEffect(() => {
		fetch(callRefresh, {
			method: 'POST',
		})
			.then((res) => res.json())
			.then((result) => getActivities(result.access_token));
	}, [callRefresh]);

	// use current access token to call all activities
	function getActivities(access) {
		fetch(callActivities + access)
			.then((res) => res.json())
			.then((data) => setAthelteInfo(data))
			.catch((e) => console.log(e));
	}

	console.log(atheleteInfo);

	return (
		<div
			className={
				isMobile
					? 'container d-flex justify-content-center w-100'
					: 'container d-flex justify-content-center'
			}>
			{atheleteInfo ? (
				<Card
					className={
						isMobile ? 'bg-dark text-white w-100' : 'bg-dark text-white w-50'
					}>
					<div className='d-flex pt-4 justify-content-start pl-3'>
						<p>Current Profile picture</p>
						<Card.Img
							variant='top'
							src={atheleteInfo.profile}
							className='athelete-profile-pic'
						/>
					</div>
					<Card.Body>
						<Card.Title>Athlete Details</Card.Title>
						<Card.Text>
							<span className='font-weight-bolder'>Name: </span>{' '}
							{atheleteInfo.firstname} {atheleteInfo.lastname}
						</Card.Text>
						<Card.Text>
							<span className='font-weight-bolder'>Sex: </span>{' '}
							{atheleteInfo.sex === 'M' ? 'Male' : 'Female'}
						</Card.Text>

						<Card.Text>
							<span className='font-weight-bolder'>Athelte Bio: </span>{' '}
							{atheleteInfo.bio}
						</Card.Text>
						<Card.Text>
							<span className='font-weight-bolder'>Athelte Location: </span>{' '}
							{atheleteInfo.city}, {atheleteInfo.country}
						</Card.Text>
						<Card.Text>
							<span className='font-weight-bolder'>Joined Strava: </span> {day}/
							{month}/{year}
						</Card.Text>
						<Card.Text>
							<span className='font-weight-bolder'>Strava ID: </span>{' '}
							{atheleteInfo.id}
						</Card.Text>

						<Button
							href={`https://www.strava.com/athletes/${atheleteInfo.id}`}
							style={{ background: '#FC5200', border: 'none' }}>
							Link to Strava Account{' '}
							<img
								src={stravaIcon}
								alt='strava'
								className='strava-icon-button'
							/>
						</Button>
					</Card.Body>
				</Card>
			) : (
				<img src={loading} alt='loading card' />
			)}
		</div>
	);
};

export default Athelete;
