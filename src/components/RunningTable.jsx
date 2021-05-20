import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

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
	return (
		<div>
			<Table striped bordered hover variant='dark'>
				<thead>
					<tr>
						<th>Date of Activity</th>
						<th>Duration</th>
						<th>Name of Activity</th>
						<th>Distance Ran</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan='2'>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default RunningTable;
