import React from 'react';

const RunningTable = ({ runningFilter, setRunningFilter, activities }) => {
	const handleRunningFilter = () => {
		activities.forEach((run) => {
			if (run.type === 'Run') {
				setRunningFilter(run);
			}
		});
	};
	return <div></div>;
};

export default RunningTable;
