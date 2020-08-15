import React, { Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Event from './pages/Event/Event';
import EventDetails from './pages/EventDetails/EventDetails';
import Profile from './pages/Profile/Profile';
// import Comment from './pages/Comment/Comment';

import CategoryState from './context/category/categoryState';

import HeaderMain from './components/Layout/HeaderMain';

import './App.css';
import VideoSection from './components/VideoSection/VideoSection';

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
							<Route exact path="/meet/:eventId" component={VideoSection} />
						</HeaderMain>
					</Switch>
				</Fragment>
			</Router>
		</CategoryState>
	);
}

export default App;
