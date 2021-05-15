import React from 'react';

const Filter = ({
	activities,
	runningActivities,
	setRunningActivities,
	cyclingActivities,
	setCyclingActivites,
	walkingActivities,
	setWalkingActivities,
}) => {
	const handleRunning = () => {
		let runArr = [];
		activities.forEach((run) => {
			if (run.type === 'Run') {
				runArr.push(run);
			}
		});
		setRunningActivities([runArr]);
	};

	console.log(runningActivities);
	return (
		<div>
			<button onClick={handleRunning}>Run</button>
		</div>
	);
};

export default Filter;
