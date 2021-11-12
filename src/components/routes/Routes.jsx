import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameList from '../pages/GameList/GameList';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={GameList} />
			</Switch>
		</Router>
	);
};

export default Routes;
