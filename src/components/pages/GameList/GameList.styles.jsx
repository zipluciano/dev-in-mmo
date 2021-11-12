import styled from 'styled-components';
import { Button } from '../../styles/GlobalStyle';

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
		font-size: 1.4rem;
	}

	p {
		margin: 0.2rem 0 0 0;
		padding: 0.3rem;
		font-size: 0.875rem;
	}
`;

const ButtonCard = styled(Button)`
	border: 1px solid rgba(0, 0, 0, 0.5);
`;

const ShortDescription = styled.article`
	margin: 0.25rem 1.5rem;
	text-align: justify;
	line-height: 1.5rem;
`;

export {
	GameWrapper,
	GameCard,
	Thumbnail,
	GameHeader,
	ButtonCard,
	ShortDescription,
};
