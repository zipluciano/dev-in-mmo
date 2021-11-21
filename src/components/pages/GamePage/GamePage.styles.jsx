import styled from 'styled-components';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const FocusedPhotoContainer = styled.div`
	width: 50%;
	position: relative;
	margin: 0 0.6rem;
`;

const FocusedPhoto = styled.img`
	width: 100%;
	display: flex;
`;

const ContainerPhotos = styled.div`
	width: 60%;
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
`;

const MiniPhotos = styled.img`
	width: 13rem;
	margin: 1rem 0.6rem;
`;

const ButtonLeft = styled(BsFillArrowLeftCircleFill)`
	position: absolute;
	left: 0.5rem;
	top: 50%;
	bottom: 50%;
	background: rgba(256, 256, 256, 0.7);
	border-radius: 50%;
	cursor: pointer;
`;

const ButtonRight = styled(BsFillArrowRightCircleFill)`
	position: absolute;
	top: 50%;
	bottom: 50%;
	right: 0.5rem;
	background: rgba(256, 256, 256, 0.7);
	border-radius: 50%;
	cursor: pointer;
`;

const Classification = styled.section`
	width: 30%;
	display: flex;
	margin: 0.5rem 0.6rem;

	div {
		margin: 0 2rem 0 0;
	}

	h4 {
		margin: 0.35rem 0;
	}
`;

const Description = styled.div`
	width: 80%;
	margin: 1rem 0.6rem;
	line-height: 1.3;

	h4 {
		margin: 0.35rem 0;
	}
`;

const System = styled.div`
	width: 60%;
	margin: 1rem 0.6rem;
	line-height: 1.4;

	h4 {
		margin: 0.35rem 0;
	}
`;

const CommentSection = styled.section`
	margin: 1rem 0.6rem;
`;

const Form = styled.section`
	form {
		width: 100%;
	}

	display: flex;
	width: 50%;

	#name,
	#email,
	#comment {
		font-family: 'Montserrat', sans-serif;
		font-size: 1rem;
	}

	#name,
	#email {
		min-width: 40%;
		height: 2rem;
	}

	#email {
		margin: 1.5rem 0 1.5rem 20%;
	}

	#comment {
		min-width: 100%;
		height: 6rem;
		resize: none;
	}
`;

const Comment = styled.div`
	margin: 1.25rem 0;
	display: flex;
	width: 50%;
	flex-direction: column;

	.votes {
		display: flex;
		justify-content: space-between;
		margin: 1% 0;
		gap: 5%;
		padding: 0.5rem;
		border-top: 2px solid grey;
		border-bottom: 2px solid grey;
	}

	.votes div {
		width: 50%;
		display: flex;
		justify-content: flex-end;
		gap: 10%;
	}

	.downvote {
		width: 2rem;
		clip-path: polygon(50% 100%, 0 0, 100% 0);
		border: transparent;
		background: red;
		cursor: pointer;
	}

	.upvote {
		width: 2rem;
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		border: transparent;
		background: green;
		cursor: pointer;
	}
`;

export {
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
};
