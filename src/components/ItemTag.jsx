import React from 'react';
import cross from '../assets/icons/cross.svg';

const ItemTag = ({
	runningItemFilter,
	setRunningItemFilter,
	activeFilter,
	cyclingItemFilter,
	setCyclingItemFilter,
	walkingItemFilter,
	setWalkingItemFilter,
}) => {
	const handleRemoveRunning = () => {
		setRunningItemFilter(false);
	};

	const handleRemoveCycling = () => {
		setCyclingItemFilter(false);
	};

	const handleRemoveWalking = () => {
		setWalkingItemFilter(false);
	};
	return (
		<div className='w-25'>
			{activeFilter ? (
				<>
					{runningItemFilter ? (
						<div className='item-tag-container d-flex justify-content-around align-items-center'>
							<p>{runningItemFilter ? 'Running' : ''}</p>
							<img
								src={cross}
								alt='cross'
								height='25px'
								width='25px'
								onClick={handleRemoveRunning}
							/>
						</div>
					) : cyclingItemFilter ? (
						<div className='item-tag-container d-flex justify-content-around align-items-center'>
							<p>Cycling</p>
							<img
								src={cross}
								alt='cross'
								height='25px'
								width='25px'
								onClick={handleRemoveCycling}
							/>
						</div>
					) : walkingItemFilter ? (
						<div className='item-tag-container d-flex justify-content-around align-items-center'>
							<p>Walking</p>
							<img
								src={cross}
								alt='cross'
								height='25px'
								width='25px'
								onClick={handleRemoveWalking}
							/>
						</div>
					) : (
						''
					)}
				</>
			) : (
				''
			)}
		</div>
	);
};

export default ItemTag;
