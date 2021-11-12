import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import GameList from '../pages/GameList/GameList';
import GameListTest from '../pages/GameList/GameListTest';

const Routes = () => {
	return (
		<Router>
			<Switch>
				{/* <Route exact path='/' component={GameList} /> */}
				<Route exact path='/' component={GameListTest} />
			</Switch>
		</Router>
	);
};

export default Routes;
