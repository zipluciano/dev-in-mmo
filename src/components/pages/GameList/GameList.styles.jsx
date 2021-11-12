import styled from 'styled-components';

const GameWrapper = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 3rem;
`;

const GameCard = styled.div`
	width: 25%;
	max-width: 90%;
	height: 40%;
	border-radius: 0.875rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: lightblue;
`;

const Thumbnail = styled.img`
	width: 100%;
`;

const GameHeader = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0.5rem 1.5rem;
`;

const ShortDescription = styled.article`
	margin: 1rem 1.5rem;
	text-align: justify;
`;

const SeeButton = styled.button`
	font-size: 1.25rem;
	width: 10rem;
	height: 2rem;
	margin: 1rem 0;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 0.35rem;
`;

export {
	GameWrapper,
	GameCard,
	Thumbnail,
	GameHeader,
	ShortDescription,
	SeeButton,
};
