import React from 'react';

const Filter = ({
	activities,
	runningActivities,
	setRunningActivities,
	cyclingActivities,
	setCyclingActivites,
	walkingActivities,
	setWalkingActivities,
	combineActivities,
	setCombineActivities,
}) => {
	const handleRunning = () => {
		let runArr = [];
		activities.forEach((run) => {
			if (run.type === 'Run') {
				runArr.push(run);
			}
		});
		setRunningActivities(runArr);
	};

	const handleCycling = () => {
		let cycleArr = [];
		activities.forEach((cycle) => {
			if (cycle.type === 'VirtualRide' || cycle.type === 'Ride') {
				cycleArr.push(cycle);
			}
		});
		setCyclingActivites(cycleArr);
	};

	const handleWalking = () => {
		let walkArr = [];
		activities.forEach((walk) => {
			if (walk.type === 'Walk') {
				walkArr.push(walk);
			}
		});
		setWalkingActivities(walkArr);
	};

	return (
		<div>
			<button onClick={handleRunning}>Run</button>
			<button onClick={handleCycling}>Cycle</button>
			<button onClick={handleWalking}>Walk</button>
		</div>
	);
};

export default Filter;
