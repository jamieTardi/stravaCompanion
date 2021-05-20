import React, { useEffect } from 'react';

const RunningTable = ({ filterRunning, setFilterRunning, activities }) => {
	const handleRunningFilter = () => {
		activities.forEach((run) => {
			if (run.type === 'Run') {
				setFilterRunning(run);
			}
		});
	};
	console.log(filterRunning);
	useEffect(() => {
		try {
			handleRunningFilter();
		} catch (e) {
			console.log(e);
		}
	}, [activities]);
	return <div></div>;
};

export default RunningTable;
