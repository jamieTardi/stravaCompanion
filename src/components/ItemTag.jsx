import React from 'react';
import cross from '../assets/icons/cross.svg';

const ItemTag = () => {
	return (
		<div className='item-tag-container d-flex justify-content-around align-items-center'>
			<p>Item</p>
			<img src={cross} alt='cross' height='25px' width='25px' />
		</div>
	);
};

export default ItemTag;
