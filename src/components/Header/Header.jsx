import React, { useContext } from 'react';
import { NavBarHeader, NavBarList } from './Header.styles';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<NavBarHeader>
			<nav>
				<h1>DEVinMMO</h1>
				<NavBarList>
					<li>
						<Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
							Lista de Jogos
						</Link>
					</li>
					<li>
						<Link to='/news' style={{ textDecoration: 'none', color: '#fff' }}>
							Notícias
						</Link>
					</li>
				</NavBarList>
			</nav>
		</NavBarHeader>
	);
};

export default Header;
