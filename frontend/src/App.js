import React, { Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Layout/Header/Header';

import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import EventDetails from './pages/EventDetails/EventDetails';
import Profile from './pages/Profile/Profile';

import CategoryState from './context/category/categoryState';

import './App.css';
import HeaderMain from './components/Layout/HeaderMain';
function App() {
	return (
		<CategoryState>
			<Router>
				<Fragment>
					<Switch>
						<Route exact path="/" component={Home} />
						<HeaderMain>
							<Route exact path="/event" component={Event} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/event/:eventId" component={EventDetails} />
						</HeaderMain>
					</Switch>
				</Fragment>
			</Router>
		</CategoryState>
	);
}

export default App;
