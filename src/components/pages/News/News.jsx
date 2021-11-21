import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

// Styles
import { SearchWrapper } from '../GameList/GameList.styles';
import { NewsWrapper } from './News.styles';

const News = () => {
	const [search, setSearch] = useState('');
	const [searchLength, setSearchLength] = useState(0);
	const [news, setNews] = useState([]);

	const getNews = () => {
		const axios = require('axios').default;

		const options = {
			method: 'GET',
			url: 'https://mmo-games.p.rapidapi.com/latestnews',
			headers: {
				'x-rapidapi-host': process.env.REACT_APP_API_HOST,
				'x-rapidapi-key': process.env.REACT_APP_API_KEY,
			},
		};

		axios.request(options).then(function (response) {
			setNews(response.data);
		});
	};

	useEffect(() => {
		getNews();
		const newsCheck = news.filter((item) => {
			if (search === '') {
				return item;
			} else if (
				item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
			) {
				return item;
			}
		});
		setSearchLength(newsCheck.length);
	}, [news, search, searchLength]);

	return (
		<div>
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
			{news === [] ? (
				<h1>Loading...</h1>
			) : (
				news
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
					.map((item, index) => {
						return (
							<NewsWrapper key={index}>
								<img src={item.thumbnail} />
								<div className='content'>
									<h3>{item.title}</h3>
									<p>{item.short_description}</p>
									<button>
										<Link
											to={{ pathname: item.article_url }}
											target='_blank'
											style={{ textDecoration: 'none', color: 'black' }}
										>
											See on site
										</Link>
									</button>
								</div>
							</NewsWrapper>
						);
					})
			)}
		</div>
	);
};

export default News;
