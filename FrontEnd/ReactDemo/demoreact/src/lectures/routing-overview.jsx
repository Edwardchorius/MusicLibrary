import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Routing allows navigation, without reloading the page
// It's a pivotal element of writing Single Page Applications
// React Router is a complete routing library for React

// Router appears in the most top Component of an App

class Clock extends Component {
  tellTheTime() {
    //...
  }

  render() {
    return null; // A class component can be a class with functionality and does not need to return something in the render method
  }
}

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
            <Link to="/foo">Foo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Home = () => {
  return (
    <div>
      {name}
      <h1>This is the home page</h1>
    </div>
  );
};

const AboutContent = () => {
  return <h1>This is the About page</h1>;
};

const About = () => {
  return (
    <div>
      <Route path="/about" component={AboutContent} exact />
      <Route path="/about/contact" component={Contact} exact />
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>This is the about page</h1>
    </div>
  );
};

const Contact = () => {
  return <div>This is the contact page</div>;
};

class AppWrapper extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <NavBar />
          </Fragment>
          <Switch>
            <Route path="/" render={Home} component={Home} exact />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
