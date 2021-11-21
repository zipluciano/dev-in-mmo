import React, { useContext } from 'react';
import { NavBarHeader, NavBarList } from './Header.styles';
import { Link } from 'react-router-dom';
import { Theme } from '../../providers/providers';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
	const { light, setLight } = useContext(Theme);
	console.log(light);

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
					<li>
						{light === true ? (
							<FaMoon onClick={() => setLight((prev) => !prev)} />
						) : (
							<FaSun onClick={() => setLight((prev) => !prev)} />
						)}
					</li>
				</NavBarList>
			</nav>
		</NavBarHeader>
	);
};

export default Header;
