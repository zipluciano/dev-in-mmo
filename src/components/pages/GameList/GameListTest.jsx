import React, { useState, useEffect } from 'react';
import data from '../../../data/data';

const GameListTest = () => {
	const [search, setSearch] = useState('');
	const [searchLength, setSearchLength] = useState(0);
	const [games, setGames] = useState([
		{
			id: '',
			title: '',
			thumbnail: '',
			short_description: '',
			genre: '',
			platform: '',
		},
	]);

	useEffect(() => {
		setGames(data);
		const gamesCheck = games.filter((item) => {
			if (search === '') {
				return item;
			} else if (
				item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
			) {
				return item;
			}
		});
		setSearchLength(gamesCheck.length);
	}, [games, search, searchLength]);

	return (
		<div className='GameListTest'>
			<input
				type='text'
				name='game-search'
				id='game-search'
				onChange={(e) => setSearch(e.target.value)}
			/>
			<h3>
				{search === '' ? '' : `Resultados para "${search}": (${searchLength})`}
			</h3>
			{games
				.filter((item) => {
					if (search === '') {
						return item;
					} else if (
						item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
					) {
						return item;
					}
				})
				.map((item) => {
					return (
						<div key={item.id}>
							<br />
							<h3>{item.title}</h3>
							<pre>{item.thumbnail}</pre>
							<pre>{item.short_description}</pre>
							<pre>{item.genre}</pre>
							<pre>{item.platform}</pre>
							<button>Ver mais</button>
						</div>
					);
				})}
		</div>
	);
};

export default GameListTest;
