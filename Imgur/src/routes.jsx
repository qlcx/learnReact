var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Main = require('./components/main');

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>
);