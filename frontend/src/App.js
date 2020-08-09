import React, { Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Aside from './components/Layout/Aside';
import Header from './components/Layout/Header/Header';
import Main from './pages/Main';
import Profile from './pages/Profile';
import './App.css';
import Meet from './pages/Meet/Meet';
import SignUp from './components/Sign/SignUp';
import SignIn from './components/Sign/SignIn';
import CategoryState from './context/category/categoryState';
import Home from './components/Home/Home';

function App() {
	return (
		<CategoryState>
			<Router>
				<Fragment>
					<Switch>
						<Route exact path="/" component={Home} />
						{/* <Route path='/signin' component={SignIn} />
            <Route path="/signup" component={SignUp} /> */}
						<Layout className="cl-layout">
							<Aside />
							<Layout>
								<Header />
								<Route path="/main" component={Main} />
								<Route path="/meet" component={Meet} />
								<Route path="/profile" component={Profile} />
							</Layout>
						</Layout>
					</Switch>
				</Fragment>
			</Router>
		</CategoryState>
	);
}

export default App;
