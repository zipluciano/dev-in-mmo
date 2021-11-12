// Hooks Imports
import React, { useState, useEffect } from 'react';

// Styles Imports
import {
	GameWrapper,
	GameCard,
	Thumbnail,
	GameHeader,
	ShortDescription,
} from './GameList.styles';
import { ButtonCard } from './GameList.styles';

const GameList = () => {
	const [games, setGames] = useState([
		{ thumbnail: '', title: '', platform: '', short_description: '' },
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
	}, []);

	return (
		<>
			<h1>DEVinMMO</h1>
			<input type='text' />
			<GameWrapper>
				{games.map((item, index) => {
					return (
						<GameCard key={index}>
							<Thumbnail
								src={item.thumbnail}
								alt={`Thumbnail of: ${item.title}`}
							/>
							<GameHeader>
								<h3>{item.title}</h3>
								<p>{item.platform}</p>
							</GameHeader>
							<ShortDescription>{item.short_description}</ShortDescription>
							<ButtonCard>Ver mais</ButtonCard>
						</GameCard>
					);
				})}
			</GameWrapper>
		</>
	);
};

export default GameList;
