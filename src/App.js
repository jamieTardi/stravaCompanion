import React, { useState } from 'react';
import {
	Activities,
	Dashboard,
	TotalRunGraph,
	Map,
	PersonalBests,
	Athlete,
	Nav,
} from './components/index';
import { AnimateSharedLayout, motion } from 'framer-motion';
import './styles/styles.css';

function App() {
	const [activities, setActivities] = useState(null);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
	const [darkmode, setDarkmode] = useState(true);
	const [atheleteInfo, setAthelteInfo] = useState(null);
	return (
		<div className='App container col'>
			<>
				<Nav atheleteInfo={atheleteInfo} />
				<Athlete
					isMobile={isMobile}
					atheleteInfo={atheleteInfo}
					setAthelteInfo={setAthelteInfo}
				/>

				<TotalRunGraph activities={activities} />
				<PersonalBests isMobile={isMobile} />
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
