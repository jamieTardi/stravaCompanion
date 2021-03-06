import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import trophy from '../assets/icons/trophy.svg';
import chartIcon from '../assets/icons/pie-chart.svg';

export default function Nav({ atheleteInfo }) {
	return (
		<>
			{atheleteInfo ? (
				<AnimateSharedLayout>
					<motion.ul
						layout
						className='nav-container'
						initial={{ borderRadius: 25 }}>
						{items.map((item, i) => (
							<Item key={item} atheleteInfo={atheleteInfo} i={i} />
						))}
					</motion.ul>
				</AnimateSharedLayout>
			) : (
				<p>...loading</p>
			)}
		</>
	);
}

function Item({ atheleteInfo, i }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<>
			<motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
				<motion.div className='avatar' layout>
					{i === 0 ? (
						<img
							src={atheleteInfo.profile}
							alt='profile'
							className='profile-image'
						/>
					) : i === 1 ? (
						<div className='profile-nav-container'>
							<img src={chartIcon} alt='charts' className='profile-image' />
							<p className='profile-text text-dark'>Profile</p>
						</div>
					) : i === 2 ? (
						<div className='profile-nav-container'>
							<img src={trophy} alt='trophy' className='profile-image' />
							<p className='profile-text text-dark'>Personal Bests</p>
						</div>
					) : (
						''
					)}
				</motion.div>
				<AnimatePresence>
					{(i === 0 && isOpen && <Content />) ||
						(i === 1 && isOpen && <NavCharts />) ||
						(i === 2 && isOpen && <NavTrophy />)}
				</AnimatePresence>
			</motion.li>
		</>
	);
}

function Content() {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<div className='row pt-4 pl-3'>
				<p className='text-dark'>Atheletes Profile</p>
			</div>
		</motion.div>
	);
}

function NavTrophy() {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<div className='row pt-4 pl-3'>
				<p className='text-dark'>Trophy</p>
			</div>
		</motion.div>
	);
}

function NavCharts() {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<div className='row pt-4 pl-3'>
				<p className='text-dark'>Charts</p>
			</div>
		</motion.div>
	);
}

const items = [0, 1, 2];
