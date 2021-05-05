import React, { useState } from 'react';
import { Activities, Dashboard, TotalRunGraph, Map } from './components/index';
import './styles/styles.css';

function App() {
	const [activities, setActivities] = useState(null);
	const [darkmode, setDarkmode] = useState(true);
	return (
		<div className='App container col'>
			<TotalRunGraph activities={activities} />
			<Dashboard activities={activities} />
			<Map activities={activities} />
			<Activities activities={activities} setActivities={setActivities} />
			<p>test</p>
		</div>
	);
}

export default App;
