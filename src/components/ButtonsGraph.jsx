import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const ButtonsGraph = ({ setIsCycling, setIsRunning, setIsSwimming }) => {
	// turn this into filters
	const handleIsRunning = () => {
		setIsRunning(true);
		setIsCycling(false);
		setIsSwimming(false);
	};
	return (
		<div>
			<ButtonGroup aria-label='Basic example' className='my-3'>
				<Button variant='secondary' onClick={handleIsRunning}>
					Running 🏃‍♂️
				</Button>
				<Button variant='secondary'>Cycling 🚴</Button>
				<Button variant='secondary'>Swimming 🏊‍♂️</Button>
			</ButtonGroup>
		</div>
	);
};

export default ButtonsGraph;
