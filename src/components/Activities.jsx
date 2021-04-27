import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { PaginationActivity } from './index';
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
		<div className='d-flex justify-content-center flex-column align-items-center table-container'>
			<Table striped bordered hover variant='dark'>
				<thead>
					<tr>
						<th>#</th>
						<th>Activity</th>
						<th>Distance</th>
						<th>Average Speed</th>
						<th>Average Heart Rate</th>
						<th>Average Run Cadence</th>
					</tr>
				</thead>
				<tbody>
					{activities ? (
						currentPosts.map((activity, i) => (
							<tr key={i}>
								<td>{++i}</td>
								<td>{activity.name}</td>
								<td>{Math.round(activity.distance / 1000)}</td>
								<td>
									{Math.round(activity.average_speed * 2.236936).toFixed(1) +
										' mph'}
								</td>
								<td>{activity.average_heartrate}</td>
								<td>{Math.round(activity.average_cadence * 2)}</td>
							</tr>
						))
					) : (
						<p>loading</p>
					)}
				</tbody>
			</Table>
			<PaginationActivity
				totalPosts={totalPosts}
				activitiesPerPage={activitiesPerPage}
				paginate={paginate}
			/>
		</div>
	);
};

export default Activities;
