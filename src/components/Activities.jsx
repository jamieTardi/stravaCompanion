import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Activities = ({ activities, setActivities }) => {
	const [isLoading, setIsLoading] = useState(true);

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
			.then(
				(data) => setActivities(data),
				setIsLoading((prev) => !prev),
			)
			.catch((e) => console.log(e));
	}

	return (
		<div>
			<Table striped bordered hover variant='dark'>
				<thead>
					<tr>
						<th>#</th>
						<th>Activity</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					{activities ? (
						activities.map((activity, i) => (
							<tr>
								<td>{++i}</td>
								<td>{activity.name}</td>
							</tr>
						))
					) : (
						<p>loading</p>
					)}

					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan='2'>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default Activities;
