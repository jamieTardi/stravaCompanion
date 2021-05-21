import React, { useState } from 'react';
import { ItemTag } from './index';
import { ButtonGroup, Button } from 'react-bootstrap';

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
	const [activeFilter, setActiveFilter] = useState(false);

	const handleRunning = () => {
		let runArr = [];
		activities.forEach((run) => {
			if (run.type === 'Run') {
				runArr.push(run);
			}
		});
		setRunningActivities(runArr);
		setRunningItemFilter((prev) => !prev);
		setActiveFilter(true);
	};

	const handleCycling = () => {
		let cycleArr = [];
		activities.forEach((cycle) => {
			if (cycle.type === 'VirtualRide' || cycle.type === 'Ride') {
				cycleArr.push(cycle);
			}
		});
		setCyclingActivites(cycleArr);
		setCyclingItemFilter((prev) => !prev);
		setActiveFilter(true);
	};

	const handleWalking = () => {
		let walkArr = [];
		activities.forEach((walk) => {
			if (walk.type === 'Walk') {
				walkArr.push(walk);
			}
		});
		setWalkingActivities(walkArr);
		setWalkingItemFilter((prev) => !prev);
		setActiveFilter(true);
	};
	console.log(walkingItemFilter);

	return (
		<div className='w-100'>
			<ButtonGroup aria-label='Basic example' className='my-3'>
				<Button onClick={handleRunning}>Running 🏃‍♂️</Button>
				<Button onClick={handleCycling}>Cycling 🚴</Button>
				<Button onClick={handleWalking}>Walking 🚶</Button>
			</ButtonGroup>
			<div className='filter-box'>
				<div className='filter-container d-flex justify-content-around my-3'>
					{runningItemFilter ? (
						<ItemTag
							runningItemFilter={runningItemFilter}
							setRunningItemFilter={setRunningItemFilter}
							activeFilter={activeFilter}
						/>
					) : (
						''
					)}

					{cyclingItemFilter ? (
						<ItemTag
							cyclingItemFilter={cyclingItemFilter}
							setCyclingItemFilter={setCyclingItemFilter}
							activeFilter={activeFilter}
						/>
					) : (
						''
					)}
					{walkingItemFilter ? (
						<ItemTag
							walkingItemFilter={walkingItemFilter}
							setWalkingItemFilter={setWalkingItemFilter}
							activeFilter={activeFilter}
						/>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default Filter;
