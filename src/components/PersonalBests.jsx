import React from 'react';
import { Card, Table } from 'react-bootstrap';
import trophy from '../assets/icons/trophy.svg';

const PersonalBests = ({ isMobile }) => {
	return (
		<div
			className={
				isMobile
					? 'container d-flex flex-column justify-content-around'
					: 'container d-flex justify-content-around'
			}>
			<Card className='bg-dark text-white d-flex pt-4'>
				<Card.Img variant='top' src={trophy} className='svg-image' />
				<Card.Body
					className={
						isMobile
							? 'd-flex justify-content-center align-items-center flex-column'
							: ''
					}>
					<Card.Title>Running Personal Bests</Card.Title>
					<Card.Text>
						<Table
							striped
							bordered
							hover
							variant='dark'
							className={isMobile ? 'd-flex ' : ''}>
							<thead>
								<tr
									className={
										isMobile ? 'd-flex flex-column justify-content-center ' : ''
									}>
									<th className='table-data-title'>1 Km</th>
									<th className='table-data-title'>1 Mile</th>
									<th className='table-data-title'>5k</th>
									<th className='table-data-title'>10k</th>
									<th className='table-data-title'>Half Marathon</th>
									<th className='table-data-title'>Marathon</th>
								</tr>
							</thead>
							<tbody>
								<tr className={isMobile ? 'd-flex flex-column' : ''}>
									<td className='table-data-title'>3:35</td>
									<td className='table-data-title'>5:44</td>
									<td className='table-data-title'>19:07</td>
									<td className='table-data-title'>39:26</td>
									<td className='table-data-title'>1:24:32</td>
									<td className='table-data-title'>4:05:04</td>
								</tr>
							</tbody>
						</Table>
					</Card.Text>
				</Card.Body>
			</Card>

			<Card
				className={
					isMobile
						? 'bg-dark text-white d-flex pt-4 mt-3'
						: 'bg-dark text-white d-flex pt-4'
				}>
				<Card.Img variant='top' src={trophy} className='svg-image' />
				<Card.Body
					className={
						isMobile
							? 'd-flex justify-content-center align-items-center flex-column'
							: ''
					}>
					<Card.Title>Running Personal Bests</Card.Title>
					<Card.Text>
						<Table
							striped
							bordered
							hover
							variant='dark'
							className={isMobile ? 'd-flex ' : ''}>
							<thead>
								<tr
									className={
										isMobile ? 'd-flex flex-column justify-content-center ' : ''
									}>
									<th className='table-data-title'>Highest known FTP</th>
									<th className='table-data-title'>Highest known VO2 Max</th>
									<th className='table-data-title'>Longest Ride</th>
								</tr>
							</thead>
							<tbody>
								<tr
									className={
										isMobile ? 'd-flex flex-column justify-content-center ' : ''
									}>
									<td className='table-data-title'>406w @75kg</td>
									<td className='table-data-title'>62</td>
									<td className='table-data-title'>136 miles</td>
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
