import React from 'react';

const PaginationActivity = ({ activitiesPerPage, totalPosts }) => {
	const pageNumbers = [];

	for (let i = 0; i <= Math.ceil(totalPosts / activitiesPerPage); i++) {
		pageNumbers.push[i];
	}
	return (
		<div>
			<ul className='pagination'>
				{pageNumbers.map((page) => (
					<li key={page} className='page-item'>
						<a href='!#' className='page-link'>
							{page}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PaginationActivity;
