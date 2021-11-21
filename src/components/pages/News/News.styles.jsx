import styled from 'styled-components';

const NewsWrapper = styled.div`
	margin: 1.5% auto 3.5% auto;
	padding: 1% 0;
	width: 60%;
	display: flex;
	border-top: 2px solid grey;
	border-bottom: 2px solid grey;

	.content {
		margin: 0 1% 2% 1%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}

	button {
		font-size: 1rem;
		width: 7rem;
		padding: 0.2rem 0.65rem;
		cursor: pointer;
		border-radius: 0.35rem;
		border: 1px transparent;
		transition: linear 150ms;
		background: lightblue;

		&:hover {
			transform: scale(1.03);
		}
	}
`;

export { NewsWrapper };
