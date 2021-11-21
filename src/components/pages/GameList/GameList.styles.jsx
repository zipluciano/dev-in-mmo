import styled from 'styled-components';
import { Button } from '../../styles/GlobalStyle';
import { Link } from 'react-router-dom';

const SearchWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	input {
		width: 50%;
		height: 2rem;
		margin: 1rem 0;
		font-size: 1.5rem;
		border-radius: 1rem;
		padding: 0.6rem;
	}

	h3 {
		margin: 0.5rem 0 1.5rem 0;
		font-size: 1.75rem;
	}
`;

const GameWrapper = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 3rem;
`;

const GameCard = styled.div`
	width: 25%;
	height: 40%;
	border-radius: 0.875rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: lightblue;
`;

const Thumbnail = styled.img`
	width: 100%;
	border-radius: 0.875rem 0.875rem 0 0;
`;

const GameHeader = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem 0;

	h3 {
		margin: 0.25rem 0 0 0;
		font-size: 1.55rem;
	}

	p {
		margin: 0.2rem 0 0 0;
		padding: 0.3rem;
		font-size: 0.875rem;
	}
`;

const ButtonCard = styled(Button)`
	border: 1px solid rgba(0, 0, 0, 0.5);
	transition: linear 150ms;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}

	color: #000;
`;

const ShortDescription = styled.article`
	margin: 0.25rem 1.5rem;
	text-align: justify;
	line-height: 1.5rem;
	font-size: 1.05rem;
`;

export {
	SearchWrapper,
	GameWrapper,
	GameCard,
	Thumbnail,
	GameHeader,
	ButtonCard,
	ShortDescription,
	StyledLink,
};
