var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hasHistory = ReactRouter.hasHistory;

var Main = require('./components/main');

module.exports = (
  <Router history={hasHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>
);