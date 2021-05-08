import React from 'react';
import { Card, Table } from 'react-bootstrap';
import trophy from '../assets/icons/trophy.svg';

const PersonalBests = () => {
	return (
		<div className='container'>
			<Card className='bg-dark text-white d-flex'>
				<Card.Img variant='top' src={trophy} className='svg-image' />
				<Card.Body>
					<Card.Title>Running Personal Bests</Card.Title>
					<Card.Text>
						<Table striped bordered hover variant='dark'>
							<thead>
								<tr>
									<th>1 Km</th>
									<th>1 Mile</th>
									<th>5k</th>
									<th>10k</th>
									<th>Half Marathon</th>
									<th>Marathon</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>3:35</td>
									<td>5:44</td>
									<td>19:07</td>
									<td>39:26</td>
									<td>1:24:32</td>
									<td>4:05:04</td>
								</tr>
							</tbody>
						</Table>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default PersonalBests;
