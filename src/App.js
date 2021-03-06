import React, { useState } from 'react';
import {
	Activities,
	Dashboard,
	TotalRunGraph,
	Map,
	PersonalBests,
	Athlete,
	Nav,
	ButtonsGraph,
	ItemTag,
	RunningTable,
} from './components/index';
import { AnimateSharedLayout, motion } from 'framer-motion';
import './styles/styles.css';

function App() {
	const [activities, setActivities] = useState(null);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
	const [darkmode, setDarkmode] = useState(true);
	const [atheleteInfo, setAthelteInfo] = useState(null);
	const [isRunning, setIsRunning] = useState(true);
	const [isCycling, setIsCycling] = useState(false);
	const [isSwimming, setIsSwimming] = useState(false);
	const [runningActivities, setRunningActivities] = useState([]);
	const [cyclingActivities, setCyclingActivites] = useState(null);
	const [walkingActivities, setWalkingActivities] = useState(null);
	const [filterRunning, setFilterRunning] = useState(null);

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
				<div>
					<ButtonsGraph
						activities={activities}
						setIsCycling={setIsCycling}
						setIsRunning={setIsRunning}
						setIsSwimming={setIsSwimming}
					/>
					<ItemTag />
				</div>
				<Activities
					activities={activities}
					setActivities={setActivities}
					runningActivities={runningActivities}
					setRunningActivities={setRunningActivities}
					cyclingActivities={cyclingActivities}
					setCyclingActivites={setCyclingActivites}
					walkingActivities={walkingActivities}
					setWalkingActivities={setWalkingActivities}
				/>
				<div>
					<RunningTable
						filterRunning={filterRunning}
						setFilterRunning={setFilterRunning}
						activities={activities}
					/>
				</div>
			</>
		</div>
	);
}

export default App;
