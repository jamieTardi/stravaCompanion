import React, { useState } from 'react';
import {
	Activities,
	Dashboard,
	TotalRunGraph,
	Map,
	PersonalBests,
} from './components/index';
import { Navbar } from './components/Navigation/index';
import './styles/styles.css';

function App() {
	const [activities, setActivities] = useState(null);
	const [darkmode, setDarkmode] = useState(true);
	return (
		<div className='App container col'>
			<Navbar />
			<TotalRunGraph activities={activities} />
			<PersonalBests />
			<Dashboard activities={activities} />
			<Map activities={activities} />
			<Activities activities={activities} setActivities={setActivities} />
			<p>test</p>
		</div>
	);
}

export default App;
