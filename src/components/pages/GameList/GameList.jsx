import React, { useState, useEffect } from 'react';
// import data from '../../../data/data';
import Header from '../../Header/Header';
import {
	SearchWrapper,
	GameWrapper,
	GameCard,
	Thumbnail,
	GameHeader,
	ButtonCard,
	ShortDescription,
	StyledLink,
} from './GameList.styles';

const GameList = () => {
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

	const axios = require('axios').default;
	const options = {
		method: 'GET',
		url: 'https://mmo-games.p.rapidapi.com/games',
		params: { 'sort-by': 'alphabetical' },
		headers: {
			'x-rapidapi-host': process.env.REACT_APP_API_HOST,
			'x-rapidapi-key': process.env.REACT_APP_API_KEY,
		},
	};

	useEffect(() => {
		axios.request(options).then((response) => {
			setGames(response.data);
		});
		// setGames(data);
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
			<Header />
			<SearchWrapper>
				<input
					type='text'
					name='game-search'
					id='game-search'
					onChange={(e) => setSearch(e.target.value)}
				/>
				<h3>
					{search === ''
						? ''
						: `Resultados para "${search}": (${searchLength})`}
				</h3>
			</SearchWrapper>
			<GameWrapper>
				{games
					.filter((item) => {
						if (search === '') {
							return item;
						} else if (
							item.title
								.toLocaleLowerCase()
								.includes(search.toLocaleLowerCase())
						) {
							return item;
						}
					})
					.map((item) => {
						return (
							<GameCard key={item.id}>
								<Thumbnail
									src={item.thumbnail}
									alt={`Thumbnail of: ${item.title}`}
								/>
								<GameHeader>
									<h3>{item.title}</h3>
									<p>{item.platform}</p>
								</GameHeader>
								<ShortDescription>{item.short_description}</ShortDescription>
								<ButtonCard>
									<StyledLink
										to={`/game/${item.id}`}
										style={{ textdecoration: 'none' }}
									>
										See more
									</StyledLink>
								</ButtonCard>
							</GameCard>
						);
					})}
			</GameWrapper>
		</div>
	);
};

export default GameList;
