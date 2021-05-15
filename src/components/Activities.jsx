import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { PaginationActivity, Filter } from './index';
import loadingGif from '../assets/icons/loading.svg';
const Activities = ({ activities, setActivities }) => {
	const [activitiesPerPage, setActivitiesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	console.log(activities);

	let totalPosts = activities ? activities.length : false;

	const indexOfLastPost = activitiesPerPage * currentPage;
	const indexOfFirstPost = indexOfLastPost - activitiesPerPage;
	const currentPosts = activities
		? activities.slice(indexOfFirstPost, indexOfLastPost)
		: false;
	//Strava Credentials
	let clientID = process.env.REACT_APP_CLIENT_ID;
	let clientSecret = process.env.REACT_APP_SECRET;

	// refresh token and call address
	const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;
	const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

	// endpoint for read-all activities. temporary token is added in getActivities()
	const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`;

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
			.then((data) => setActivities(data))
			.catch((e) => console.log(e));
	}

	const paginate = (page) => {
		return setCurrentPage(page);
	};

	return (
		<div className='d-flex justify-content-center flex-column align-items-center table-container container'>
			{activities ? (
				<>
					<Filter activities={activities} />
					<Table striped bordered hover variant='dark'>
						<thead>
							<tr>
								<th>Date</th>
								<th>Start Time</th>
								<th>Activity</th>
								<th>Distance</th>
								<th>Average Speed</th>
								<th>Average Heart Rate</th>
								<th>Average Run Cadence</th>
							</tr>
						</thead>
						<tbody>
							{currentPosts.map((activity, i) => (
								<tr key={i}>
									<td>{activity.start_date_local.split('T')[0]}</td>
									<td>
										{activity.start_date_local.split('T')[1].replace('Z', '')}
									</td>
									<td>{activity.name}</td>
									<td>{Math.round(activity.distance / 1000 / 1.6)} Miles</td>
									<td>
										{Math.round(activity.average_speed * 2.236936).toFixed(1) +
											' mph'}
									</td>
									<td>
										{activity.average_heartrate
											? activity.average_heartrate
											: 'No heartrate Recorded'}
									</td>
									<td>
										{activity.average_cadence
											? Math.round(activity.average_cadence * 2)
											: 'No Run cadence was recorded'}
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<PaginationActivity
						totalPosts={totalPosts}
						activitiesPerPage={activitiesPerPage}
						paginate={paginate}
					/>
				</>
			) : (
				<img src={loadingGif} alt='loading' />
			)}
		</div>
	);
};

export default Activities;
