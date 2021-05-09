import React, { useState } from 'react';
import {
	Activities,
	Dashboard,
	TotalRunGraph,
	Map,
	PersonalBests,
	Athlete,
} from './components/index';

import './styles/styles.css';

function App() {
	const [activities, setActivities] = useState(null);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
	const [darkmode, setDarkmode] = useState(true);
	return (
		<div className='App container col'>
			<>
				<Athlete isMobile={isMobile} setIsMobile={setIsMobile} />
				<TotalRunGraph activities={activities} />
				<PersonalBests />
				<Dashboard
					activities={activities}
					isMobile={isMobile}
					setIsMobile={setIsMobile}
				/>
				<Map activities={activities} />
				<Activities activities={activities} setActivities={setActivities} />
			</>
		</div>
	);
}

export default App;
