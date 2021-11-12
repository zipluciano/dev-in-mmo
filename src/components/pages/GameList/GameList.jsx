import React, { useState, useEffect } from 'react';
import {
	GameWrapper,
	GameCard,
	Thumbnail,
	GameHeader,
	ShortDescription,
	SeeButton,
} from './GameList.styles';

const GameList = () => {
	const [games, setGames] = useState([
		{ thumbnail: '', title: '', platform: '', short_description: '' },
		{ thumbnail: '', title: '', platform: '', short_description: '' },
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
		<GameWrapper>
			<GameCard>
				<Thumbnail
					src={games[0].thumbnail}
					alt={`Thumbnail of: ${games[0].title}`}
				/>
				<GameHeader>
					<h3>{games[0].title}</h3>
					<p>{games[0].platform}</p>
				</GameHeader>
				<ShortDescription>{games[0].short_description}</ShortDescription>
				<SeeButton>Ver mais</SeeButton>
			</GameCard>
			<GameCard>
				<Thumbnail
					src={games[1].thumbnail}
					alt={`Thumbnail of: ${games[1].title}`}
				/>
				<GameHeader>
					<h3>{games[1].title}</h3>
					<p>{games[1].platform}</p>
				</GameHeader>
				<ShortDescription>{games[1].short_description}</ShortDescription>
				<SeeButton>Ver mais</SeeButton>
			</GameCard>
			<GameCard>
				<Thumbnail
					src={games[2].thumbnail}
					alt={`Thumbnail of: ${games[2].title}`}
				/>
				<GameHeader>
					<h3>{games[2].title}</h3>
					<p>{games[2].platform}</p>
					<p>{console.log(games)}</p>
				</GameHeader>
				<ShortDescription>{games[2].short_description}</ShortDescription>
				<SeeButton>Ver mais</SeeButton>
			</GameCard>
		</GameWrapper>
	);
};

export default GameList;
