import React from 'react';

const Strava = () => {};

export default Strava;

// export default async (req, res) => {
// 	const headers = {
// 		Accept: 'application/json, text/plain, */*',
// 		'Content-Type': 'application/json',
// 	};

// 	const body = JSON.stringify({
// 		client_id: process.env.REACT_APP_CLIENT_ID,
// 		client_secret: process.env.REACT_APP_SECRET,
// 		refresh_token: process.env.REACT_APP_REFRESH_TOKEN,
// 		grant_type: 'refresh_token',
// 	});

// 	const reauthorizeResponse = await fetch(
// 		'https://www.strava.com/oauth/token',
// 		{
// 			method: 'POST',
// 			headers: headers,
// 			body: body,
// 		},
// 	);
// 	const reAuthJson = await reauthorizeResponse.json();

// 	const response = await fetch(
// 		'https://www.strava.com/api/v3/athletes/65189/stats?access_token=' +
// 			reAuthJson.access_token,
// 	);

// 	const json = response.json();

// 	const { count, distance } = json.all_run_totals;

// 	const movingTime = json.all_run_totals.moving_time;

// 	return res.status(200).json({
// 		count,
// 		distance,
// 		movingTime,
// 	});
// };
