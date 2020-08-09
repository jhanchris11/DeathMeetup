import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import Aside from "./components/Layout/Aside";
import Header from "./components/Layout/Header/Header";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import "./App.css";
import Meet from "./pages/Meet/Meet";
import SignUp from "./components/Sign/SignUp";
import SignIn from "./components/Sign/SignIn";
import CategoryState from "./context/category/categoryState";
import Home from "./pages/Home/Home";
import EventDetails from "./pages/EventDetails/EventDetails";

function App() {
  return (
    <CategoryState>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Layout className="cl-layout">
              <Aside />
              <Layout>
                <Header />
                <Route path="/main" component={Main} />
                <Route path="/meet" component={Meet} />
                <Route path="/home" component={Home} />
                <Route path="/event/:eventId" component={EventDetails} />
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
