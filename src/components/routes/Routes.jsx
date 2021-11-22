import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GameList from '../pages/GameList/GameList';
import GamePage from '../pages/GamePage/GamePage';
import News from '../pages/News/News';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={GameList} />
				<Route exact path='/game/:id' component={GamePage} />
				<Route exact path='/news' component={News} />
			</Switch>
		</Router>
	);
};

export default Routes;
