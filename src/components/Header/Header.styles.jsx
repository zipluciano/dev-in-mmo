import styled from 'styled-components';

const NavBarHeader = styled.header`
	width: 100vw;
	height: 8vh;
	color: #fff;
	background: #0096c7;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

	h1 {
		margin: 0 0 0 3rem;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 1.5rem;
		align-items: center;
		height: 100%;
		width: 100%;
	}
`;

const NavBarList = styled.ul`
	width: 30%;
	font-size: 1.5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	list-style: none;

	li {
		margin: 0 3rem 0 0;
		font-weight: bold;
	}
`;

export { NavBarHeader, NavBarList };
