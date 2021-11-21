import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameList from '../pages/GameList/GameList';
import GamePage from '../pages/GamePage/GamePage';
import News from '../pages/News/News';
import { useState } from 'react';
import { Theme } from '../../providers/providers';

const Routes = () => {
	const [light, setLight] = useState(true);

	return (
		<Router>
			<Theme.Provider value={{ light, setLight }}>
				<Switch>
					<Route exact path='/' component={GameList} />
					<Route exact path='/game/:id' component={GamePage} />
					<Route exact path='/news' component={News} />
				</Switch>
			</Theme.Provider>
		</Router>
	);
};

export default Routes;
