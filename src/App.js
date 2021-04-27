import React, { useState } from 'react';
import { Activities, Dashboard } from './components/index';
import './styles/styles.css';

function App() {
	const [activities, setActivities] = useState(null);
	const [darkmode, setDarkmode] = useState(true);
	return (
		<div className='App '>
			<Dashboard activities={activities} />
			<Activities activities={activities} setActivities={setActivities} />
		</div>
	);
}

export default App;
