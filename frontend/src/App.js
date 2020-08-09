import React, { Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Aside from './components/Layout/Aside';
import Header from './components/Layout/Header/Header';
import EventDetails from "./pages/EventDetails/EventDetails";

import './App.css';
import Meet from './pages/Meet/Meet';

import CategoryState from './context/category/categoryState';
import Home from './pages/Home/Home';

function App() {
              
	return (
		<CategoryState>
			<Router>
				<Fragment>
					<Switch>
						<Route exact path="/" component={Home} />
                        <Route path="/event/:eventId" component={EventDetails} />
						<Layout className="cl-layout">
							<Aside />
							<Layout>
								<Header />
                              
								<Route path="/meet" component={Meet} />
							</Layout>
						</Layout>
					</Switch>
				</Fragment>
			</Router>
		</CategoryState>
	);
                <Route path="/event/:eventId" component={EventDetails} />
}

export default App;
