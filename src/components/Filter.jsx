import React, { useState } from 'react';
import { ItemTag } from './index';

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
	const [runningItemFilter, setRunningItemFilter] = useState(false);
	const [cyclingItemFilter, setCyclingItemFilter] = useState(false);
	const [walkingItemFilter, setWalkingItemFilter] = useState(false);

	const handleRunning = () => {
		let runArr = [];
		activities.forEach((run) => {
			if (run.type === 'Run') {
				runArr.push(run);
			}
		});
		setRunningActivities(runArr);
		setRunningItemFilter((prev) => !prev);
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
			<div>
				{runningItemFilter ? (
					<ItemTag
						runningItemFilter={runningItemFilter}
						setRunningItemFilter={setRunningItemFilter}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Filter;
