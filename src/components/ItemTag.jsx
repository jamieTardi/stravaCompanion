import React from 'react';
import cross from '../assets/icons/cross.svg';

const ItemTag = ({ runningItemFilter, setRunningItemFilter }) => {
	const handleRemoveRunning = () => {
		setRunningItemFilter(false);
	};
	return (
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
	);
};

export default ItemTag;
