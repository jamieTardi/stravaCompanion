import React from 'react';

const PaginationActivity = ({ activitiesPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / activitiesPerPage); i++) {
		pageNumbers.push([i]);
	}
	return (
		<div>
			<ul className='pagination'>
				{pageNumbers.map((page) => (
					<li key={page} className='page-item'>
						<a
							onClick={() => {
								paginate(page);
							}}
							href='!#'
							className='page-link'>
							{page}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PaginationActivity;
