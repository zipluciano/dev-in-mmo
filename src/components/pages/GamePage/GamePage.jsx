import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Header from '../../Header/Header';

// Styles
import {
	FocusedPhotoContainer,
	FocusedPhoto,
	ContainerPhotos,
	MiniPhotos,
	ButtonLeft,
	ButtonRight,
	Classification,
	Description,
	System,
	CommentSection,
	Form,
	Comment,
} from './GamePage.styles';
import { ButtonCard } from '../GameList/GameList.styles';

const GamePage = () => {
	const [game, setGame] = useState([]);
	const [current, setCurrent] = useState(0);
	const [comments, setComments] = useState([]);

	const id = useParams().id;

	const callSpecificGame = (gameId) => {
		const axios = require('axios').default;
		const options = {
			method: 'GET',
			url: 'https://mmo-games.p.rapidapi.com/game',
			params: { id: gameId },
			headers: {
				'x-rapidapi-host': process.env.REACT_APP_API_HOST,
				'x-rapidapi-key': process.env.REACT_APP_API_KEY,
			},
		};

		axios.request(options).then(function (response) {
			setGame(response.data);
		});
	};

	const nextSlide = () => {
		setCurrent(current === game.screenshots.length - 1 ? 0 : current + 1);
	};

	const previousSlide = () => {
		setCurrent(current === 0 ? game.screenshots.length - 1 : current - 1);
	};

	useEffect(() => {
		callSpecificGame(id);
	}, [id]);

	useEffect(() => {
		setComments(getLocalStorageData());
	}, []);

	const addComment = (values) => {
		const data =
			localStorage.getItem('comments') === null
				? []
				: JSON.parse(localStorage.getItem('comments'));
		data.push({ ...values, gameId: id, votes: 0 });
		localStorage.setItem('comments', JSON.stringify(data));
		setComments(data);
	};

	const getLocalStorageData = () => {
		const data =
			localStorage.getItem('comments') === null
				? []
				: JSON.parse(localStorage.getItem('comments'));
		return data;
	};

	const removeVotes = (e) => {
		const index = e.target.getAttribute('comment');
		const data = getLocalStorageData();
		data[index].votes = data[index].votes - 1;
		localStorage.setItem('comments', JSON.stringify(data));
		setComments(data);
	};

	const addVotes = (e) => {
		const index = e.target.getAttribute('comment');
		const data = getLocalStorageData();
		data[index].votes = data[index].votes + 1;
		localStorage.setItem('comments', JSON.stringify(data));
		setComments(data);
	};

	return (
		<div>
			<Header />
			{game.screenshots === undefined ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h3 style={{ fontSize: '2rem', margin: '0.5rem 0.6rem' }}>
						{game.title}
					</h3>
					<FocusedPhotoContainer>
						<ButtonLeft onClick={previousSlide} size={30} />
						<ButtonRight onClick={nextSlide} size={30} />
						{game.screenshots.map((item, index) => {
							return (
								index === current && (
									<FocusedPhoto
										src={item.image}
										alt='Focused Photo'
										key={index}
									/>
								)
							);
						})}
					</FocusedPhotoContainer>
					<ContainerPhotos>
						{game.screenshots.slice(0, game.length).map((item, index) => {
							return (
								<MiniPhotos src={item.image} alt='Minified Photo' key={index} />
							);
						})}
					</ContainerPhotos>
					<Classification>
						<div>
							<h4>Genre</h4>
							<p>{game.genre}</p>
						</div>
						<div>
							<h4>Platform</h4>
							<p>{game.platform}</p>
						</div>
					</Classification>
					<Description>
						<h4>Description</h4>
						{ReactHtmlParser(game.description)}
					</Description>

					<System>
						<h4>System Requirements</h4>
						<ul>
							<li>
								<p>
									<strong>Operation system</strong>:
									{` ${game.minimum_system_requirements.os}`}
								</p>
							</li>
							<li>
								<p>
									<strong>Processor</strong>:
									{` ${game.minimum_system_requirements.processor}`}
								</p>
							</li>
							<li>
								<p>
									<strong>Memory</strong>:
									{` ${game.minimum_system_requirements.memory}`}
								</p>
							</li>
							<li>
								<p>
									<strong>Graphics</strong>:
									{` ${game.minimum_system_requirements.graphics}`}
								</p>
							</li>
							<li>
								<p>
									<strong>Storage</strong>:
									{` ${game.minimum_system_requirements.storage}`}
								</p>
							</li>
						</ul>
					</System>
					<CommentSection>
						<h2>Comments</h2>
						<Form>
							<Formik
								initialValues={{ name: '', email: '', comment: '' }}
								validationSchema={Yup.object().shape({
									name: Yup.string().required(),
									email: Yup.string().email().required(),
									comment: Yup.string().required(),
								})}
								onSubmit={addComment}
							>
								{(formProps) => {
									const { handleSubmit } = formProps;
									return (
										<form>
											<Field
												name='name'
												label='name'
												id='name'
												placeholder='name'
											/>
											<Field
												name='email'
												label='email'
												id='email'
												placeholder='email'
											/>
											<Field
												as='textarea'
												name='comment'
												label='comment'
												id='comment'
												placeholder='Please, leave a comment'
											/>
											<ButtonCard type='submit' onClick={handleSubmit}>
												Send
											</ButtonCard>
										</form>
									);
								}}
							</Formik>
						</Form>
						{comments.map((item, index) => {
							if (id === item.gameId) {
								return (
									<Comment key={index}>
										<h3>{item.name}</h3>
										<div className='votes'>
											<p>{item.comment}</p>
											<div>
												<button
													onClick={removeVotes}
													comment={index}
													className='downvote'
												></button>
												{Number(item.votes) < 0 ? (
													<p style={{ color: 'red' }}>{item.votes}</p>
												) : Number(item.votes) === 0 ? (
													<p>{item.votes}</p>
												) : (
													<p style={{ color: 'green' }}>{`+${item.votes}`}</p>
												)}
												<button
													onClick={addVotes}
													comment={index}
													className='upvote'
												></button>
											</div>
										</div>
									</Comment>
								);
							}
						})}
					</CommentSection>
				</div>
			)}
		</div>
	);
};

export default GamePage;
