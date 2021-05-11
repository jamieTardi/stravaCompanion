import React from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

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
						<img src={atheleteInfo.profile} alt='' className='profile-image' />
					) : (
						''
					)}
				</motion.div>
				<AnimatePresence>{isOpen && <Content />}</AnimatePresence>
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
				<p className='text-dark'>Something Here</p>
			</div>
		</motion.div>
	);
}

const items = [0, 1, 2];
